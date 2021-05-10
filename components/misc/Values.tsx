import React from "react";
import { Grid } from "@geist-ui/react";
import { GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import { Award, Coffee, UserCheck } from "@geist-ui/react-icons";
import ThemeWrapper from "../theme/ThemeWrapper";
import EnumerationList from "./EnumerationList";
import TitleAndSubtitle from "./TitleAndSubtitle";

const Values = ({
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
							title="Gründe für QUIKK"
							desc="Wir leben die Softwareentwicklung und setzen auf eine vertrauensvolle und professionelle Zusammenarbeit mit Ihnen."
							titleProps={{ h1: false, h2: true }}
						/>
					)}
					{[
						{
							icon: <Award />,
							title: "Fachkenntnisse",
							content: [
								"Eingespieltes, junges Team",
								"Vollblut Informatiker",
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
						return <EnumerationList _={_} key={i} />;
					})}
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Values;
