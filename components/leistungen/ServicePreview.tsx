import { Grid, Image, Text, Button, Card } from "@geist-ui/react";
import React from "react";
import { GRID_GAP } from "../../constants";
import InternalLink from "../misc/InternalLink";
import Title from "../misc/Title";
import { createLeistungenHrefFromId } from "../../utils/leistungen";
import isMobile from "../hooks/isMobile";
import { ChevronRight } from "@geist-ui/react-icons";
import ThemeWrapper from "../theme/ThemeWrapper";

const ServicePreview = ({
	src = "",
	title = "",
	content = "",
	revert = false,
	alt = "",
	cta = "Mehr erfahren",
	id = "",
	...rest
}) => {
	const mobile = isMobile();
	alt = alt.length > 0 ? alt : `QUIKK Software: ${title}`;
	const Img = () => (
		<Image
			src={src}
			alt={alt}
			title={alt}
			style={{ maxHeight: "300px", maxWidth: "300px" }}
		/>
	);

	const Cta = () => (
		<InternalLink
			href={createLeistungenHrefFromId(id)}
			style={{ width: mobile ? "100%" : null }}
		>
			<Button
				ghost
				style={{ width: mobile ? "100%" : null }}
				auto
				iconRight={<ChevronRight />}
			>
				{cta}
			</Button>
		</InternalLink>
	);

	return (
		<Grid
			xs={24}
			direction="column"
			alignItems="center"
			justify="center"
			id={id}
			{...rest}
		>
			<ThemeWrapper>
				<Grid.Container gap={GRID_GAP} alignItems="center" justify="center">
					<Grid xs={0} sm={revert ? 0 : 10}>
						<Img />
					</Grid>
					<Grid xs={24} sm={14}>
						<Grid.Container>
							<Grid.Container xs={24}>
								<Title h2 centered={false} caps>
									{title}
								</Title>
							</Grid.Container>
							<Grid xs={24} direction="column">
								<Text p type="secondary">
									{content}
								</Text>
							</Grid>
							{!mobile && <Cta />}
						</Grid.Container>
					</Grid>
					<Grid xs={24} sm={revert ? 10 : 0}>
						<Img />
					</Grid>
					{mobile && (
						<Grid xs={24}>
							<Cta />
						</Grid>
					)}
				</Grid.Container>
			</ThemeWrapper>
		</Grid>
	);
};

export default ServicePreview;
