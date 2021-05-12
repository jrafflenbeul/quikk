import { Grid } from "@geist-ui/react";
import React from "react";
import PreviewCard from "../../components/index/PreviewCard";
import Container from "../../components/layout/Container";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import TitleAndSubtitle from "../../components/misc/TitleAndSubtitle";
import ThemeWrapper from "../../components/theme/ThemeWrapper";
import { GRID_GAP } from "../../constants";
import { getArticles } from "../../utils/strapi";

const Articles = ({ articles }) => {
	const title = "Blog";
	const desc =
		"Hier zeigen wir Ihnen, was uns aktuell beschäftigt und stellen relevante Technologien vor.";
	return (
		<ThemeWrapper>
			<TitleAndDesc {...{ title, desc }} />
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					<TitleAndSubtitle {...{ title, desc }} />
					{articles.map((article, i) => (
						<Grid xs={24} md={12} key={i}>
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
					))}
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Articles;

export async function getStaticProps() {
	const articles = await getArticles();
	return {
		props: { articles },
		revalidate: 1,
	};
}
