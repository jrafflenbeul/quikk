import { Card, Grid, Image, Button, Text, Badge } from "@geist-ui/react";
import { ExternalLink as ExternalIcon } from "@geist-ui/react-icons";
import React from "react";
import ReactMarkdown from "react-markdown";
import { GRID_GAP, SMALL_GAP } from "../../constants";
import isMobile from "../hooks/isMobile";
import ExternalLink from "../misc/ExternalLink";
import Title from "../misc/Title";

const Project = ({ name = "", desc = "", url = "", image, slug }) => {
	const mobile = isMobile();
	const { url: src } = image[0] ?? { url: "" };

	return (
		<Grid xs={24} id={slug}>
			<Card style={{ width: "100%" }} width="100%">
				<Grid.Container
					direction={mobile ? "column-reverse" : "row"}
					gap={GRID_GAP}
					alignItems="flex-start"
				>
					<Grid xs={24} sm={24} md={16} direction="column">
						<Title h4>{name}</Title>
						<Text p type="secondary" small>
							<ReactMarkdown>{desc}</ReactMarkdown>
						</Text>
						<Text small>
							<ExternalLink
								href={url}
								style={{ width: mobile ? "100%" : null }}
								color
							>
								{name} ansehen
							</ExternalLink>
						</Text>
					</Grid>
					<Grid xs={24} sm={24} md={8}>
						<Image alt={name} src={src} />
					</Grid>
				</Grid.Container>
			</Card>
		</Grid>
	);
};

export default Project;
