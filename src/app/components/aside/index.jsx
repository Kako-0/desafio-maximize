import "./styles.css";

export default function Aside() {
	return (
		<aside>
			<ul className="menu">
				<li className="menu-item">Sobre</li>
				<li className="menu-item">Novidades</li>
				<li className="menu-item">Agenda</li>
				<li className="menu-item">Galeria</li>
				<li className="menu-item">Contato</li>
				<span className="barra" />
				<li className="menu-item">Imprensa</li>
				<li className="menu-item">Fã-Clubes</li>
			</ul>
		</aside>
	);
}
