import styles from "./category.module.css"

export default function Category({category}) {
    return (
        <dl className={styles.category}>
            <dt className="a11y-hidden">Category</dt>
            {category.map((ctgr, idx) => (
            <dd key={idx}>{ctgr}</dd>
            ))}
        </dl>
    );
}
