import React from "react";
import ThemeWrapper from "../components/theme/ThemeWrapper";
import DefaultSEO from "../components/meta/DefaultSEO";
import "inter-ui/inter.css";
import "react-multi-carousel/lib/styles.css";
import "devicon/devicon.min.css";
import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { CssBaseline } from "@geist-ui/react";
import { LOADING } from "../constants";
import ContactRef from "../components/misc/ContactRef";
import getHeaderHeightInPx from "../components/hooks/getHeaderHeightInPx";

const _app = ({ Component, pageProps }) => {
	if (typeof document !== "undefined") {
		const main = document?.getElementsByTagName("main")[0];
		main?.setAttribute("style", `padding-top: ${getHeaderHeightInPx()}px`);
		document?.body?.classList?.remove(LOADING);
	}

	return (
		<ThemeWrapper variant="dark">
			<CssBaseline />
			<Header />
			<DefaultSEO />
			<main>
				<Component {...pageProps} />
			</main>
			<ContactRef />
			<Footer />
		</ThemeWrapper>
	);
};

export default _app;
