import React from "react";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import Hero from "../../components/index/Hero";
import { cityData, SEPARATOR } from "../../constants";
import Services from "../../components/index/Services";
import { getColleagues } from "../../utils/strapi";
import ColleaguePreview from "../../components/team/ColleaguePreview";

const getAllSlugs = (cityData) =>
  cityData.map((data) => {
    return {
      params: {
        slug: data.slug,
      },
    };
  });

const getCityDataBySlug = (cityData, slug) =>
  cityData.find((city) => {
    return city.slug === slug;
  });

const city = ({ colleagues, cityData }) => {
  return (
    <>
      <TitleAndDesc
        title={`${
          cityData.city && cityData.federalState && `${cityData.city}`
        } ${SEPARATOR} Softwareentwicklung und mobile Apps`}
        description={`Konzeption und Umsetzung von individueller Software in ${
          cityData.city && cityData.federalState
            ? `${cityData.city}, ${cityData.federalState}`
            : "Ihrer Nähe"
        }. IT-Beratung, Webentwicklung und Anwendungsentwicklung für Mobile, Desktop und Web.`}
      />
      <Hero
        logo={cityData.logo}
        description={cityData.description}
        titleAndSubtitle={cityData.titleAndSubtitle}
        text={cityData.text}
        altImageText={cityData.altImageText}
        titleImageText={cityData.titleImageText}
        logoBgActive={false}
      />
      <Services />
      <ColleaguePreview {...{ colleagues }} />
    </>
  );
};

export default city;

export async function getStaticPaths() {
  const paths = getAllSlugs(cityData);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const specificCityData = getCityDataBySlug(cityData, params.slug);
  const colleagues = await getColleagues();

  return {
    props: {
      colleagues,
      cityData: specificCityData,
    },
  };
}
