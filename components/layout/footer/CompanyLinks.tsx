import React from "react";
import { BLOG_LINK, LEISTUNGEN_LINK, PROJEKTE_LINK } from "../../../constants";
import InternalLink from "../../misc/InternalLink";
import Links from "./Links";

const CompanyLinks = () => {
	return (
		<Links
			content={[
				<InternalLink href={LEISTUNGEN_LINK}>Leistungen</InternalLink>,
			]}
		/>
	);
};

export default CompanyLinks;
