import { Grid, Note } from "@geist-ui/react";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import ThemeWrapper from "../components/theme/ThemeWrapper";
import TitleAndSubtitle from "../components/misc/TitleAndSubtitle";
import { getJobs } from "../utils/strapi";
import ExternalLink from "../components/misc/ExternalLink";
import CarrerCard from "../components/karriere/CarrerCard";
import { EMAIL, GRID_GAP } from "../constants";
import { getMailToHref } from "../utils/contact";

const kontakt = ({ jobs }) => {
	const title = "Karriere";
	const desc =
		"Nichts für Dich dabei? Wir freuen uns auf Deine Initiativbewerbung!";

	return (
		<ThemeWrapper>
			<TitleAndDesc {...{ title, desc }} />
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					<TitleAndSubtitle {...{ title, desc }} />
					<Grid xs={24}>
						<Note label={null} style={{ width: "100%" }}>
							Hast Du Lust auf Softwareentwicklung, Kundenkontakt und
							Startup-Atmosphäre? Schick uns Deine Bewerbungsunterlagen an{" "}
							<ExternalLink href={getMailToHref(EMAIL)} color>
								{EMAIL}
							</ExternalLink>
							.
						</Note>
					</Grid>
					{jobs.map((job, i) => (
						<CarrerCard key={i} {...job} />
					))}
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default kontakt;

export async function getStaticProps() {
	const jobs = await getJobs();
	return {
		props: { jobs },
		revalidate: 1,
	};
}
