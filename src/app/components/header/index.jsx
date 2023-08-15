import FacebookIcon from "@/app/assets/icon-facebook";
import InstagramIcon from "@/app/assets/icon-instagram";
import SnapchatIcon from "@/app/assets/icon-snapchat";
import TiktokIcon from "@/app/assets/icon-tiktok";
import TwitterIcon from "@/app/assets/icon-twitter";
import YoutubeIcon from "@/app/assets/icon-youtube";

import "./styles.css";

export default function Header() {
	return (
		<header className="header">
			<a href="./" className="logo">
				ARTISTA
			</a>

			<nav className="nav">
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
