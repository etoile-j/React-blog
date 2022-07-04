import styles from "./banner.module.css";

export default function Banner({data}) {
    return (
		<>
			<div className={styles.banner}>
			<div className="max-width">
				<div className={styles["banner-contents"]}>
					<p className={styles["sub-text"]}>{data.subTitle}</p>
					<p className={styles["main-text"]}>{data.mainTitle}</p>
					<p className={styles.description}>
						{data.description}
					</p>
				</div>
			</div>
			</div>
		</>
    );
}