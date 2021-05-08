import { Github, Instagram, Linkedin, Twitter } from "@geist-ui/react-icons";
import React from "react";
import { ExternalLinkWithIcon } from "../../misc/WithIconHelper";
import Links from "./Links";

const SocialLinks = () => {
	return (
		<Links
			content={[
				<ExternalLinkWithIcon
					href="https://linkedin.com/company/quikk-software"
					icon={<Linkedin />}
				>
					LinkedIn
				</ExternalLinkWithIcon>,
				<ExternalLinkWithIcon
					href="https://github.com/quikk-software"
					icon={<Github />}
				>
					GitHub
				</ExternalLinkWithIcon>,
				<ExternalLinkWithIcon
					href="https://twitter.com/quikk_software"
					icon={<Twitter />}
				>
					Twitter
				</ExternalLinkWithIcon>,
				<ExternalLinkWithIcon
					href="https://instagram.com/quikk_software"
					icon={<Instagram />}
				>
					Instagram
				</ExternalLinkWithIcon>,
			]}
		/>
	);
};

export default SocialLinks;
