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
import hero from "../assets/logos/logo_light_q.svg";
import { SEPARATOR } from "../constants";
import {
  getArticles,
  getColleagues,
  getCustomers,
  getProjects,
} from "../utils/strapi";
import ColleaguePreview from "../components/team/ColleaguePreview";

const index = ({ articles, customers, projects, colleagues }) => {
  return (
    <>
      <TitleAndDesc
        title={`QUIKK Software ${SEPARATOR} Softwareentwicklung und mobile Apps`}
        description="Konzeption und Umsetzung von individueller Software in Minden. IT-Beratung, Webentwicklung und Anwendungsentwicklung für Mobile, Desktop und Web."
      />
      <Hero
        logo={hero}
        description="Willkommen bei QUIKK Software."
        titleAndSubtitle="Individuelle Softwareentwicklung und mobile Apps nach Ihren Vorstellungen."
        text="Neben der klassischen Entwicklung von Web- und Desktopanwendungen,
		mobilen Apps und E-Commerce-Lösungen bieten wir Ihnen außerdem
		unsere Unterstützung bei der Planung, Konzeption und Umsetzung
		Ihrer Softwareprojekte an."
      />
      <Services />
      <Introduction />
      <Values heading />
      <How />
      <Work heading />
    </>
  );
};

export default index;

export async function getStaticProps() {
  return {
    props: {
      articles: [],
      customers: [],
      projects: [],
      colleagues: [],
    },
    revalidate: 1,
  };
}
