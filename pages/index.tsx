import React from "react";
import Corner from "../components/index/Corner";
import CustomerSlider from "../components/index/CustomerSlider";
import Hero from "../components/index/Hero";
import Introduction from "../components/index/Introduction";
import Services from "../components/index/Services";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import How from "../components/misc/How";
import Values from "../components/misc/Values";
import Work from "../components/misc/Work";
import { SEPARATOR } from "../constants";
import { getArticles, getCustomers, getProjects } from "../utils/strapi";

const index = ({ articles, customers, projects }) => {
	return (
		<>
			<TitleAndDesc
				title={`QUIKK Software ${SEPARATOR} Softwareentwicklung und mobile Apps`}
				description="Konzeption und Umsetzung von individueller Software in Minden. IT-Beratung, Webentwicklung und Anwendungsentwicklung für Mobile, Desktop und Web."
			/>
			<Hero />
			<Services />
			<Introduction />
			<Values heading />
			<Work heading variant="dark" />
			<CustomerSlider customers={customers} />
			<How />
			<Corner article={articles[0]} project={projects[0]} />
		</>
	);
};

export default index;

export async function getStaticProps() {
	const articles = await getArticles();
	const customers = await getCustomers();
	const projects = await getProjects();
	const articlesToShowInPreview = 3;
	return {
		props: {
			articles: articles.slice(0, articlesToShowInPreview),
			customers,
			projects: projects.slice(0, articlesToShowInPreview),
		},
		revalidate: 1,
	};
}
