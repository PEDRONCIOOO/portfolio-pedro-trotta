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

  return (
    <>
      {current % 1 === 0 ? current.toFixed(0) : current.toFixed(1)}
      {suffix}
    </>
  );
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
