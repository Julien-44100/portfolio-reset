"use client";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<nav className={styles.Footer}>
			<img
				src="/image/copywright.png"
				alt="logo"
				className={styles.logofooter}
			/>
		</nav>
	);
}
