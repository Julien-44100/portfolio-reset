"use client";
import styles from "./NavBar.module.css";

export default function NavBar() {
	return (
		<nav className={styles.navbar}>
			<img src="/image/Portfoliodev.jpg" alt="logo" className={styles.logo} />
		</nav>
	);
}
