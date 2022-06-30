import styles from "./banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
			<div className={styles["max-width"]}>
				<div className={styles["banner-contents"]}>
					<p className={styles["sub-text"]}>React Blog</p>
					<p className={styles["main-text"]}>My BLOG</p>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolor provident beatae deserunt magnam, illo neque. Maiores ipsum commodi dolorum beatae aliquid laboriosam est
					</p>
				</div>
			</div>
		</div>
    )
}