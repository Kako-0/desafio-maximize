"use client";
import EnviarIcon from "@/app/assets/icon-enviar";
import "./styles.css";

export default function Forms() {
	return (
		<section className="container_forms">
			<form action="#" className="forms">
				{/* Input de interesse*/}
				<div className="input input-select">
					<select name="relacoes" id="relacao">
						<option value="imprensa">Imprensa</option>
						<option value="fa_clubes">Fã-Clubes</option>
					</select>
					<label for="relacao" className="input_label">
						Seu contato é relacionado a:
					</label>
				</div>

				{/* Inputs das informações do contato */}
				<div>
					<div className="input">
						<input
							id="nome"
							name="nome"
							type="text"
							className="input_field"
							required
						/>
						<label htmlFor="nome" className="input_label">
							Nome
						</label>
					</div>
					<div className="input">
						<input
							id="empresa"
							name="empresa"
							type="text"
							className="input_field"
							required
						/>
						<label htmlFor="empresa" className="input_label">
							Empresa
						</label>
					</div>
					<div className="input">
						<input
							id="email"
							name="email"
							type="email"
							className="input_field"
							required
						/>
						<label htmlFor="email" className="input_label">
							E-mail
						</label>
					</div>
					<div className="input">
						<input
							id="telefone"
							name="telefone"
							type="tel"
							pattern="[0-9]{2}9[0-9]{8}"
							className="input_field"
							required
						/>
						<label htmlFor="telefone" className="input_label">
							Telefone
						</label>
					</div>
				</div>

				{/* Input da mensagem */}
				<div className="input input-textarea">
					<textarea
						rows="4"
						cols="80"
						minLength={2}
						required
						placeholder="Digite aqui..."
						id="mensagem"
						name="mensagem"
					></textarea>
					<label htmlFor="mensagem" className="input_label">
						Mensagem
					</label>
				</div>

				{/* Inputs de verificação e submit */}
				<div className="input input--checkbox">
					<label for="naoRobo" className="input__label">
						<input
							type="checkbox"
							id="naoRobo"
							name="nao-sou-robo"
							className="input__checkbox"
							required
						/>
						Não sou um robô
					</label>
					<button type="submit" className="input__submit">
						Enviar <EnviarIcon />
					</button>
				</div>
			</form>
		</section>
	);
}
