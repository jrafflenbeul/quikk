import { Text, useTheme } from "@geist-ui/react";
import React from "react";
import { getNodeText } from "../../utils/leistungen";
import isMobile from "../hooks/isMobile";

const Title = ({
	children,
	centered = false,
	caps = false,
	color = false,
	...props
}) => {
	const theme = useTheme();
	const mobile = isMobile();
	const isHeading =
		props.h1 || props.h2 || props.h3 || props.h4 || props.h5 || props.h6;
	const isBig = props.h1 || props.h2;

	return (
		<Text
			style={{
				width: "100%",
				textAlign: centered ? "center" : "left",
				lineHeight: 1,
				margin: isHeading ? 0 : null,
				overflowWrap: "break-word",
				wordWrap: "break-word",
				wordBreak: "break-word",
				whiteSpace: "break-spaces",
				hyphens: "auto",
				fontSize: mobile && isHeading ? "175%" : null,
				fontWeight: caps || isBig ? "bold" : null,
				color: color ? theme.palette.foreground : null,
			}}
			{...props}
		>
			{caps ? getNodeText(children).toUpperCase() : children}
		</Text>
	);
};

export default Title;
