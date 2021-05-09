import React from "react";
import { Grid, Button } from "@geist-ui/react";
import Container from "../layout/Container";
import { GRID_GAP } from "../../constants";
import Title from "../misc/Title";
import InternalLink from "../misc/InternalLink";
import isMobile from "../hooks/isMobile";
import ThemeWrapper from "../theme/ThemeWrapper";
import Project from "../projekte/Project";

const ProjectPreview = ({ projects }) => {
	const mobile = isMobile();
	return (
		<ThemeWrapper>
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					<Grid xs={24}>
						<Title h2 centered caps>
							Aktuelle Projekte
						</Title>
					</Grid>
					{projects.map((project, i) => (
						<Project {...project} key={i} />
					))}
					<Grid xs={24} sm={24} md alignItems="center" justify="center">
						<InternalLink
							href="/projekte"
							style={{ width: mobile ? "100%" : null }}
						>
							<Button
								type="secondary-light"
								style={{ width: mobile ? "100%" : null }}
							>
								Alle Projekte anzeigen
							</Button>
						</InternalLink>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default ProjectPreview;
