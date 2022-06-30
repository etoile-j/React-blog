import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer>
			<div className={styles["max-width"]}>
				<h2>©Weniv Corp.</h2>
				<button className={styles["top-button"]}>TOP</button>
			</div>
		</footer>
    )
}