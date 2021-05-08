import { Collapse, Grid, Image, Note, Text } from "@geist-ui/react";
import React from "react";
import { breakpoints, GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import Title from "../misc/Title";
import sprint from "../../assets/images/sprint.svg";
import mockup from "../../assets/images/mockup.svg";
import dev from "../../assets/images/dev.svg";
import meeting from "../../assets/images/meeting.svg";
import ThemeWrapper from "../theme/ThemeWrapper";

const Work = () => {
	const work = [
		{
			title: "Verstehen",
			content:
				"Gemeinsam mit Ihnen erarbeiten wir konkrete Pläne zur Umsetzung Ihrer Idee. Dabei nutzen wir moderne Methoden und Vorgehensweisen wie Design Thinking und Design Sprints.",
			src: sprint,
		},
		{
			title: "Überprüfen",
			content:
				"Wir überprüfen die technische Umsetzbarkeit Ihrer Idee in Form von Mockups und Proof of Concepts. Ein Prototyp bietet Ihnen die Möglichkeit, frühzeitig Feedback zu geben.",
			src: mockup,
		},
		{
			title: "Umsetzen",
			content:
				"Zielgerichtet und qualitätsorientiert entwickeln wir Ihr Projekt in 2-wöchigen Sprints. Durch die Iterative Entwicklung und den Feedbackschleifen behalten Sie während der Projektlaufzeit den Überblick.",
			src: dev,
		},
		{
			title: "Abschließen",
			content:
				"Ist die Entwicklung abgeschlossen, übergeben wir Ihnen das Produkt. Wir weisen Sie und Ihre Mitarbeiter in die Nutzung ein und stehen Ihnen weiterhin bei Fragen und Wünschen zur Verfügung.",
			src: meeting,
		},
	];

	return (
		<ThemeWrapper variant="light">
			<Container spacing>
				<Grid.Container gap={GRID_GAP} alignItems="center" justify="center">
					<Grid {...breakpoints}>
						<Title h2 caps centered>
							Unsere Arbeit
						</Title>
					</Grid>
					<Grid {...breakpoints}>
						<Note label="Smart">
							Bei QUIKK Software arbeiten wir agil nach Scrum. So können wir
							qualitative Software entwickeln während wir gleichzeitig Kosten,
							Funktionsumfang und Deadlines einhalten und vollkommen transparent
							kommunizieren. Die folgenden vier Abschnitte innerhalb eines
							Kundenprojektes sind uns dabei besonders wichtig.
						</Note>
					</Grid>
					<Grid {...breakpoints}>
						<Collapse.Group>
							{work.map(({ title, content, src }, i) => (
								<Collapse
									title={`${i + 1}. ${title}`}
									initialVisible={i === 0}
									key={i}
								>
									<Grid.Container
										gap={GRID_GAP}
										alignItems="center"
										justify="center"
									>
										<Grid xs={24}>
											<Text p type="secondary">
												{content}
											</Text>
										</Grid>
										<Grid xs={24}>
											<Image
												src={src}
												style={{ maxWidth: "300px" }}
												alt={`QUIKK Software: Grafik zum Absatz ${title}`}
											/>
										</Grid>
									</Grid.Container>
								</Collapse>
							))}
						</Collapse.Group>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Work;
