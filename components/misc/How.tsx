import { Grid, Text } from "@geist-ui/react";
import React from "react";
import { breakpoints } from "../../constants";
import Container from "../layout/Container";
import TitleAndSubtitle from "./TitleAndSubtitle";
import ThemeWrapper from "../theme/ThemeWrapper";

const How = () => {
	return (
		<ThemeWrapper>
			<Container spacing>
				<Grid.Container justify="center">
					<TitleAndSubtitle
						titleProps={{ h1: false, h2: true, caps: true }}
						gridProps={{ ...breakpoints }}
						title="Wie wir Sie unterstützen"
						desc="Sie haben die Anforderungen, wir das technische Know-how"
					/>
					<Grid {...breakpoints} direction="column">
						<Text type="secondary" p>
							Durch unser Fachwissen in der Konzeption und Implementierung von
							Software können wir Ihnen schnell zurückmelden, ob und wie sich
							Ihr Vorhaben von uns in die Tat umsetzen lässt. Während wir uns
							bei der Entwicklung besonders auf die technische Komponente
							konzentrieren, bringen Sie das spezifische Prozess- und
							Domänenwissen sowie die Erfahrung aus Ihrem Geschäft mit.
						</Text>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default How;
