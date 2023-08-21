import "./styles.scss";

export default function Mensagem() {
	return (
		<tr className="mensagem">
			<td scope="row" className="mensagem__conteudo">
				<details className="mensagem__detalhes">
					<summary className="mensagem__header">
						<div>
							<p className="mensagem__titulo">Fulano</p>
							<span className="mensagem__collapse">Detalhes</span>
						</div>
						<p className="mensagem__preview">
							Olá, mensagem teste Olá, mensagem teste Olá, mensagem teste Olá,
							mensagem teste Olá, mensagem teste Olá, mensagem teste
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
							Olá, mensagem teste Olá, mensagem teste Olá, mensagem teste Olá,
							mensagem teste Olá, mensagem teste Olá, mensagem teste
						</p>
					</div>
				</details>
			</td>
		</tr>
	);
}
