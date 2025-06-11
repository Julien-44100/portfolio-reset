import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			{" "}
			<h1 className={styles.slideInFromLeft}>
				Je suis Julien Botar, développeur web junior ; découvrez mon
				savoir-faire à travers ce portfolio.
			</h1>
			<section className={styles.frontendbackend}>
				<section
					className={`${styles.section} ${styles.slideInFromLeft} ${styles.frontend}`}
				>
					<h2>Front-End</h2>
					<ul>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>JavaScript + React + Next.js</li>
					</ul>
				</section>
				<section
					className={`${styles.section} ${styles.slideInFromLeft} ${styles.backend}`}
				>
					<h2>Back-End</h2>
					<ul>
						<li>Express.js</li>
						<li>SQL</li>
					</ul>
				</section>
			</section>
		</div>
	);
}
