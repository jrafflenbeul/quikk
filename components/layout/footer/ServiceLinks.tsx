import React from "react";
import { services } from "../../../pages/leistungen";
import { createLeistungenHrefFromId } from "../../../utils/leistungen";
import InternalLink from "../../misc/InternalLink";
import Links from "./Links";

const ServiceLinks = () => {
	return (
		<Links
			content={services.map((service, i) => (
				<InternalLink href={createLeistungenHrefFromId(service.id)} key={i}>
					{service.title}
				</InternalLink>
			))}
		/>
	);
};

export default ServiceLinks;
