import styles from "./category.module.css"

export default function Category() {
    return (
        <dl className={styles.category}>
            <dt className="a11y-hidden">Category</dt>
            <dd>Life</dd>
            <dd>Style</dd>
        </dl>
    );
}
