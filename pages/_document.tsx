import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@geist-ui/react";
import { APPLICATION_NAME, LANGUAGE, LOADING } from "../constants";

class _document extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = CssBaseline.flush();

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{styles}
				</>
			),
		};
	}

	render() {
		return (
			<Html lang={LANGUAGE}>
				<Head>
					<meta name="application-name" content={APPLICATION_NAME} />
					<meta name="apple-mobile-web-app-title" content={APPLICATION_NAME} />
					<meta property="og:site_name" content={APPLICATION_NAME} />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="format-detection" content="telephone=no" />
					<meta name="theme-color" content="#ffffff" />
					<link rel="manifest" href="/manifest.json" />
				</Head>
				<body className={LOADING}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default _document;
