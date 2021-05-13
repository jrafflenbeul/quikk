import React, { useEffect } from "react";
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

const _app = ({ Component, pageProps }) => {
	useEffect(() => {
		const main = document?.getElementsByTagName("main")[0];
		const height = document?.getElementsByTagName("header")[0]?.offsetHeight;
		main?.setAttribute("style", `padding-top: ${height}px`);
		document?.body?.classList?.remove(LOADING);
	}, []);

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
