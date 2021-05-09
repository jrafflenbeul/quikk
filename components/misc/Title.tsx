import { Text, useTheme } from "@geist-ui/react";
import React from "react";
import isMobile from "../hooks/isMobile";

const Title = ({
	children,
	centered = false,
	caps = false,
	split = true,
	...props
}) => {
	const theme = useTheme();
	const mobile = isMobile();
	const isHeading =
		props.h1 || props.h2 || props.h3 || props.h4 || props.h5 || props.h6;
	return (
		<Text
			style={{
				width: "100%",
				textAlign: centered ? "center" : "left",
				lineHeight: 1,
				margin: isHeading ? 0 : null,
				overflowWrap: "break-word",
				wordWrap: split ? "break-word" : null,
				wordBreak: split ? "break-word" : null,
				whiteSpace: split ? "break-spaces" : null,
				hyphens: "auto",
				fontSize: mobile && isHeading ? "175%" : null,
				fontWeight: caps ? "bold" : null,
				color: theme.palette.foreground,
			}}
			{...props}
		>
			{caps ? children.toUpperCase() : children}
		</Text>
	);
};

export default Title;
