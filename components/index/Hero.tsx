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
import hero from "../../assets/images/hero.svg";
import Divider from "../misc/Divider";
import getHeaderHeightInPx from "../hooks/getHeaderHeightInPx";
import isMobile from "../hooks/isMobile";
import ThemeWrapper from "../theme/ThemeWrapper";
import Title from "../misc/Title";

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
					<Grid xs={24} sm={24} md={14} direction="column">
						<Description title="Individuell von QUIKK Software." />
						<Title h1>Softwareentwicklung, mobile Apps und Webdesign.</Title>
						<Divider center={false} />
						<Text type="secondary" style={{ marginTop: 0 }}>
							Wir entwickeln Ihr individuelles Vorhaben agil nach Scrum. Unser
							Dienstleistungsspektrum reicht dabei von klassischen Web- und
							Desktopanwendungen hin zu mobilen Apps,{" "}
							<span style={{ whiteSpace: "nowrap" }}>E-Commerce</span>-Lösungen
							und professionellem Webdesign.
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
						<Grid md={10} justify="center">
							<Image
								src={hero}
								alt="QUIKK Software: Softwareentwicklung, mobile Apps und Webdesign."
								title="QUIKK Software: Softwareentwicklung, mobile Apps und Webdesign."
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
