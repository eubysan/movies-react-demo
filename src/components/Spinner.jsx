import styles from './Snniper.module.css';

export function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.dot1}></div>
      <div className={styles.dot2}></div>
    </div>
  );
}
