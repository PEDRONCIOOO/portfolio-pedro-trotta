# Hero "Status & Metrics" Enhancement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enhance the home hero section with a Wabtec status badge, gradient headline, animated metric counters, terminal glow, and updated content.

**Architecture:** Add two small client components (StatusBadge, MetricPills) to the hero grid's left column. Update existing content/styles/translations. No structural changes to the page layout.

**Tech Stack:** Next.js 14, React, SCSS Modules, Once UI components

---

### Task 1: Create StatusBadge component

**Files:**
- Create: `src/components/StatusBadge/StatusBadge.tsx`
- Create: `src/components/StatusBadge/StatusBadge.module.scss`
- Create: `src/components/StatusBadge/index.ts`

- [ ] **Step 1: Create StatusBadge.module.scss**

```scss
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 16px 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
  }
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: rgba(34, 197, 94, 0.4);
    animation: pulse 2s ease-in-out infinite;
  }
}

.company {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0; transform: scale(2); }
}
```

- [ ] **Step 2: Create StatusBadge.tsx**

```tsx
import styles from "./StatusBadge.module.scss";

interface StatusBadgeProps {
  role: string;
  company: string;
  href: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ role, company, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.badge}>
      <span className={styles.dot} />
      <span>
        {role} @ <span className={styles.company}>{company}</span>
      </span>
    </a>
  );
};

export { StatusBadge };
```

- [ ] **Step 3: Create index.ts barrel**

```ts
export { StatusBadge } from "./StatusBadge";
```

---

### Task 2: Create MetricPills component

**Files:**
- Create: `src/components/MetricPills/MetricPills.tsx`
- Create: `src/components/MetricPills/MetricPills.module.scss`
- Create: `src/components/MetricPills/index.ts`

- [ ] **Step 1: Create MetricPills.module.scss**

```scss
.container {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.pill {
  display: flex;
  align-items: baseline;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
}

.value {
  font-size: 1.125rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  font-variant-numeric: tabular-nums;
}

.label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 480px) {
  .container {
    gap: 8px;
  }
  .pill {
    padding: 6px 12px;
  }
  .value {
    font-size: 1rem;
  }
  .label {
    font-size: 0.6875rem;
  }
}
```

- [ ] **Step 2: Create MetricPills.tsx**

```tsx
"use client";

import { useEffect, useState } from "react";
import styles from "./MetricPills.module.scss";

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

function AnimatedValue({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.round(increment * step * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <>{current % 1 === 0 ? current.toFixed(0) : current.toFixed(1)}{suffix}</>;
}

interface MetricPillsProps {
  metrics: Metric[];
}

const MetricPills: React.FC<MetricPillsProps> = ({ metrics }) => {
  return (
    <div className={styles.container}>
      {metrics.map((m, i) => (
        <div key={i} className={styles.pill}>
          <span className={styles.value}>
            <AnimatedValue target={m.value} suffix={m.suffix} />
          </span>
          <span className={styles.label}>{m.label}</span>
        </div>
      ))}
    </div>
  );
};

export { MetricPills };
```

- [ ] **Step 3: Create index.ts barrel**

```ts
export { MetricPills } from "./MetricPills";
```

---

### Task 3: Update headline, subline, and translations

**Files:**
- Modify: `src/app/resources/content.js:66-74`
- Modify: `src/app/resources/content-pt.js:66-74`
- Modify: `src/i18n/translations.ts:12,143`

- [ ] **Step 1: Update content.js headline/subline**

```js
headline: <>Engineering software that moves the world.</>,
subline: (
  <>
    I'm <strong>Pedro Trotta</strong>, a Senior Software Engineer with 6+ years
    of experience architecting high-performance solutions for enterprise, SaaS & transportation platforms.
  </>
),
```

- [ ] **Step 2: Update content-pt.js headline/subline**

```js
headline: <>Engenharia de software que move o mundo.</>,
subline: (
  <>
    Eu sou <strong>Pedro Trotta</strong>, Engenheiro de Software Senior com 6+ anos
    de experiencia arquitetando solucoes de alta performance para plataformas enterprise, SaaS e transporte.
  </>
),
```

- [ ] **Step 3: Update translations.ts EN keys**

Change `home.headline` to `"Engineering software that moves the world."` and add new keys:
```
"home.status.role": "Senior Software Engineer",
"home.status.company": "Wabtec Corporation",
"home.metric.years": "Years",
"home.metric.projects": "Projects",
"home.metric.uptime": "Uptime",
```

- [ ] **Step 4: Update translations.ts PT keys**

Change `home.headline` to `"Engenharia de software que move o mundo."` and add new keys:
```
"home.metric.years": "Anos",
"home.metric.projects": "Projetos",
"home.metric.uptime": "Uptime",
```

---

### Task 4: Update hero section in page.tsx

**Files:**
- Modify: `src/app/page.tsx:76-184`
- Modify: `src/app/home.module.scss`

- [ ] **Step 1: Add gradient headline style to home.module.scss**

```scss
.gradientHeadline {
  background: linear-gradient(135deg, #ef4444, #dc2626, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

- [ ] **Step 2: Update page.tsx hero**

Import `StatusBadge` and `MetricPills`. In the left column:
1. Add `StatusBadge` as first RevealFx (delay 0)
2. Add `.gradientHeadline` class to the Heading
3. Remove the "About me" Button
4. Replace tech icons RevealFx with MetricPills (delay 0.6)
5. Fix the "selected work" gradient from cyan to red

- [ ] **Step 3: Fix the hardcoded cyan gradient**

Change line 265 from:
```
background: "linear-gradient(135deg, #00e5ff, #00acc1)",
```
to:
```
background: "linear-gradient(135deg, #ef4444, #dc2626)",
```

---

### Task 5: Update CodeTerminal content and add glow

**Files:**
- Modify: `src/components/CodeTerminal/CodeTerminal.tsx:28-83`
- Modify: `src/components/CodeTerminal/CodeTerminal.module.scss:1-19`

- [ ] **Step 1: Update terminal code content**

Update the `fullCode` array to reference Wabtec:
- `company: "Wabtec Corporation"`
- `role: "Senior Software Engineer"`
- Add `"Java/Spring Boot"` and `"Angular"` to the stack
- Update achievements to match Wabtec context

- [ ] **Step 2: Add brand glow to terminal SCSS**

Add to `.terminal`:
```scss
&:hover {
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 15px 30px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(239, 68, 68, 0.15);
}
```

---

### Task 6: Verify build

- [ ] **Step 1: Run build**

Run: `npm run build`
Expected: Build succeeds with no errors
