"use client";
import EnviarIcon from "@/app/assets/icon-enviar";
import "./styles.scss";

export default function Forms() {
	return (
		<section className="container-forms">
			<form action="#" className="forms">
				{/* Input de interesse*/}
				<div className="forms__input forms__input--select">
					<select name="relacoes" id="relacao" className="forms__select">
						<option value="imprensa">Imprensa</option>
						<option value="fa_clubes">Fã-Clubes</option>
					</select>
					<label htmlFor="relacao" className="forms__label">
						Seu contato é relacionado a:
					</label>
				</div>

				{/* Inputs das informações do contato */}
				<div className="forms__input-group">
					<div className="forms__input">
						<input
							id="nome"
							name="nome"
							type="text"
							className="forms__input-field"
							required
						/>
						<label htmlFor="nome" className="forms__label">
							Nome
						</label>
					</div>
					<div className="forms__input">
						<input
							id="empresa"
							name="empresa"
							type="text"
							className="forms__input-field"
							required
						/>
						<label htmlFor="empresa" className="forms__label">
							Empresa
						</label>
					</div>
					<div className="forms__input">
						<input
							id="email"
							name="email"
							type="email"
							className="forms__input-field"
							required
						/>
						<label htmlFor="email" className="forms__label">
							E-mail
						</label>
					</div>
					<div className="forms__input">
						<input
							id="telefone"
							name="telefone"
							type="tel"
							pattern="[0-9]{2}9[0-9]{8}"
							className="forms__input-field"
							required
						/>
						<label htmlFor="telefone" className="forms__label">
							Telefone
						</label>
					</div>
				</div>

				{/* Input da mensagem */}
				<div className="forms__input forms__input--textarea">
					<textarea
						rows="4"
						minLength={2}
						required
						placeholder="Digite aqui..."
						id="mensagem"
						name="mensagem"
						className="forms__textarea"
					></textarea>
					<label htmlFor="mensagem" className="forms__label">
						Mensagem
					</label>
				</div>

				{/* Inputs de verificação e submit */}
				<div className="forms__input forms__input--checkbox">
					<label htmlFor="naoRobo">
						<input
							type="checkbox"
							id="naoRobo"
							name="nao-sou-robo"
							className="forms__checkbox"
							required
						/>
						Não sou um robô
					</label>
					<button type="submit" className="forms__submit">
						Enviar <EnviarIcon />
					</button>
				</div>
			</form>
		</section>
	);
}
