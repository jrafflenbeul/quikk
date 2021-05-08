import React from "react";
import Head from "next/head";
import {
	APPLICATION_NAME,
	FOUNDER,
	LANGUAGE,
	PHONE,
} from "../../constants";
import { LocalBusinessJsonLd } from "next-seo";

const DefaultSEO = () => {
	const city: string = "Munich";
	const latitude: number = 48.10524;
	const longitude: number = 11.59476;
	const region: string = "DE-BY";
	const keywords: Array<string> = [
		APPLICATION_NAME,
		"Watch Trade 24",
		"Uhren",
		"Armbanduhren",
		"Uhrenhandel",
		"Uhr kaufen",
		"Uhr verkaufen",
		"München",
		FOUNDER,
	];
	const url: string = "https://QUIKK.de";
	const favicon: string = "/favicon.ico";

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
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
				<link rel="shortcut icon" type="image/x-icon" href={favicon} />
				<link rel="shortcut icon" href={favicon} />
				<link rel="apple-touch-icon" href={favicon} />
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<LocalBusinessJsonLd
				type="Store"
				id={url}
				name={APPLICATION_NAME}
				description="Uhren sicher und einfach online kaufen"
				url={url}
				telephone={PHONE}
				address={{
					streetAddress: "Chiemgaustr. 78",
					addressLocality: city,
					addressRegion: region.split("-")[1],
					postalCode: "81549",
					addressCountry: region.split("-")[0],
				}}
				geo={{
					latitude: String(latitude),
					longitude: String(longitude),
				}}
			/>
		</>
	);
};

export default DefaultSEO;
