import { Grid } from "@geist-ui/react";
import React from "react";
import Project from "../../components/projekte/Project";
import Container from "../../components/layout/Container";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import TitleAndSubtitle from "../../components/misc/TitleAndSubtitle";
import ThemeWrapper from "../../components/theme/ThemeWrapper";
import { GRID_GAP } from "../../constants";
import { getProjects } from "../../utils/strapi";

const Projects = ({ projects }) => {
	const title = "Projekte";
	const desc =
		"Hier zeigen wir Ihnen eine Auswahl unserer vergangenen Kundenprojekte.";
	return (
		<ThemeWrapper>
			<TitleAndDesc {...{ title, desc }} />
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					<TitleAndSubtitle {...{ title, desc }} />
					{projects.map((project, i) => (
						<Project {...project} key={i} />
					))}
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Projects;

export async function getStaticProps() {
	const projects = await getProjects();
	return {
		props: { projects },
		revalidate: 1,
	};
}
