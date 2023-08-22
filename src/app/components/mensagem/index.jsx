import "./styles.scss";

export default function Mensagem({
	nome,
	relacao,
	nomeEmpresa,
	email,
	telefone,
	mensagem,
}) {
	return (
		<tr className="mensagem">
			<td scope="row" className="mensagem__conteudo">
				<details className="mensagem__detalhes">
					<summary className="mensagem__header">
						<div>
							<p className="mensagem__titulo">{nome}</p>
							<span className="mensagem__collapse">Detalhes</span>
						</div>
						<p className="mensagem__preview">{mensagem}</p>
					</summary>
					<div className="mensagem-details-content">
						<p>
							<b>Relacionado à:</b> {relacao}
						</p>
						<p>
							<b>Empresa:</b> {nomeEmpresa}
						</p>
						<p>
							<b>Email:</b> {email}
						</p>
						<p>
							<b>Telefone:</b> {telefone}
						</p>
						<p>
							<b>Mensagem:</b>
							<br />
							{mensagem}
						</p>
					</div>
				</details>
			</td>
		</tr>
	);
}
