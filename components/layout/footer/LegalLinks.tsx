import React from "react";
import { DATENSCHUTZ_LINK, IMPRESSUM_LINK } from "../../../constants";
import InternalLink from "../../misc/InternalLink";
import Links from "./Links";

const LegalLinks = () => {
	return (
		<Links
			content={[
				<InternalLink href={IMPRESSUM_LINK}>Impressum</InternalLink>,
				<InternalLink href={DATENSCHUTZ_LINK}>Datenschutz</InternalLink>,
			]}
		/>
	);
};

export default LegalLinks;
