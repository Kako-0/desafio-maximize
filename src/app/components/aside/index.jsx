import "./styles.scss";

export default function Aside() {
	return (
		<aside className="aside-menu">
			<ul className="menu">
				<li className="menu__item">Sobre</li>
				<li className="menu__item">Novidades</li>
				<li className="menu__item">Agenda</li>
				<li className="menu__item">Galeria</li>
				<li className="menu__item">Contato</li>
				<li className="menu__divider"></li>
				<li className="menu__item">Imprensa</li>
				<li className="menu__item">Fã-Clubes</li>
			</ul>
		</aside>
	);
}
