import { Breadcrumbs, Grid, Image } from "@geist-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Container from "../../components/layout/Container";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import InternalLink from "../../components/misc/InternalLink";
import { breakpoints, GRID_GAP, PROJEKTE_LINK } from "../../constants";
import { getPreviewText } from "../../utils/blog";
import { getProjectBySlug, getProjects } from "../../utils/strapi";
import ThemeWrapper from "../../components/theme/ThemeWrapper";
import Title from "../../components/misc/Title";
import Empty from "../../components/misc/Empty";

const Project = ({ name = "", desc = "", image = [] }) => {
	const router = useRouter();
	const { url } = image[0] ?? { url: "" };

	const notFound = [name, desc, image].some((el) => !el);

	useEffect(() => {
		if (notFound) {
			router.replace("/404");
		}
	}, [router]);

	return notFound ? (
		<Empty />
	) : (
		<ThemeWrapper>
			<TitleAndDesc {...{ title: name, desc: getPreviewText(desc, 150) }} />
			<Container spacing>
				<Grid.Container gap={GRID_GAP} justify="center">
					<Grid {...breakpoints}>
						<Breadcrumbs>
							<Breadcrumbs.Item>
								<InternalLink href="/">Home</InternalLink>
							</Breadcrumbs.Item>
							<Breadcrumbs.Item>
								<InternalLink href={PROJEKTE_LINK}>Projekte</InternalLink>
							</Breadcrumbs.Item>
							<Breadcrumbs.Item>Dieses Projekt</Breadcrumbs.Item>
						</Breadcrumbs>
					</Grid>
					<Grid {...breakpoints}>
						<Title h1>{name}</Title>
					</Grid>
					<Grid {...breakpoints}>
						<Image alt={name} title={name} src={url} />
					</Grid>
					<Grid {...breakpoints} direction="column">
						<ReactMarkdown>{desc}</ReactMarkdown>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Project;

export async function getStaticProps(ctx) {
	const {
		params: { slug },
	} = ctx;

	const project = await getProjectBySlug(slug);

	return {
		revalidate: 1,
		props: {
			...project,
		},
	};
}

export async function getStaticPaths() {
	const projects = await getProjects();
	const paths = projects.map(({ slug }) => `${PROJEKTE_LINK}/${slug}`);

	return {
		paths,
		fallback: true,
	};
}
