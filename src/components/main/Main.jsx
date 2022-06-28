import styles from "./main.module.css"
import Posts from "./Posts";

export default function Main() {
    return (
        <main>
            <div className={styles["max-width"]}>
                <h2 className="a11y-hidden">Post</h2>
                <Posts />
            </div>
        </main>
    );
}
