import { port_slab } from "@/app/fonts";
import EmailIcon from "@/app/assets/icon-email";
import TelefoneIcon from "@/app/assets/icon-telefone";
import ContatoBg from "@/app/assets/bg-image.png";
import Image from "next/image";
import "./styles.scss";

export default function Contato() {
	return (
		<section className="main">
			{/* Titulo e imagem de background */}
			<div className="main__background">
				<div className="main__background-img">
					<Image
						src={ContatoBg}
						width={373}
						height={722}
						alt="background_image"
					/>
				</div>

				<span className="main__background-titulo titulo-blend">CONTATO</span>
				<h1 className="main__background-titulo">CONTATO</h1>
			</div>
			{/* Informações de contato profissional */}
			<div className="main_info">
				<p className="main__info-titulo">CONTATO PROFISSIONAL</p>
				<div className="main__info-contatos">
					<p className="main__info-texto texto-bold">
						<TelefoneIcon /> 98 991234-5678
					</p>
					<p className={port_slab.className + " main__info-texto"}>
						<EmailIcon /> contato@artista.com.br
					</p>
				</div>
			</div>
		</section>
	);
}
