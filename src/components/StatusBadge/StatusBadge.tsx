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
