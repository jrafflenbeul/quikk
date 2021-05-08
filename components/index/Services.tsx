import { Grid, useTheme } from "@geist-ui/react";
import React from "react";
import Container from "../layout/Container";
import ServiceCard from "./ServiceCard";
import {
	Layout,
	Search,
	Server,
	Smartphone,
	Code,
	ShoppingBag,
	Grid as GridIcon,
	FastForward,
	Compass,
} from "@geist-ui/react-icons";
import Title from "../misc/Title";
import { GRID_GAP } from "../../constants";
import ThemeWrapper from "../theme/ThemeWrapper";

const Services = () => {
	const theme = useTheme();

	const services = [
		{
			title: "Software",
			content:
				"Maßgeschneiderte Softwarelösungen als Desktop- und Webanwendung.",
			icon: <Code />,
		},
		{
			title: "Fullstack",
			content:
				"Ganzheitliche Anwendungen mit Nutzeroberfläche, Server und Datenbank.",
			icon: <Server />,
		},
		{
			title: "Mobile Apps",
			content: "Software für die Hosentasche. Mobile Apps für Android und iOS.",
			icon: <Smartphone />,
		},
		{
			title: "APIs",
			content: "Schnittstellen für eine einfache Kommunikation Ihrer Systeme.",
			icon: <GridIcon />,
		},
		{
			title: "E-Commerce",
			content:
				"Eigene Bestell- und Buchungssysteme sowie eBay/mobile.de Anbindung.",
			icon: <ShoppingBag />,
		},
		{
			title: "Prototyping",
			content:
				"Wir überprüfen und bestätigen die Durchführbarkeit Ihres Vorhabens.",
			icon: <Compass />,
		},
		{
			title: "Webdesign",
			content: "Ein Webauftritt, der genauso einzigartig ist, wie Sie selbst.",
			icon: <Layout />,
		},
		{
			title: "SEO",
			content:
				"Lassen Sie sich in den Weiten des World Wide Webs besser finden.",
			icon: <Search />,
		},
		{
			title: "Agilität",
			content:
				"Erste Ergebnisse liegen bereits nach einem 2-wöchigen Sprint vor.",
			icon: <FastForward />,
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
						<Grid xs={24}>
							<Title h2 caps centered>
								Unser Fokus
							</Title>
						</Grid>
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
