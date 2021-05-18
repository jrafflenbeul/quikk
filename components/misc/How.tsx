import { Grid, Text, Image } from "@geist-ui/react";
import React from "react";
import { GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import ThemeWrapper from "../theme/ThemeWrapper";
import TitleAndSubtitle from "./TitleAndSubtitle";
import isMobile from "../hooks/isMobile";
import q from "../../assets/logos/logo_dark_q.svg";

const How = () => {
	const mobile = isMobile();
	return (
		<ThemeWrapper variant="light">
			<Container spacing>
				<TitleAndSubtitle
					title="Wie wir Sie unterstützen"
					desc="Sie haben die Anforderungen, wir das technische Know-how"
					titleProps={{ h1: false, h2: true }}
				/>
				<Grid.Container gap={GRID_GAP}>
					<Grid xs={24} direction="column">
						<Grid.Container gap={mobile ? 0 : GRID_GAP}>
							<Grid xs={24} md={12}>
								<Text type="secondary" style={{ marginBottom: 0 }}>
									Durch unser Fachwissen in der Konzeption und Implementierung
									von Software können wir Ihnen schnell zurückmelden, ob und wie
									sich Ihr Vorhaben von uns in die Tat umsetzen lässt. Während
									wir uns bei der Entwicklung besonders auf die technische
									Komponente konzentrieren, bringen Sie das spezifische Prozess-
									und Domänenwissen mit. Dieses Vorgehen erlaubt es uns,
									Lösungen für unterschiedlichste Branchen zu entwickeln.
								</Text>
							</Grid>
							<Grid xs={0} md={12}>
								<Image
									src={q}
									alt="QUIKK Software Logo"
									title="QUIKK Software Logo"
								/>
							</Grid>
						</Grid.Container>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default How;
