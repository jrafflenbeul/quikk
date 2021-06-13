import { Grid, useTheme } from "@geist-ui/react";
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
	const theme = useTheme();
	return (
		<ThemeWrapper variant={variant}>
			<div
				style={{
					background: theme.palette.accents_8,
					border: `1px solid ${theme.palette.accents_7}`,
					borderWidth: "1px 0",
				}}
			>
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
								title: "Verstehen",
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
								title: "Entwickeln",
								content: [
									"Agile Entwicklung nach Scrum",
									"Aktive Einbindung des Kunden",
									"Regelmäßige Feedbackzyklen",
									"Inkrementelle Featureentwicklung",
									"Fixpreisgarantie: Kein Kleingedrucktes",
								],
							},
							{
								icon: <Gift />,
								title: "Überzeugen",
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
			</div>
		</ThemeWrapper>
	);
};

export default Work;
