import Head from "next/head";
import styles from "../styles/Home.module.css";
import Particles from "react-particles";
import { loadLinksPreset } from "tsparticles-preset-links";

export async function customInit(Engine) {
	await loadLinksPreset(Engine);
}

export default function Home() {
	const options = {
		preset: "links",
		background: {
			color: {
				value: "transparent",
			},
		},
		particles: {
			color: {
				value: "#272727",
			},
			links: {
				color: "#272727",
			},
		},
	};

	return (
		<div className={styles.container}>
			<Particles
				options={options}
				init={customInit}
			></Particles>

			<Head>
				<title>Pavan Hutagi</title>
			</Head>

			<main>
				<h1 className={styles.title}>Pavan Hutagi</h1>
				<code className={styles.description}>I design & build websites.</code>
			</main>

			<footer>
				<a href="https://in.linkedin.com/in/pavan-hutagi"> Pavan Hutagi </a>
			</footer>

			<style jsx>{`
				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #000000;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
					text-decoration: none;
					color: inherit;
				}
				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
				}
			`}</style>

			<style
				jsx
				global
			>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
				}
				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
}
