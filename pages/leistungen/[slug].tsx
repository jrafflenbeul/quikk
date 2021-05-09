import React from "react";
import Hero from "../../components/leistungen/Hero";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import { services } from "./index";
import ServiceFooter from "../../components/leistungen/ServiceFooter";
import Use from "../../components/leistungen/Use";
import Mission from "../../components/leistungen/Mission";
import Cta from "../../components/leistungen/Cta";
import { createLeistungenHrefFromId } from "../../utils/leistungen";

const DetailServicePage = ({ service }) => {
	const { src, title, content } = service;
	const desc = content;
	return (
		<>
			<TitleAndDesc {...{ title, desc }} />
			<Hero title={title} subtitle={desc} src={src} />
			<Use service={service} />
			<Mission />
			<Cta title={title} />
			<ServiceFooter />
		</>
	);
};

export async function getStaticPaths() {
	const paths = services.map(({ id }) => createLeistungenHrefFromId(id));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const {
		params: { slug },
	} = context;
	const service = services.find(({ id }) => id === slug);

	return {
		props: { service },
	};
}

export default DetailServicePage;
