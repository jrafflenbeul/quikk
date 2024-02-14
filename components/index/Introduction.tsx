import { Grid } from "@geist-ui/react";
import React from "react";
import { KONTAKT_LINK, LARGE_GAP } from "../../constants";
import Container from "../layout/Container";
import joyce from "../../assets/images/joyce_landing.jpg";
import minden from "../../assets/images/minden.jpg";
import code from "../../assets/images/code.jpg";
import IntroductionSection from "./IntroductionSection";
import ThemeWrapper from "../theme/ThemeWrapper";

const Introduction = () => {
	return (
		<ThemeWrapper variant="light">
			<Container spacing>
				<Grid.Container gap={LARGE_GAP} alignItems="center">
					<IntroductionSection
						src={joyce}
						title="Ihr Partner"
						content="QUIKK Software aus Minden konzipiert und entwickelt individuelle Softwarelösungen, Webanwendungen & mobile Apps nach Ihren Vorstellungen. Unseren Fokus setzen wir dabei auf agile Softwareentwicklung, eine transparente Kommunikation und eine strukturierte Arbeitsweise, um Ihnen sauberes und wartbares Coding zu liefern. Ohne Wenn und Aber."
						alt="QUIKK Software Minden Geschäftsführer Joyce Marvin Rafflenbeul"
					/>
					<IntroductionSection
						src={minden}
						title="In Minden"
						content="Unser Büro liegt im wunderschönen Minden an der Weser in Ostwestfalen. In der Vergangenheit haben wir bereits viele Kunden aus der Region Hannover, Bielefeld und Osnabrück unterstützt. Digitale Absprachen und Remote Work erlauben uns darüber hinaus, erfolgreich mit Ihnen zusammenzuarbeiten, auch wenn wir uns nicht vor Ort sehen können."
						revert={true}
						alt="Minden (Ostwestfalen), NRW: QUIKK Software Standort Hahler Straße 285, 32427 Minden"
						cta="Einen Termin vereinbaren"
						ctaHref={KONTAKT_LINK}
					/>
					<IntroductionSection
						src={code}
						title="Mit Erfahrung"
						content="Mit unserer mehrjährigen Berufserfahrung bei namhaften Banken, Vermögensverwaltern und Softwaredienstleistern können wir auf eine Vielzahl erfolgreich abgeschlossener Projekte zurückblicken, aus welchen wir stetig neues Wissen schöpfen und durch unser interdisziplinäres Team in Ihre Projekte einfließen lassen."
						alt="QUIKK Software Minden: Code, Softwareentwicklung, mobile Apps und Webanwendungen"
					/>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Introduction;
