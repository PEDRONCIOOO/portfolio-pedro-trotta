import styles from "./StatusBadge.module.scss";

interface StatusBadgeProps {
  role: string;
  company?: string;
  href?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ role, company, href }) => {
  const content = (
    <>
      <span className={styles.dot} />
      <span>
        {company ? (
          <>{role} @ <span className={styles.company}>{company}</span></>
        ) : (
          <span className={styles.company}>{role}</span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.badge}>
        {content}
      </a>
    );
  }

  return <span className={styles.badge}>{content}</span>;
};

export { StatusBadge };
