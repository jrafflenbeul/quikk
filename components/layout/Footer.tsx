import { Text, Grid, useTheme, Description } from "@geist-ui/react";
import React from "react";
import { APPLICATION_NAME, GRID_GAP, SMALL_GAP } from "../../constants";
import ThemeWrapper from "../theme/ThemeWrapper";
import LocationLinks from "./footer/LocationLinks";
import LegalLinks from "./footer/LegalLinks";
import ContactLinks from "./footer/ContactLinks";
import CompanyLinks from "./footer/CompanyLinks";
import SocialLinks from "./footer/SocialLinks";
import Container from "./Container";

const Footer = () => {
	const theme = useTheme();

	const contents = [
		{ title: "Rechtliches", content: <LegalLinks /> },
		{ title: "Kontakt", content: <ContactLinks /> },
		{ title: "Unternehmen", content: <CompanyLinks /> },
		{ title: "Social", content: <SocialLinks /> },
		{ title: "Vor Ort", content: <LocationLinks /> },
	];

	return (
		<footer>
			<ThemeWrapper variant="dark">
				<Container spacing>
					<Grid.Container gap={SMALL_GAP}>
						{contents.map(({ title, content }, i) => (
							<Grid key={i} xs={12} md={24 / contents.length}>
								<Description {...{ title, content }} />
							</Grid>
						))}
						<Grid xs={0} md={24}>
							<Text small type="secondary">
								Wir bei QUIKK Software & Webdesign UG (haftungsbeschränkt)
								entwickeln seit Oktober 2020 individuelle Software, attraktive
								Webdesigns und mobile Apps in Minden und liefern Ihnen
								maßgeschneiderte Lösungen für digitale Herausforderungen. Wir
								sind ein junges und agiles Tech-Startup mit Fokus auf Qualität
								und Transparenz.
							</Text>
						</Grid>
					</Grid.Container>
				</Container>
				<Grid.Container>
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
