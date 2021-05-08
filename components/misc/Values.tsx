import React from "react";
import { Grid, Text } from "@geist-ui/react";
import { GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import { Award, Coffee, UserCheck } from "@geist-ui/react-icons";
import ThemeWrapper from "../theme/ThemeWrapper";

const Values = () => {
	return (
		<ThemeWrapper>
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					{[
						{
							icon: <Award />,
							title: "Fachkenntnisse",
							content: [
								"Eingespieltes, junges Team",
								"Studierte Informatiker",
								"Mehrjährige Berufserfahrung",
								"Branchenübergreifende Projekte",
							],
						},
						{
							icon: <Coffee />,
							title: "Unsere Werte",
							content: [
								"Dynamisches und offenes Mindset",
								"Transparente Kommunikationsweise",
								"Langer Atem und Durchhaltevermögen",
								"Anpackermentalität: Wir sind Macher",
							],
						},
						{
							icon: <UserCheck />,
							title: "Ihre Vorteile",
							content: [
								"Vielseitige Dienstleistungen",
								"Aktive Mitsprache und Mitgestaltung",
								"Clean Code und wartbare Lösungen",
								"Transparente Kostenaufstellung",
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

export default Values;
