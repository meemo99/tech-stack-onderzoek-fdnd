import styles from "./Timeline.module.css"
import EraCard from "@/components/molecules/EraCard";
import Year from "@/components/atoms/Year";


export default function Timeline({ eras }) {
    return (
        <main>
            <ol className={styles.eraList}>
                {eras.map((era) => (
                    <li className={styles.timeList} key={era.id}>
                        <div className="styles.era">
                            <EraCard era={era} />
                        </div>
                        <div className="styles.timeline">
                            <Year start={era.start_year} />
                        </div>
                    </li>
                ))}
            </ol>
        </main>
    );
}