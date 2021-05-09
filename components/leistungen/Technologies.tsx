import React from "react";
import { Grid, Text } from "@geist-ui/react";
import Title from "../misc/Title";
import { GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import isMobile from "../hooks/isMobile";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";
const technologies = () => {
	const mobile = isMobile();

	const technologyIcons = [
		"devicon-typescript-plain colored",
		"devicon-javascript-plain colored",
		"devicon-nodejs-plain-wordmark colored",
		"devicon-react-original-wordmark colored",
		"devicon-html5-plain-wordmark colored",
		"devicon-css3-plain-wordmark colored",
		"devicon-redux-original colored",
		"devicon-electron-original-wordmark colored",
		"devicon-express-original-wordmark colored",
		"devicon-mongodb-plain-wordmark colored",
		"devicon-npm-original-wordmark colored",
		"devicon-flutter-plain colored",
	];

	return (
		<section>
			<Container spacing>
				<TitleAndSubtitle
					title="Unsere Trickkiste"
					desc="Ein vielfältiger Technologiestack aus dem JavaScript Umfeld lässt uns die unterschiedlichsten Lösungen für Sie entwerfen."
					titleProps={{ h1: false, h2: true }}
				/>
				<Grid.Container gap={GRID_GAP}>
					<Grid xs={24} direction="column">
						<Grid.Container gap={mobile ? 0 : GRID_GAP}>
							<Grid xs={24} md={12}>
								<Text type="secondary" style={{ marginBottom: 0 }}>
									Eine Vielzahl unserer Lösungen bedient sich an aktuellen
									Technologien aus dem JavaScript Ökosystem. JavaScript war
									ursprünglich als reine Skriptsprache für das Web konzipiert,
									ist heutzutage aber deutlich umfangreicher und vielfältiger
									einsetzbar. Wir verwenden JavaScript (ES6+) und TypeScript im
									Front- und Backend unserer Anwendungen und können so auf
									aktuelle Tools und Frameworks aus dem npm Ökosystem
									zurückgreifen.
								</Text>
							</Grid>
							<Grid xs={24} md={12}>
								<Text type="secondary" style={{ marginBottom: 0 }}>
									Nutzeroberflächen und Webdesigns realisieren wir mit React
									(HTML/CSS). Für unsere Webanwendungen verwenden wir Next.js,
									Desktopanwendungen werden mit Electron oder alternativ als
									Progressive Web App (PWA) erstellt. Für mobile Anwendungen
									kommen React Native, Flutter oder PWA zum Einsatz. Mit Node.js
									und Express.js bauen wir unsere Server und REST
									Schnittstellen, Daten und Inhalte werden über MongoDB
									persistiert.
								</Text>
							</Grid>
						</Grid.Container>
					</Grid>
					{technologyIcons.map((_, i) => (
						<Grid
							alignItems="center"
							justify="center"
							direction="row"
							key={i}
							xs={12}
							sm={8}
							md={6}
							lg={4}
						>
							<i
								style={{ fontSize: "3em", textAlign: "center" }}
								className={_}
							/>
						</Grid>
					))}
				</Grid.Container>
			</Container>
		</section>
	);
};

export default technologies;
