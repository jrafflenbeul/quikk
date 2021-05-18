import React from "react";
import Head from "next/head";
import { APPLICATION_NAME, LANGUAGE } from "../../constants";

const DefaultSEO = () => {
	const city = "Minden";
	const latitude = 52.30219;
	const longitude = 8.86036;
	const region = "DE-NW";
	const keywords: Array<string> = [
		APPLICATION_NAME,
		"Software",
		"individuelle Software",
		"Softwareentwicklung",
		"individuelle Softwareentwicklung",
		"Individualentwicklung",
		"Programmierung",
		"Entwicklung",
		"Anwendungsentwicklung",
		"App Entwicklung",
		"Mobile",
		"Mobile Apps",
		"Webentwicklung",
		"Planung",
		"Konzeption",
		"Beratung",
	];
	const url: string = "https://QUIKK.de";
	const favicon: string = "/favicon.ico";

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
				/>
				<meta charSet="utf-8" />
				<meta property="content-type" content="text/html; charset=UTF-8" />
				<meta name="keywords" content={keywords.join(", ")} />
				<meta name="author" content={APPLICATION_NAME} />
				<meta name="copyright" content={APPLICATION_NAME} />
				<meta name="robots" content="index,follow" />
				<meta name="geo.region" content={region} />
				<meta name="geo.placename" content={city} />
				<meta name="geo.position" content={`${latitude};${longitude}`} />
				<meta name="ICBM" content={`${latitude}, ${longitude}`} />
				<meta property="og:site_name" content={APPLICATION_NAME} />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />
				<meta property="og:latitude" content={String(latitude)} />
				<meta property="og:longitude" content={String(longitude)} />
				<meta property="og:locality" content={city} />
				<meta property="og:region" content={region} />
				<meta property="HandheldFriendly" content="yes" />
				<meta property="audience" content="all" />
				<meta httpEquiv="language" content={LANGUAGE} />
				<meta name="language" content={LANGUAGE} />
				<link rel="icon" href={favicon} />
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
		</>
	);
};

export default DefaultSEO;
