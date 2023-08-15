import Aside from "./components/aside";
import Header from "./components/header";
import "./styles.css";

export default function Home() {
	return (
		<>
			<Header />
			<div className="container">
				<main>ola</main>
				<Aside />
			</div>
		</>
	);
}
