import { Grid } from "@geist-ui/react";
import React from "react";
import { GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import ThemeWrapper from "../theme/ThemeWrapper";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";
import Preview from "./Preview";

const Corner = ({ article, project }) => {
	return (
		<ThemeWrapper variant="light">
			<Container spacing>
				<Grid.Container gap={GRID_GAP} alignItems="stretch">
					<TitleAndSubtitle
						title="Mehr von QUIKK"
						desc="Erhalten Sie weitere Einblicke in unsere Arbeit und stöbern Sie durch aktuelle Projekte oder neuste Blogbeiträge."
						titleProps={{ h1: false, h2: true }}
					/>
					<Grid xs={24} md={12} style={{ height: "100%" }}>
						<Preview
							title={project.name}
							content={project.desc}
							image={project.image[0]}
							slug={project.slug}
							type="projekte"
						/>
					</Grid>
					<Grid xs={24} md={12} style={{ height: "100%" }}>
						<Preview
							title={article.title}
							content={article.content}
							image={article.image}
							slug={article.slug}
							type="blog"
							author={article.author}
							updatedAt={article.updatedAt}
						/>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Corner;
