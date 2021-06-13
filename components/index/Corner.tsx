import { Grid, Button } from "@geist-ui/react";
import React from "react";
import { BLOG_LINK, GRID_GAP, PROJEKTE_LINK } from "../../constants";
import Container from "../layout/Container";
import ThemeWrapper from "../theme/ThemeWrapper";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";
import PreviewCard from "./PreviewCard";
import InternalLink from "../misc/InternalLink";
import { ChevronRight } from "@geist-ui/react-icons";
import isMobile from "../hooks/isMobile";

const Corner = ({ article, project }) => {
	const mobile = isMobile();

	const BlogButton = () => (
		<Button
			ghost
			style={{ width: mobile ? "100%" : null }}
			iconRight={<ChevronRight />}
			auto
		>
			Alle Beiträge ansehen
		</Button>
	);

	const ProjectButton = () => (
		<Button
			ghost
			style={{ width: mobile ? "100%" : null }}
			iconRight={<ChevronRight />}
			auto
		>
			Alle Projekte ansehen
		</Button>
	);

	return (
		<ThemeWrapper variant="light">
			<Container spacing>
				<Grid.Container gap={GRID_GAP} alignItems="stretch">
					<TitleAndSubtitle
						title="Neues von uns"
						desc="Erhalten Sie weitere Einblicke in unsere Arbeit und stöbern Sie durch aktuelle Projekte oder neuste Blogbeiträge."
						titleProps={{ h1: false, h2: true, caps: true }}
					/>
					<Grid xs={24} md={12}>
						<PreviewCard
							title={project.name}
							content={project.desc}
							image={project.image[0]}
							slug={project.slug}
							type="projekte"
						/>
					</Grid>
					<Grid xs={24} md={0} alignItems="center" justify="center">
						<InternalLink
							href={PROJEKTE_LINK}
							style={{ width: mobile ? "100%" : null }}
						>
							<ProjectButton />
						</InternalLink>
					</Grid>
					<Grid xs={24} md={12}>
						<PreviewCard
							title={article.title}
							content={article.content}
							image={article.image}
							slug={article.slug}
							type="blog"
							author={article.author}
							updatedAt={article.updatedAt}
						/>
					</Grid>
					<Grid xs={24} md={0} alignItems="center" justify="center">
						<InternalLink
							href={BLOG_LINK}
							style={{ width: mobile ? "100%" : null }}
						>
							<BlogButton />
						</InternalLink>
					</Grid>
					<Grid xs={0} md={12} alignItems="center" justify="center">
						<InternalLink
							href={PROJEKTE_LINK}
							style={{ width: mobile ? "100%" : null }}
						>
							<ProjectButton />
						</InternalLink>
					</Grid>
					<Grid xs={0} md={12} alignItems="center" justify="center">
						<InternalLink
							href={BLOG_LINK}
							style={{ width: mobile ? "100%" : null }}
						>
							<BlogButton />
						</InternalLink>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Corner;
