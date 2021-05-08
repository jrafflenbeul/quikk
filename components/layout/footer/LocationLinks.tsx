import React from "react";
import ExternalLink from "../../misc/ExternalLink";
import Links from "./Links";

const LocationLinks = () => {
	return (
		<Links
			content={["Hahler Straße 285", "32427 Minden", "Deutschland"].map(
				(link, i) => (
					<ExternalLink href="https://g.page/quikk?share" key={i}>
						{link}
					</ExternalLink>
				),
			)}
		/>
	);
};

export default LocationLinks;
