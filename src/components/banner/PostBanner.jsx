import styles from "./banner.module.css";

export default function PostBanner() {
    return (
        <div className={styles.banner} style={{"background-image": `url(${process.env.PUBLIC_URL}/assets/post-background6.jpg)`}}>
			<div className="max-width">
				<div className={styles["banner-contents"]}>
					<p className={styles.today}>May <em>25</em> Wednesday</p>
				</div>
			</div>
		</div>
    );
}