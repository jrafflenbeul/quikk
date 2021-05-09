import {
	Button,
	Checkbox,
	Grid,
	Input,
	Text,
	Textarea,
	useToasts,
} from "@geist-ui/react";
import { Mail, Phone, Clock, MapPin } from "@geist-ui/react-icons";
import React, { useState } from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import {
	ExternalLinkWithIcon,
	TextWithIcon,
} from "../components/misc/WithIconHelper";
import { breakpoints, DATENSCHUTZ_LINK, EMAIL, PHONE } from "../constants";
import axios from "axios";
import InternalLink from "../components/misc/InternalLink";
import { GRID_GAP, SMALL_GAP } from "../constants";
import ThemeWrapper from "../components/theme/ThemeWrapper";
import { getMailToHref, getTelHref } from "../utils/contact";
import TitleAndSubtitle from "../components/misc/TitleAndSubtitle";

const kontakt = () => {
	const [toasts, setToast] = useToasts();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [accepted, setAccepted] = useState(false);

	const resetInput = () => {
		setName("");
		setEmail("");
		setMessage("");
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const {
				data: { mailInfo },
			} = await axios.post("/api/quikkmailer", {
				name,
				email,
				message,
			});
			const rejected = mailInfo.rejected.length > 0;

			const text = rejected
				? "Ihre Nachricht konnte nicht gesendet werden."
				: "Ihre Nachricht wurde erfolgreich gesendet.";
			const type = rejected ? "error" : "default";

			setToast({ text, type });
		} catch (error) {
			setToast({ text: "Es ist ein Fehler aufgetreten.", type: "error" });
		}
		resetInput();
		setLoading(false);
	};

	const ContactText = ({ children }) => (
		<Grid xs={24}>
			<Text style={{ margin: 0, lineHeight: 1 }}>{children}</Text>
		</Grid>
	);

	const ContactInformation = () => (
		<Grid {...breakpoints}>
			<Grid.Container gap={SMALL_GAP}>
				<ContactText>
					<ExternalLinkWithIcon href={getMailToHref(EMAIL)} icon={<Mail />}>
						{EMAIL}
					</ExternalLinkWithIcon>
				</ContactText>
				<ContactText>
					<ExternalLinkWithIcon href={getTelHref(PHONE)} icon={<Phone />}>
						{PHONE}
					</ExternalLinkWithIcon>
				</ContactText>
				<ContactText>
					<TextWithIcon icon={<Clock />}>
						Mo. - Fr. von 10:00 - 18:00
					</TextWithIcon>
				</ContactText>
				<ContactText>
					<ExternalLinkWithIcon
						href="https://g.page/quikk?share"
						icon={<MapPin />}
					>
						Hahler Straße 285, 32427 Minden
					</ExternalLinkWithIcon>
				</ContactText>
			</Grid.Container>
		</Grid>
	);

	const title = "Kontakt";
	const desc = "Wie und wann Sie uns am besten erreichen können.";

	return (
		<ThemeWrapper>
			<TitleAndDesc {...{ title, desc }} />
			<Container spacing>
				<Grid.Container gap={GRID_GAP} justify="center">
					<TitleAndSubtitle
						title={title}
						desc={desc}
						gridProps={{ ...breakpoints }}
					/>
					<ContactInformation />
					<Grid {...breakpoints}>
						<form style={{ width: "100%" }} onSubmit={onSubmitHandler}>
							<Grid.Container gap={SMALL_GAP}>
								<Grid xs={24}>
									<Input
										placeholder="Ihr Name"
										width="100%"
										type="text"
										required
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</Grid>
								<Grid xs={24}>
									<Input
										placeholder="Ihre E-Mail Adresse"
										width="100%"
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Grid>
								<Grid xs={24}>
									<Textarea
										placeholder="Ihre Nachricht an uns"
										width="100%"
										required
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									/>
								</Grid>
								<Grid xs={24}>
									<Checkbox
										value={String(accepted)}
										initialChecked={accepted}
										onChange={() => setAccepted(!accepted)}
									>
										Ich akzeptiere die{" "}
										<InternalLink color href={DATENSCHUTZ_LINK}>
											Datenschutzerklärung
										</InternalLink>
										.
									</Checkbox>
								</Grid>
								<Grid xs={24}>
									<Button
										disabled={!accepted}
										type="success-light"
										style={{ width: "100%" }}
										htmlType="submit"
										loading={loading}
									>
										Absenden
									</Button>
								</Grid>
							</Grid.Container>
						</form>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default kontakt;
