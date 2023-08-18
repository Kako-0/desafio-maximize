import { poppins } from "../fonts";
import "../globals.scss";

export const metadata = {
	title: "CMS / Projeto Maximize",
	description: "Área de gerenciamento",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt_BR">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
