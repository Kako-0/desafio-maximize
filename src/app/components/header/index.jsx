import FacebookIcon from "@/app/assets/icon-facebook";
import InstagramIcon from "@/app/assets/icon-instagram";
import SnapchatIcon from "@/app/assets/icon-snapchat";
import TiktokIcon from "@/app/assets/icon-tiktok";
import TwitterIcon from "@/app/assets/icon-twitter";
import YoutubeIcon from "@/app/assets/icon-youtube";

import "./styles.scss";
import MenuIcon from "@/app/assets/icon-menu";

export default function Header() {
	return (
		<header className="header">
			<a href="./" className="header__logo">
				ARTISTA
			</a>

			<button type="button" className="header__menu">
				<span className="sr-only">Open main menu</span>
				<MenuIcon />
			</button>
			<nav className="header__nav">
				<InstagramIcon />
				<YoutubeIcon />
				<TwitterIcon />
				<FacebookIcon />
				<SnapchatIcon />
				<TiktokIcon />
			</nav>
		</header>
	);
}
