import Post from "./Post";
import styles from "./posts.module.css"

export default function Posts() {
    return (
        <ul className={styles.posts}>
            <li>
                <Post />
            </li>
        </ul>
    );
}