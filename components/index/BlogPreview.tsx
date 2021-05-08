import React from "react";
import { Grid, Button } from "@geist-ui/react";
import Container from "../layout/Container";
import { GRID_GAP } from "../../constants";
import Title from "../misc/Title";
import Article from "../blog/Article";
import InternalLink from "../misc/InternalLink";
import isMobile from "../hooks/isMobile";
import ThemeWrapper from "../theme/ThemeWrapper";

const BlogPreview = ({ articles }) => {
	const mobile = isMobile();
	return (
		<ThemeWrapper>
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					<Grid xs={24}>
						<Title h2 centered caps>
							Neues von uns
						</Title>
					</Grid>
					{articles.map((article, i) => (
						<Article {...article} key={i} />
					))}
					<Grid xs={24} alignItems="center" justify="center">
						<InternalLink
							href="/blog"
							style={{ width: mobile ? "100%" : null }}
						>
							<Button
								type="secondary-light"
								style={{ width: mobile ? "100%" : null }}
							>
								Alle Beiträge anzeigen
							</Button>
						</InternalLink>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default BlogPreview;
