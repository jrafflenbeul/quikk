import React from "react";
import { ExternalLink as ExternalLinkIcon } from "@geist-ui/react-icons";
import { Link } from "@geist-ui/react";

const ExternalLink = ({ href = "", children, icon = false, ...rest }) => {
	return (
		<Link href={href} {...rest} target="_blank" rel="noopener noreferrer">
			{children} {icon && <ExternalLinkIcon />}
		</Link>
	);
};

export default ExternalLink;
