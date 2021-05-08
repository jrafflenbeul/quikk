import { Grid, Text } from "@geist-ui/react";
import React from "react";
import { GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import { BookOpen, RefreshCcw, Gift } from "@geist-ui/react-icons";
import ThemeWrapper from "../theme/ThemeWrapper";

const WorkProcess = () => {
	return (
		<ThemeWrapper variant="light">
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
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
								"Inkrementelle Features",
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
						return (
							<Grid
								key={i}
								xs={24}
								sm={24}
								md={12}
								lg={8}
								xl={8}
								direction="column"
								justify="flex-start"
								alignItems="flex-start"
							>
								<Text b>
									{React.cloneElement(_.icon, { size: "1rem" })} {_.title}
								</Text>
								<ul>
									{_.content.map((__, i) => (
										<li key={i}>
											<Text style={{ margin: 0 }} type="secondary">
												{__}
											</Text>
										</li>
									))}
								</ul>
							</Grid>
						);
					})}
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default WorkProcess;
