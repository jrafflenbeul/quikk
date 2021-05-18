import { Grid, useTheme } from "@geist-ui/react";
import React from "react";
import Container from "../layout/Container";
import ServiceCard from "./ServiceCard";
import {
	Layout,
	Users,
	Server,
	Smartphone,
	Code,
	ShoppingBag,
	Grid as GridIcon,
	FastForward,
	Compass,
} from "@geist-ui/react-icons";
import {
	GRID_GAP,
	ID_SCRUM,
	ID_DATABASES_AND_APIS,
	ID_MOBILE_APPS,
	ID_SOFTWARE_DEVELOPMENT,
	ID_ECOMMERCE_AND_WEBDESIGN,
} from "../../constants";
import ThemeWrapper from "../theme/ThemeWrapper";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";

const Services = () => {
	const theme = useTheme();

	const services = [
		{
			title: "Individuelle Software",
			content:
				"Maßgeschneiderte Softwarelösungen als Desktop- und Webanwendung.",
			icon: <Code />,
			id: ID_SOFTWARE_DEVELOPMENT,
		},
		{
			title: <>Anwendungs&shy;entwicklung</>,
			content: "Ganzheitliche Anwendungen mit Nutzeroberfläche und Datenlogik.",
			icon: <Server />,
			id: ID_SOFTWARE_DEVELOPMENT,
		},
		{
			title: "Mobile Apps (alle Plattformen)",
			content: "Software für die Hosentasche. Anwendungen für Android und iOS.",
			icon: <Smartphone />,
			id: ID_MOBILE_APPS,
		},
		{
			title: "Konzeption und Prototyping",
			content:
				"Wir überprüfen und bestätigen die Durchführbarkeit Ihres Vorhabens.",
			icon: <Compass />,
			id: ID_SOFTWARE_DEVELOPMENT,
		},
		{
			title: <>E-Commerce und Handel</>,
			content:
				"Eigene Bestell- und Buchungssysteme sowie eBay/mobile.de Anbindung.",
			icon: <ShoppingBag />,
			id: ID_ECOMMERCE_AND_WEBDESIGN,
		},
		{
			title: "Zusammenarbeit und Beratung",
			content:
				"Wir helfen Ihnen dabei, technische Herausforderungen zu meistern.",
			icon: <Users />,
			id: ID_SOFTWARE_DEVELOPMENT,
		},
		{
			title: "Integration und APIs",
			content: "Schnittstellen für eine einfache Kommunikation Ihrer Systeme.",
			icon: <GridIcon />,
			id: ID_DATABASES_AND_APIS,
		},
		{
			title: "Webentwicklung und Webdesign",
			content: "Ein Webauftritt, der genauso einzigartig ist, wie Sie selbst.",
			icon: <Layout />,
			id: ID_ECOMMERCE_AND_WEBDESIGN,
		},
		{
			title: <>Agiles Projekt&shy;management</>,
			content:
				"Erste Ergebnisse liegen bereits nach einem 2-wöchigen Sprint vor.",
			icon: <FastForward />,
			id: ID_SCRUM,
		},
	];

	return (
		<ThemeWrapper variant="light">
			<div
				style={{
					background: theme.palette.accents_8,
					border: `1px solid ${theme.palette.accents_7}`,
					borderWidth: "1px 0",
				}}
			>
				<Container spacing>
					<Grid.Container gap={GRID_GAP} alignItems="stretch">
						<TitleAndSubtitle
							title="Unser Fokus"
							desc="Wir haben uns auf die Individualentwicklung spezialisiert und helfen außerdem bei Konzeption und Planung Ihrer Projekte."
							titleProps={{ h1: false, h2: true }}
						/>
						{services.map((service, i) => (
							<ServiceCard key={i} {...service} />
						))}
					</Grid.Container>
				</Container>
			</div>
		</ThemeWrapper>
	);
};

export default Services;
