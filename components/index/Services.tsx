import { Grid, useTheme } from "@geist-ui/react";
import React, { ReactElement } from "react";
import { GRID_GAP } from "../../src/constants";
import ThemeWrapper from "../theme/ThemeWrapper";
import {
	Package,
	Watch,
	MessageCircle,
	Lock,
	Calendar,
	Rewind,
} from "@geist-ui/react-icons";
import Service from "./Service";
import Container from "../layout/Container";

const Services = () => {
	const theme = useTheme();

	const SERVICES: Array<{
		title: string;
		icon: ReactElement;
		content?: string;
	}> = [
		{
			title: "Professionelle Beratung",
			icon: <MessageCircle />,
			content:
				"Als unabhängiger Händler unterstützen wir Sie gerne bei der Suche nach einer passenden Uhr. Sprechen Sie uns bei Fragen einfach an. Wir freuen uns, Ihnen weiterhelfen zu können.",
		},
		{
			title: "Echtheitsgarantie",
			icon: <Watch />,
			content:
				"Direkt nach dem Eintreffen der Uhren werden sie durch unsere Experten in einer Reihe von Tests auf Echtheit geprüft. So sind Sie beim Kauf einer Uhr immer auf der sicheren Seite.",
		},
		{
			title: "Sichere Zahlung",
			icon: <Lock />,
			content:
				"Damit Sie den Kauf Ihrer Uhr sorgenfrei abschließen können, bieten wir Ihnen eine Reihe von Zahlungsmethoden an, zum Beispiel bequem per PayPal oder Banküberweisung.",
		},
		{
			title: "Versicherte Lieferung",
			icon: <Package />,
			content:
				"Um sicherzustellen, dass Ihre Uhr wohlbehalten den Weg zu Ihnen nach Hause findet, arbeiten wir mit zuverlässigen Versanddienstleistern und Wertkurieren zusammen.",
		},
		{
			title: "14 Tage Rückgaberecht",
			icon: <Rewind />,
			content:
				"Bei Nichtgefallen können Sie Ihre Uhr selbstverständlich innerhalb von 14 Tagen problemlos an uns zurückschicken und erhalten Ihr Geld zurück.",
		},
		{
			title: "1 Jahr Gewährleistung",
			icon: <Calendar />,
			content:
				"Wir möchten, dass Sie so lange wie möglich Freude an Ihrer Uhr haben. Für die ersten zwölf Monate nach Kauf erhalten Sie von uns selbstverständlich eine Gewährleistung.",
		},
	];

	return (
		<ThemeWrapper
			variant="light"
			style={{
				background: theme.palette.accents_8,
				border: `1px solid ${theme.palette.accents_7}`,
			}}
		>
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					{SERVICES.map(({ title, icon, content }, i) => (
						<Service {...{ title, icon, content }} key={i} />
					))}
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Services;
