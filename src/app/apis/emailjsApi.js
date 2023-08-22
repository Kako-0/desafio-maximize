import emailjs from "@emailjs/browser";

const sendEmail = (nome, mensagem, email) => {
	const templateParams = {
		nome,
		mensagem,
		email,
	};

	emailjs.send(
		"service_wwdkptz",
		"template_5igshbz",
		templateParams,
		"6fCaAm5X5Z6-gxZG6"
	);
};

export { sendEmail };
