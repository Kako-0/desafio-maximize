import { Poppins, Port_Lligat_Slab } from "next/font/google";

//Todas as fontes usadas no projeto importadas de forma otimizada pelo próprio Next
export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
	style: ["normal", "italic"],
});

export const port_slab = Port_Lligat_Slab({
	subsets: ["latin"],
	weight: "400",
});
