import { getPosts } from "@/app/utils/utils";
import { Grid } from "@/once-ui/components";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
}

export function Posts({ range, columns = "1", thumbnail = false }: PostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);

  // Portuguese twins (same slug) — used for title/tag when the site is in PT
  let ptBlogs: ReturnType<typeof getPosts> = [];
  try {
    ptBlogs = getPosts(["src", "app", "blog", "posts", "pt"]);
  } catch {
    ptBlogs = [];
  }

  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : sortedBlogs.length)
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid columns={columns} mobileColumns="1" fillWidth marginBottom="40" gap="m">
          {displayedBlogs.map((post) => (
            <Post
              key={post.slug}
              post={post}
              ptPost={ptBlogs.find((p) => p.slug === post.slug)}
              thumbnail={thumbnail}
            />
          ))}
        </Grid>
      )}
    </>
  );
}
