import { Spacer } from "@geist-ui/react";
import React from "react";
import { MAGIC_NUMBER_0_243 } from "../../constants";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";

const style = {
	inline: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
};

const WithIcon = ({ icon, children }) => {
	return (
		<>
			{React.cloneElement(icon, { size: ".8em" })}
			{/* @ts-ignore */}
			<Spacer x={MAGIC_NUMBER_0_243} y={0} />
			{children}
		</>
	);
};

export const ExternalLinkWithIcon = ({ href = "", icon, children }) => (
	<ExternalLink href={href} style={style.inline}>
		<WithIcon icon={icon}>{children}</WithIcon>
	</ExternalLink>
);

export const InternalLinkWithIcon = ({ href = "", icon, children }) => (
	<InternalLink href={href} style={style.inline}>
		<WithIcon icon={icon}>{children}</WithIcon>
	</InternalLink>
);

export const TextWithIcon = ({ icon, children }) => (
	<span style={style.inline}>
		<WithIcon icon={icon}>{children}</WithIcon>
	</span>
);
