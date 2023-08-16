import Aside from "./components/aside";
import Header from "./components/header";
import Contato from "@/app/assets/bg-image.png";
import "./styles.css";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Header />
			<div className="container">
				<main>
					<div className="container_background">
						<Image
							src={Contato}
							width={373}
							height={722}
							alt="mulher sorrindo"
							className="container_img"
						/>
						<span className="container_titulo titulo-blend">CONTATO</span>
						<h1 className="container_titulo">CONTATO</h1>
					</div>
				</main>
				<Aside />
			</div>
		</>
	);
}
