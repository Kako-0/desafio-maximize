import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../services/firebase";

// Acessa a coleção no banco de dados
const mensagensRef = collection(database, "Mensagens");

// Adiciona os dados no banco
const setDados = async (dados) => {
	await addDoc(mensagensRef, dados);
};

// Recupera os dados no banco
const getDados = async () => {
	const dados = await getDocs(mensagensRef);

	// Mapeia os documentos retornados pela consulta
	const mensagens = dados.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

	return mensagens;
};

export { setDados, getDados };
