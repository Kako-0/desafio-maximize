import InstagramIcon from "@/app/assets/icon-instagram";
import "./styles.scss";
import YoutubeIcon from "@/app/assets/icon-youtube";
import TwitterIcon from "@/app/assets/icon-twitter";
import FacebookIcon from "@/app/assets/icon-facebook";
import SnapchatIcon from "@/app/assets/icon-snapchat";
import TiktokIcon from "@/app/assets/icon-tiktok";

export default function Footer() {
	return (
		<footer className="footer">
			<p className="footer__copyright">
				2023 &copy; ARTISTA. Todos os direitos reservados.
			</p>
			<nav className="footer__social">
				<InstagramIcon />
				<YoutubeIcon />
				<TwitterIcon />
				<FacebookIcon />
				<SnapchatIcon />
				<TiktokIcon />
			</nav>
		</footer>
	);
}
