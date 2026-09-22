"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes, protectedRoutes } from "@/app/resources";
import { Flex, Spinner, Button, Heading, Column, PasswordInput } from "@/once-ui/components";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const dynamicRoutes = ["/blog", "/work", "/courses"] as const;

// Pure, synchronous check — runs identically on the server and the client,
// so public pages are server-rendered with their full content (SEO).
function isRouteEnabled(pathname: string | null) {
  if (!pathname) return false;

  if (pathname in routes) {
    return Boolean(routes[pathname as keyof typeof routes]);
  }

  return dynamicRoutes.some((route) => pathname.startsWith(route) && routes[route]);
}

function isProtected(pathname: string | null) {
  return Boolean(pathname && protectedRoutes[pathname as keyof typeof protectedRoutes]);
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const enabled = isRouteEnabled(pathname);
  const passwordRequired = isProtected(pathname);

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(passwordRequired);
  const [error, setError] = useState<string | undefined>(undefined);

  // Only protected routes need a client round-trip; everything else renders immediately.
  useEffect(() => {
    if (!passwordRequired) {
      setCheckingAuth(false);
      return;
    }

    let cancelled = false;
    setCheckingAuth(true);
    setIsAuthenticated(false);

    fetch("/api/check-auth")
      .then((response) => {
        if (!cancelled) setIsAuthenticated(response.ok);
      })
      .finally(() => {
        if (!cancelled) setCheckingAuth(false);
      });

    return () => {
      cancelled = true;
    };
  }, [pathname, passwordRequired]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  };

  if (!enabled) {
    return <NotFound />;
  }

  if (passwordRequired) {
    if (checkingAuth) {
      return (
        <Flex fillWidth paddingY="128" horizontal="center">
          <Spinner />
        </Flex>
      );
    }

    if (!isAuthenticated) {
      return (
        <Column paddingY="128" maxWidth={24} gap="24" center>
          <Heading align="center" wrap="balance">
            This page is password protected
          </Heading>
          <Column fillWidth gap="8" horizontal="center">
            <PasswordInput
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              errorMessage={error}
            />
            <Button onClick={handlePasswordSubmit}>Submit</Button>
          </Column>
        </Column>
      );
    }
  }

  return <>{children}</>;
};

export { RouteGuard };
