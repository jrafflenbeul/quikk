import { Text } from "@geist-ui/react";
import React from "react";

const Links = ({ content }) => {
	return (
		<>
			{content.map((_, i) => (
				<Text key={i}>{_}</Text>
			))}
		</>
	);
};

export default Links;
