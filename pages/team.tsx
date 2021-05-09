import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import ColleagueCard from "../components/team/ColleagueCard";
import Container from "../components/layout/Container";
import { GRID_GAP } from "../constants";
import { Grid } from "@geist-ui/react";
import TitleAndSubtitle from "../components/misc/TitleAndSubtitle";
import Values from "../components/misc/Values";
import { getColleagues } from "../utils/strapi";
import ThemeWrapper from "../components/theme/ThemeWrapper";

const team = ({ colleagues }) => {
	const title = "Unser Team";
	const desc =
		"Wir sind ein eingespieltes, junges und dynamisches Team aus Softwareentwicklern.";

	return (
		<ThemeWrapper variant="light">
			<TitleAndDesc {...{ title, desc }} />
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					<TitleAndSubtitle {...{ title, desc }} />
					{colleagues.map((colleague, i) => (
						<ColleagueCard key={i} {...colleague} />
					))}
				</Grid.Container>
			</Container>
			<Values variant="dark" heading />
		</ThemeWrapper>
	);
};

export default team;

export async function getStaticProps() {
	const colleagues = await getColleagues();
	return {
		props: { colleagues },
		revalidate: 1,
	};
}
