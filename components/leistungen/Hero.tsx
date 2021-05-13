import {
	Grid,
	Text,
	useTheme,
	Image,
	Button,
	Description,
} from "@geist-ui/react";
import React from "react";
import { GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import hero from "../../assets/images/puzzle.svg";
import InternalLink from "../misc/InternalLink";
import isMobile from "../hooks/isMobile";
import isSubpage from "../hooks/isSubpage";
import ThemeWrapper from "../theme/ThemeWrapper";
import Title from "../misc/Title";
import Divider from "../misc/Divider";
import { ChevronLeft } from "@geist-ui/react-icons";

const Hero = ({ title = "", subtitle = "", src = hero }) => {
	const theme = useTheme();
	const mobile = isMobile();
	const { isSubPath, parent } = isSubpage();

	const BackButton = () => (
		<InternalLink style={{ width: mobile ? "100%" : null }} href={parent}>
			<Button ghost style={{ width: mobile ? "100%" : null }}>
				<ChevronLeft /> Zu den Leistungen
			</Button>
		</InternalLink>
	);

	return (
		<ThemeWrapper
			style={{
				background: theme.palette.accents_8,
				border: `1px solid ${theme.palette.accents_7}`,
				borderWidth: "1px 0",
				padding: `${mobile ? 0 : GRID_GAP}em 0`,
			}}
		>
			<Container spacing>
				<Grid.Container gap={GRID_GAP} alignItems="center">
					<Grid xs={24} sm={24} md={14} direction="column">
						<Description title="Immer eine ganzheitliche Lösung." />
						<Title h1>{title}</Title>
						<Divider center={false} />
						<Text type="secondary" style={{ marginTop: 0 }}>
							{subtitle}
						</Text>
						{isSubPath && !mobile && <BackButton />}
					</Grid>
					<Grid xs={24} sm={24} md={10} justify="center">
						<Image
							src={src}
							alt={`${title} bei QUIKK Software & Webdesign`}
							style={{ maxWidth: "300px" }}
						/>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Hero;
