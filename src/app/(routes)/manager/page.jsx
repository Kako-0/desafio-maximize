"use client";
import Mensagem from "@/app/components/mensagem";
import "./styles.scss";
import { getDados } from "@/app/apis/databaseApi";
import { useEffect, useState } from "react";

export default function ManagerPage() {
	const [mensagens, setMensagens] = useState([]);
	const [busca, setBusca] = useState([]);
	const [estaBuscando, setEstaBuscando] = useState(false);

	const buscar = (event) => {
		const busca = event.target.value;
		if (busca.length > 0) {
			setEstaBuscando(true);

			// Regexp com base no valor do input de buscas.
			// "gi" significa que busca todas as correspondências e
			// indiferente a maiúsculas e minúsculas.
			const regra = new RegExp(busca, "gi");

			const mensagensBuscadas = mensagens.filter((mensagem) => {
				// Verifica se o nome é compatível com o regexp criado
				return regra.test(mensagem.nome);
			});

			setBusca(mensagensBuscadas);
		} else {
			setEstaBuscando(false);
		}
	};

	useEffect(() => {
		const fetchMensagens = async () => {
			try {
				const mensagensObtidas = await getDados();
				setMensagens(mensagensObtidas);
			} catch (erro) {
				console.error("Ocorreu um erro ao buscar mensagens:", erro);
			}
		};

		fetchMensagens();
	}, []);

	return (
		<div className="page">
			<div className="input">
				<label htmlFor="table-search" className="sr-only">
					Search
				</label>
				<div className="input__container">
					<svg
						height="24"
						width="24"
						aria-hidden
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
					<input
						type="text"
						id="table-search"
						className="input__container-text"
						placeholder="Pesquisar Nome"
						onChange={(event) => buscar(event)}
					/>
				</div>
			</div>
			<table className="sendbox">
				<thead className="sendbox__titulo">
					<tr>
						<th scope="col">Caixa de mensagens</th>
					</tr>
				</thead>
				<tbody className="sendbox__container-mensagens">
					{estaBuscando
						? busca.map((mensagem) => (
								<Mensagem
									key={`${mensagem.nome}-${mensagem.mensagem.slice(0, 5)}`}
									{...mensagem}
								/>
						  ))
						: mensagens.map((mensagem) => (
								<Mensagem
									key={`${mensagem.nome}-${mensagem.mensagem.slice(0, 5)}`}
									{...mensagem}
								/>
						  ))}
				</tbody>
			</table>
			<div></div>
		</div>
	);
}
