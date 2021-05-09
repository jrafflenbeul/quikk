import React from "react";
import BlogPreview from "../components/index/BlogPreview";
import CustomerSlider from "../components/index/CustomerSlider";
import Hero from "../components/index/Hero";
import Introduction from "../components/index/Introduction";
import ProjectPreview from "../components/index/ProjectPreview";
import Services from "../components/index/Services";
import Work from "../components/index/Work";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import Values from "../components/misc/Values";
import WorkProcess from "../components/misc/WorkProcess";
import { SEPARATOR } from "../constants";
import { getArticles, getCustomers } from "../utils/strapi";

const index = ({ articles, customers }) => {
	return (
		<>
			<TitleAndDesc
				title={`QUIKK ${SEPARATOR} Softwareentwicklung, mobile Apps und Webdesign`}
				description="QUIKK Software aus Minden entwickelt individuelle Software, E-Commerce-Lösungen, mobile Apps und einzigartige Webdesigns. Jetzt anfragen."
			/>
			<Hero />
			<Introduction />
			<Values />
			<Services />
			<CustomerSlider customers={customers} />
			<ProjectPreview articles={articles} />
			<Work />
			<WorkProcess />
			<BlogPreview articles={articles} />
		</>
	);
};

export default index;

export async function getStaticProps() {
	const articles = await getArticles();
	const customers = await getCustomers();
	const articlesToShowInPreview = 3;
	return {
		props: { articles: articles.slice(0, articlesToShowInPreview), customers },
		revalidate: 1,
	};
}
