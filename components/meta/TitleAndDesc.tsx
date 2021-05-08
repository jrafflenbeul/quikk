import React from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { APPLICATION_NAME, FOOTER_LINK_SEPARATOR } from "../../constants";

const TitleAndDesc = ({
	title = "",
	description = "",
}: {
	title?: string;
	description?: string;
}) => {
	const router = useRouter();
	const isHome = router.pathname === "/";

	title = isHome
		? title
		: `${title} ${FOOTER_LINK_SEPARATOR} ${APPLICATION_NAME}`;

	return <NextSeo title={title} description={description} />;
};

export default TitleAndDesc;
