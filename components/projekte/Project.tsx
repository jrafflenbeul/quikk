import { Card, Grid, Image, Text, useTheme } from "@geist-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import { GRID_GAP } from "../../constants";
import isMobile from "../hooks/isMobile";
import ExternalLink from "../misc/ExternalLink";
import Title from "../misc/Title";

const Project = ({ name = "", desc = "", url = "", image, slug }) => {
	const mobile = isMobile();
	const theme = useTheme();
	const { url: src } = image[0] ?? { url: "" };
	const urlFilled = url.length > 0;
	return (
		<Grid xs={24} id={slug}>
			<Card
				style={{
					width: "100%",
					borderTop: `${theme.layout.gapQuarter} solid ${theme.palette.success}`,
					height: "100%",
				}}
				width="100%"
			>
				<Grid.Container
					direction={mobile ? "column" : "row"}
					gap={GRID_GAP}
					alignItems="flex-start"
				>
					<Grid xs={24} sm={24} md={8}>
						<Image alt={name} src={src} title={name} />
					</Grid>
					<Grid xs={24} sm={24} md={16} direction="column">
						<Title h3>{name}</Title>
						<Text
							p
							type="secondary"
							small
							style={{ marginBottom: urlFilled ? null : 0 }}
						>
							<ReactMarkdown>{desc}</ReactMarkdown>
						</Text>
						{urlFilled && (
							<Text small>
								<ExternalLink
									href={url}
									style={{ width: mobile ? "100%" : null }}
									color
								>
									{name} ansehen
								</ExternalLink>
							</Text>
						)}
					</Grid>
				</Grid.Container>
			</Card>
		</Grid>
	);
};

export default Project;
