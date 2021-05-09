import { Grid } from "@geist-ui/react";
import React from "react";
import { GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import { BookOpen, RefreshCcw, Gift } from "@geist-ui/react-icons";
import ThemeWrapper from "../theme/ThemeWrapper";
import EnumerationList from "./EnumerationList";
import TitleAndSubtitle from "./TitleAndSubtitle";

const Work = ({
	variant = "light",
	heading = false,
}: {
	variant?: "light" | "dark";
	heading?: boolean;
}) => {
	return (
		<ThemeWrapper variant={variant}>
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					{heading && (
						<TitleAndSubtitle
							title="Gemeinsam zum Ziel"
							desc="Unsere Arbeit basiert auf Qualität, Transparenz und Vertrauen, damit wir einen erfolgreichen Projektabschluss feiern können."
							titleProps={{ h1: false, h2: true }}
						/>
					)}
					{[
						{
							icon: <BookOpen />,
							title: "Verstehen + Prüfen",
							content: [
								"Erstes Kennenlernen",
								"Konkretisierung des Projektrahmens",
								"Gemeinsame Anforderungsanalyse",
								"Konzeption und Prototyping",
								"Definition von User Stories",
							],
						},
						{
							icon: <RefreshCcw />,
							title: "Umsetzen + Entwickeln",
							content: [
								"Agile Entwicklung nach Scrum",
								"Aktive Einbindung des Kunden",
								"Inkrementelle Featureentwicklung",
								"Transparenz und Flexibilität",
								"Fixpreisgarantie: Kein Kleingedrucktes",
							],
						},
						{
							icon: <Gift />,
							title: "Abschließen + Überzeugen",
							content: [
								"Qualität durch automatisierte Tests",
								"Langlebige und wartbare Lösungen",
								"Einweisung und Dokumentation",
								"Support über die Projektlaufzeit hinaus",
								"Erweiterung und Anpassung möglich",
							],
						},
					].map((_, i) => {
						return <EnumerationList _={_} key={i} />;
					})}
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Work;
