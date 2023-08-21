import Mensagem from "../components/mensagem";
import "./styles.scss";

export default function ManagerPage() {
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
						placeholder="Pesquisar E-mail"
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
					<Mensagem />
				</tbody>
			</table>
		</div>
	);
}
