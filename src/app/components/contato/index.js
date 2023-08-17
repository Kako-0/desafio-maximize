import { port_slab } from "@/app/fonts";
import EmailIcon from "@/app/assets/icon-email";
import TelefoneIcon from "@/app/assets/icon-telefone";
import ContatoBg from "@/app/assets/bg-image.png";
import Image from "next/image";
import "./styles.css";

export default function Contato() {
	return (
		<section className="main_imagem-info">
			<div className="main_background">
				<Image
					src={ContatoBg}
					width={373}
					height={722}
					alt="background_image"
					className="main_img"
				/>
				<span className="main_titulo titulo-blend">CONTATO</span>
				<h1 className="main_titulo">CONTATO</h1>
			</div>
			<div className="main_info">
				<p className="info_titulo">CONTATO PROFISSIONAL</p>
				<div className="info_contatos">
					<p className="info_texto texto-bold">
						<TelefoneIcon /> 98 991234-5678
					</p>
					<p className={port_slab.className + " info_texto"}>
						<EmailIcon /> contato@artista.com.br
					</p>
				</div>
			</div>
		</section>
	);
}
