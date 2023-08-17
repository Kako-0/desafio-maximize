import "./styles.css";
import Header from "./components/header";
import Forms from "./components/forms";
import Aside from "./components/aside";
import Contato from "./components/contato";

export default function Home() {
	return (
		<>
			{/* <Header /> */}
			<div className="container">
				<main className="container_main">
					<Contato />
					<Forms />
				</main>
				<Aside />
			</div>
		</>
	);
}
