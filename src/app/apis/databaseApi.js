import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import { database } from "../services/firebase";

const mensagensRef = collection(database, "Mensagens");

const setDados = async (dados) => {
	await addDoc(mensagensRef, dados);
};

const getDados = async () => {
	const dados = await getDocs(mensagensRef);
	const mensagens = dados.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

	return mensagens;
};

export { setDados, getDados };
