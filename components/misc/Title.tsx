import { Text } from "@geist-ui/react";
import React from "react";
import isMobile from "../hooks/isMobile";

const Title = ({ children, centered = false, caps = false, ...props }) => {
	const mobile = isMobile();
	return (
		<Text
			style={{
				width: "100%",
				textAlign: centered ? "center" : "left",
				lineHeight: 1,
				margin: 0,
				overflowWrap: "break-word",
				wordWrap: "break-word",
				wordBreak: "break-word",
				hyphens: "auto",
				fontSize: mobile ? "175%" : null,
				fontWeight: caps ? "bold" : null,
			}}
			{...props}
		>
			{caps ? children.toUpperCase() : children}
		</Text>
	);
};

export default Title;
