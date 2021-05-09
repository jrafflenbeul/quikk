import { Phone, Mail, Send } from "@geist-ui/react-icons";
import React from "react";
import Links from "./Links";
import {
	ExternalLinkWithIcon,
	InternalLinkWithIcon,
} from "../../misc/WithIconHelper";
import { EMAIL, KONTAKT_LINK, PHONE } from "../../../constants";
import { getMailToHref, getTelHref } from "../../../utils/contact";

const ContactLinks = () => {
	return (
		<Links
			content={[
				<ExternalLinkWithIcon href={getMailToHref(EMAIL)} icon={<Mail />}>
					{EMAIL}
				</ExternalLinkWithIcon>,
				<ExternalLinkWithIcon href={getTelHref(PHONE)} icon={<Phone />}>
					{PHONE}
				</ExternalLinkWithIcon>,
				<InternalLinkWithIcon href={KONTAKT_LINK} icon={<Send />}>
					Kontaktformular
				</InternalLinkWithIcon>,
			]}
		/>
	);
};

export default ContactLinks;
