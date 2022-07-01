import About from "./About";
import styles from "./main.module.css"
import Posts from "./Posts";

export default function Main() {
    return (
        <main>
            <div className={`${styles["max-width"]} ${"max-width"}`}>
                <h2 className="a11y-hidden">Post</h2>
                <Posts />
                <About />
            </div>
        </main>
    );
}
