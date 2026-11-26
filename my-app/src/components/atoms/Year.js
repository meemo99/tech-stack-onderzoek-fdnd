import styles from "./Year.module.css"
export default function Year({ start }) {
    return <h3 className={styles.yearHeading}><time className={styles.yearTime} dateTime={start}>{start}</time></h3>;
}
