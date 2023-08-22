import Aside from "../components/aside";
import Contato from "../components/contato";
import Footer from "../components/footer";
import Forms from "../components/forms";
import Header from "../components/header";
import "./styles.scss";

export default function Home() {
	return (
		<>
			<Header />
			<div className="container_page">
				<main className="container__page-content">
					<Contato />
					<Forms />
				</main>
				<Aside />
			</div>
			<Footer />
		</>
	);
}
