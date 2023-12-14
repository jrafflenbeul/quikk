import { Grid, Image, Text, Button } from "@geist-ui/react";
import React from "react";
import { GRID_GAP } from "../../constants";
import InternalLink from "../misc/InternalLink";
import Title from "../misc/Title";
import { ChevronRight } from "@geist-ui/react-icons";
import isMobile from "../hooks/isMobile";

const Paragraph = ({
	src = "",
	title = "",
	content = "",
	revert = false,
	alt = "",
	cta = "",
	ctaHref = "",
}) => {
	const mobile = isMobile();
	alt = alt.length > 0 ? alt : title;
	const Img = () => <Image src={src} alt={alt} title={alt} />;

	return (
		<Grid.Container gap={GRID_GAP} alignItems="center" justify="center">
			<Grid xs={24} sm={revert ? 0 : 10}>
				<Img />
			</Grid>
			<Grid xs={24} sm={14} direction="column">
				<Title h2 caps>
					{title}
				</Title>
				<Text p type="secondary">
					{content}
				</Text>
				{ctaHref !== "" && cta !== "" && <InternalLink href={ctaHref} style={{width: mobile ? "100%" : null}}>
					<Button
						ghost
						style={{width: mobile ? "100%" : null}}
						auto
						iconRight={<ChevronRight/>}
					>
						{cta}
					</Button>
				</InternalLink>}
			</Grid>
			<Grid xs={0} sm={revert ? 10 : 0}>
				<Img />
			</Grid>
		</Grid.Container>
	);
};

export default Paragraph;
