import React from "react";
import InternalLink from "../../misc/InternalLink";
import Links from "./Links";

const CompanyLinks = () => {
	return (
		<Links
			content={[
				<InternalLink href="/leistungen">Leistungen</InternalLink>,
				<InternalLink href="/projekte">Projekte</InternalLink>,
				<InternalLink href="/blog">Blog</InternalLink>,
				<InternalLink href="/team">Team</InternalLink>,
				<InternalLink href="/karriere">Karriere</InternalLink>,
			]}
		/>
	);
};

export default CompanyLinks;
