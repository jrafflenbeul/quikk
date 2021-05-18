import React from "react";
import { BLOG_LINK, LEISTUNGEN_LINK, PROJEKTE_LINK } from "../../../constants";
import InternalLink from "../../misc/InternalLink";
import Links from "./Links";

const CompanyLinks = () => {
	return (
		<Links
			content={[
				<InternalLink href={LEISTUNGEN_LINK}>Leistungen</InternalLink>,
				<InternalLink href={PROJEKTE_LINK}>Projekte</InternalLink>,
				<InternalLink href={BLOG_LINK}>Blog</InternalLink>,
				<InternalLink href="/team">Team</InternalLink>,
				<InternalLink href="/karriere">Karriere</InternalLink>,
			]}
		/>
	);
};

export default CompanyLinks;
