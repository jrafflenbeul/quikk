import { Grid, Image } from "@geist-ui/react";
import React from "react";
import Paragraph from "../misc/Paragraph";

const IntroductionSection = ({
	src = "",
	title = "",
	content = "",
	revert = false,
	alt = "",
	cta = "",
	ctaHref = "",
}) => {
	alt = alt.length > 0 ? alt : title;

	return (
		<Grid>
			<Paragraph {...{ src, title, content, revert, alt, cta, ctaHref }} />
		</Grid>
	);
};

export default IntroductionSection;
