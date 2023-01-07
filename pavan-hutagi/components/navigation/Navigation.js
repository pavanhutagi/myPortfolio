import styles from "./Navigation.module.css";

export default function Navigation() {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>Icon</div>
			<div className={styles.menu}>Menu</div>
		</div>
	);
}
