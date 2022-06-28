import Author from "./Author"
import Category from "./Category"
import styles from "./post.module.css"

export default function Post() {
    return (
        <a href="post-view.html" className={styles.post}>
            <article>
                <img src={process.env.PUBLIC_URL + 'assets/post-img6.jpg'} alt="" />
                <div className={styles["contents-wrap"]}>
                    <Category />
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                    <Author />
                    <p className={styles["post-description"]}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                        facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                        corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                        illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                        dolor quas odio cum incidunt repudiandae vel."
                    </p>
                </div>
            </article>
        </a>
    )
}