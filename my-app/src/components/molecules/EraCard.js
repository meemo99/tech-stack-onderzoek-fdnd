import styles from "./EraCard.module.css"
export default function EraCard({ era }) {
    return (
        <article className={styles.card}>
            <h2>{era.title}</h2>
            <p className={styles.content}>{era.summary}</p>
            <p className={styles.content}> {era.content_blocks[0].text}</p>
            <blockquote className={styles.quote}>{era.content_blocks[1].text}</blockquote>
            <picture>
                <source
                    srcSet={`https://fdnd-agency.directus.app/assets/${era.cover}?width=500&height=400&format=avif`}
                    type="image/avif"
                />
                <source
                    srcSet={`https://fdnd-agency.directus.app/assets/${era.cover}?width=500&height=400&format=webp`}
                    type="image/webp"
                />
                <img
                    src={`https://fdnd-agency.directus.app/assets/${era.cover}?width=500&height=400&`}
                    width="500"
                    height="400"
                    alt=""
                />
            </picture>
        </article>
    )
}