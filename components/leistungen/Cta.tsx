import React from "react";
import { breakpoints, GRID_GAP, KONTAKT_LINK } from "../../constants";
import { Grid, Text, Image, Button } from "@geist-ui/react";
import Container from "../layout/Container";
import InternalLink from "../misc/InternalLink";
import Title from "../misc/Title";
import joyce from "../../assets/images/team.jpg";
import isMobile from "../hooks/isMobile";

const Cta = ({ title }) => {
	const mobile = isMobile();

	return (
		<Container spacing>
			<Grid.Container
				gap={GRID_GAP}
				alignItems="center"
				justify="center"
				direction={mobile ? "column" : "row-reverse"}
				style={{ textAlign: "start" }}
			>
				<Grid {...breakpoints} md={16} direction="column">
					<Title h2 caps>
						Gehen Sie den ersten Schritt
					</Title>
					<Text type="secondary" p>
						Und lassen Sie uns gemeinsam an Ihrem Projekt arbeiten! Dabei spielt
						es keine Rolle, ob Sie am Anfang Ihres Vorhabens stehen, oder wir in
						ein bestehendes Projekt einsteigen. Wir freuen uns über jede
						Herausforderung.
					</Text>
					<InternalLink
						href={KONTAKT_LINK}
						style={{ width: mobile ? "100%" : null }}
					>
						<Button
							type="success-light"
							style={{ width: mobile ? "100%" : null }}
						>
							Jetzt anfragen
						</Button>
					</InternalLink>
				</Grid>
				<Grid {...{ xs: 24, sm: 24, md: 8, lg: 8 }}>
					<Image
						src={joyce}
						alt={`${title} bei QUIKK Software`}
						title={`${title} bei QUIKK Software`}
					/>
				</Grid>
			</Grid.Container>
		</Container>
	);
};

export default Cta;
