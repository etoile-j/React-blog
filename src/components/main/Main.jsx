import About from "./About";
import styles from "./main.module.css"
import Posts from "./Posts";

export default function Main({data}) {
    return (
        <main>
            <div className={`${styles["max-width"]} ${"max-width"}`}>
                <h2 className="a11y-hidden">Post</h2>
                <Posts data={data.posts} />
                <About data={data.users[0]}/>
            </div>
        </main>
    );
}
