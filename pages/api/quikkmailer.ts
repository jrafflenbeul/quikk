import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");
require("dotenv").config();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const {
		method,
		body: { name, email, message },
	} = req;

	switch (method) {
		case "POST":
			try {
				const mailInfo = await sendMail({ name, email, message });
				res.statusCode = 200;
				res.json({ mailInfo });
			} catch (error) {
				res.statusCode = 500;
				res.send(`${error}`);
			}
			break;
		default:
			res.setHeader("Allow", ["POST"]);
			res.status(405).send(`Method ${method} Not Allowed`);
			break;
	}
};

const createTransport = async () =>
	nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: 587,
		secure: false,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS,
		},
	});

const sendMail = async ({ name, email, message }) => {
	const transporter = await createTransport();
	const companyName = "QUIKK Software";
	let info = await transporter.sendMail({
		from: `"${companyName}" <${process.env.MAIL_USER}>`,
		to: email,
		envelope: {
			from: `"${companyName}" <${process.env.MAIL_USER}>`,
			to: `${email}, ${process.env.MAIL_CC}`,
		},
		subject: "Ihre Nachricht an QUIKK Software",
		text: `Hallo ${name}!\n\nWir haben Ihre Kontaktanfrage erhalten und werden sie schnellstmöglich bearbeiten.\n\nIhre Nachricht lautet:\n${message}\n\nFreundliche Grüße,\nQUIKK Software GmbH\n\nH: www.quikk.de\nE: info@quikk.de\n\nGeschäftsführer: Joyce Marvin Rafflenbeul\nSitz: Hahler Straße 285, 32427 Minden\nHandelsregisternummer: HRB 17559\nRegistergericht: Amtsgericht Bad Oeynhausen`,
	});
	return info;
};
