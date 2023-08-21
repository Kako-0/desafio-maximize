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
					<tr className="mensagem">
						<td scope="row" className="mensagem__conteudo">
							<details className="mensagem__detalhes">
								<summary className="mensagem__header">
									<div>
										<p className="mensagem__titulo">Fulano</p>
										<span>Detalhes</span>
									</div>
									<p className="mensagem__preview">
										Olá, mensagem teste Olá, mensagem teste Olá, mensagem teste
										Olá, mensagem teste Olá, mensagem teste Olá, mensagem teste
									</p>
								</summary>
								<div className="mensagem-details-content">
									<p>
										<b>Empresa:</b> Exemplo Ltda.
									</p>
									<p>
										<b>Email:</b> fulano@example.com
									</p>
									<p>
										<b>Telefone:</b> (123) 456-7890
									</p>
									<p>
										<b>Mensagem:</b>
										<br />
										Olá, mensagem teste Olá, mensagem teste Olá, mensagem teste
										Olá, mensagem teste Olá, mensagem teste Olá, mensagem teste
									</p>
								</div>
							</details>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
