import { poppins } from "./fonts";
import "./globals.scss";

export const metadata = {
	title: "Projeto Maximize",
	description: "Contate-nos para mais informações",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt_BR">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
