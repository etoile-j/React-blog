import { Link } from "react-router-dom";
import Author from "./Author";
import Category from "./Category";
import styles from "./post.module.css";

export default function Post({data}) {
    return (
        <>
            {data.map(post => (
                <li key={post.id}>
                <Link to="/postView" className={styles.post}>
                    <article>
                        <img src={process.env.PUBLIC_URL + post.thumbnail} alt="" />
                        <div className={styles["contents-wrap"]}>
                            <Category category={post.category} />
                            <h3>{post.title}</h3>
                            <Author data={post} />
                            <p className={styles["post-description"]}>
                                {post.contents[0].text}
                            </p>
                        </div>
                    </article>
                </Link>
                </li>
            ))}
        </>
    );
}