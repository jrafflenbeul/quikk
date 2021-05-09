import { Breadcrumbs, Grid, Image, Spacer, Text } from "@geist-ui/react";
import { Calendar, Clock } from "@geist-ui/react-icons";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Container from "../../components/layout/Container";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import AlignedUser from "../../components/misc/AlignedUser";
import InternalLink from "../../components/misc/InternalLink";
import { TextWithIcon } from "../../components/misc/WithIconHelper";
import { breakpoints, GRID_GAP, SMALL_GAP } from "../../constants";
import { getPreviewText, getReadingTimeInMinutes } from "../../utils/blog";
import { getArticleBySlug, getArticles } from "../../utils/strapi";
import ThemeWrapper from "../../components/theme/ThemeWrapper";
import Title from "../../components/misc/Title";
import Empty from "../../components/misc/Empty";

const Article = ({
	title = "",
	content = "",
	image,
	author,
	published_at = "",
}) => {
	const router = useRouter();
	const { url } = image ?? { url: "" };
	const { name, avatar, position } = author ?? {
		name: "",
		avatar: "",
		position: "",
	};

	const notFound = [
		title,
		content,
		image,
		author,
		published_at,
		url,
		name,
		avatar,
		position,
	].some((el) => !el);

	useEffect(() => {
		if (notFound) {
			router.replace("/404");
		}
	}, [router]);

	return notFound ? (
		<Empty />
	) : (
		<ThemeWrapper>
			<TitleAndDesc {...{ title, desc: getPreviewText(content, 150) }} />
			<Container spacing>
				<Grid.Container gap={GRID_GAP} justify="center">
					<Grid {...breakpoints}>
						<Breadcrumbs>
							<Breadcrumbs.Item>
								<InternalLink href="/">Home</InternalLink>
							</Breadcrumbs.Item>
							<Breadcrumbs.Item>
								<InternalLink href="/blog">Blog</InternalLink>
							</Breadcrumbs.Item>
							<Breadcrumbs.Item>Dieser Artikel</Breadcrumbs.Item>
						</Breadcrumbs>
					</Grid>
					<Grid {...breakpoints}>
						<Title h1>{title}</Title>
					</Grid>
					<Grid {...breakpoints}>
						<Grid.Container
							justify="space-between"
							alignItems="center"
							gap={SMALL_GAP}
						>
							<Grid>
								<InternalLink href="/team">
									<AlignedUser {...{ avatar, name, position }} />
								</InternalLink>
							</Grid>
							<Grid>
								<Grid.Container>
									<TextWithIcon icon={<Calendar />}>
										<Text type="secondary" small>
											{new Date(published_at).toLocaleDateString()}
										</Text>
									</TextWithIcon>
									<Spacer />
									<TextWithIcon icon={<Clock />}>
										<Text type="secondary" small>
											{getReadingTimeInMinutes(content)} min
										</Text>
									</TextWithIcon>
								</Grid.Container>
							</Grid>
						</Grid.Container>
					</Grid>
					<Grid {...breakpoints}>
						<Image alt={title} src={url} />
					</Grid>
					<Grid {...breakpoints} direction="column">
						<ReactMarkdown>{content}</ReactMarkdown>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Article;

/**
 * see https://github.com/vercel/next.js/blob/canary/examples/cms-strapi/pages/posts/%5Bslug%5D.js
 * for further information on how to render blog posts properly
 */

export async function getStaticProps(ctx) {
	const {
		params: { slug },
	} = ctx;

	const article = await getArticleBySlug(slug);

	return {
		revalidate: 1,
		props: {
			...article,
		},
	};
}

export async function getStaticPaths() {
	const articles = await getArticles();
	const paths = articles.map(({ slug }) => `/blog/${slug}`);

	return {
		paths,
		fallback: true,
	};
}
