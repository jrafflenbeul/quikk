import { Button, Grid, Image, Text, Description } from "@geist-ui/react";
import React from "react";
import {
	GRID_GAP,
	KONTAKT_LINK,
	LEISTUNGEN_LINK,
	MAGIC_NUMBER_243,
	SMALL_GAP,
} from "../../constants";
import Container from "../layout/Container";
import InternalLink from "../misc/InternalLink";
import hero from "../../assets/logos/logo_dark_q.svg";
import getHeaderHeightInPx from "../hooks/getHeaderHeightInPx";
import isMobile from "../hooks/isMobile";
import ThemeWrapper from "../theme/ThemeWrapper";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";

const Hero = () => {
	const mobile = isMobile();

	return (
		<ThemeWrapper variant="light">
			<Container
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: `calc(100vh - ${getHeaderHeightInPx()}px)`,
				}}
			>
				<Grid.Container
					gap={GRID_GAP}
					style={{ paddingBottom: `${getHeaderHeightInPx()}px` }}
					alignItems="center"
					justify="center"
				>
					<Grid xs={24} sm={24} md={17} direction="column">
						<Description title="Willkommen bei QUIKK Software." />
						<TitleAndSubtitle
							title="Individuelle Softwareentwicklung und mobile Apps nach Ihren Vorstellungen."
							grid={false}
							titleProps={{ caps: false }}
						/>
						<Text type="secondary" style={{ marginTop: 0 }}>
							Neben der klassischen Entwicklung von Web- und Desktopanwendungen,
							mobilen Apps und E-Commerce-Lösungen bieten wir Ihnen außerdem
							unsere Unterstützung bei der Planung, Konzeption und Umsetzung
							Ihrer Projekte an.
						</Text>
						<Grid.Container gap={SMALL_GAP}>
							<Grid xs={24} sm={24} md={12}>
								<InternalLink href={KONTAKT_LINK} style={{ width: "100%" }}>
									<Button type="success-light" style={{ width: "100%" }}>
										Jetzt anfragen
									</Button>
								</InternalLink>
							</Grid>
							<Grid xs={24} sm={24} md={12}>
								<InternalLink href={LEISTUNGEN_LINK} style={{ width: "100%" }}>
									<Button type="secondary-light" style={{ width: "100%" }}>
										Unsere Leistungen
									</Button>
								</InternalLink>
							</Grid>
						</Grid.Container>
					</Grid>
					{!mobile && (
						<Grid md={7} justify="center" alignItems="center" style={{}}>
							<Image
								src={hero}
								alt="QUIKK Software Logo"
								title="QUIKK Software Logo"
								height={MAGIC_NUMBER_243}
							/>
						</Grid>
					)}
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Hero;
