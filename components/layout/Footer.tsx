import { Text, Grid, useTheme, Description, Spacer } from "@geist-ui/react";
import React from "react";
import {
	APPLICATION_NAME,
	EMAIL,
	FOOTER_LINKS,
	FOOTER_LINK_SEPARATOR,
	MAGIC_NUMBER_42,
	PHONE,
} from "../../src/constants";
import InternalLink from "../misc/InternalLink";
import ThemeWrapper from "../theme/ThemeWrapper";
import { Phone, Mail } from "@geist-ui/react-icons";
import { sanitizePhone } from "../../src/utils";

const Footer = () => {
	const theme = useTheme();

	const LegalLinks = () => (
		<Description
			title={
				<Text span style={{ width: "100%", textAlign: "center" }}>
					Rechtliches
				</Text>
			}
			content={
				<Text p>
					{Object.entries(FOOTER_LINKS).map(([key, value], i) => (
						<span key={i}>
							{i !== 0 && (
								<Text span type="secondary">
									{FOOTER_LINK_SEPARATOR}
								</Text>
							)}
							<InternalLink href={value}>{key}</InternalLink>
						</span>
					))}
				</Text>
			}
		/>
	);

	const ContactLinks = () => (
		<Description
			title={
				<Text span style={{ width: "100%", textAlign: "center" }}>
					Kontakt
				</Text>
			}
			content={
				<>
					<Text
						p
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Mail size="1em" />
						<Spacer inline x={MAGIC_NUMBER_42 / 100} />
						<InternalLink href={`mailto:${EMAIL}`}>{EMAIL}</InternalLink>
					</Text>
					<Text
						p
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Phone size="1em" />
						<Spacer inline x={MAGIC_NUMBER_42 / 100} />
						<InternalLink href={`tel:${sanitizePhone(PHONE)}`}>
							{PHONE}
						</InternalLink>
					</Text>
				</>
			}
		/>
	);

	return (
		<footer>
			<ThemeWrapper variant="dark">
				<Grid.Container>
					<Spacer inline />
					<Grid xs={24} alignItems="center" justify="center">
						<ContactLinks />
					</Grid>
					<Spacer inline />
					<Grid xs={24} alignItems="center" justify="center">
						<LegalLinks />
					</Grid>
					<Spacer inline />
					<Grid
						xs={24}
						style={{ backgroundColor: theme.palette.accents_1 }}
						alignItems="center"
						justify="center"
					>
						<Text p type="secondary" small>
							© {new Date().getFullYear()} {APPLICATION_NAME}
						</Text>
					</Grid>
				</Grid.Container>
			</ThemeWrapper>
		</footer>
	);
};

export default Footer;
