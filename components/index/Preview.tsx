import { Card, Image, Text, Grid, Button } from "@geist-ui/react";
import { ChevronRight } from "@geist-ui/react-icons";
import React from "react";
import { GRID_GAP } from "../../constants";
import { getPreviewText } from "../../utils/blog";
import isMobile from "../hooks/isMobile";
import InternalLink from "../misc/InternalLink";

const Preview = ({
	title = "Lorem",
	content = "Ipsum",
	image = { url: "" },
	type = "blog",
	slug = "",
}: {
	title: string;
	content: string;
	image: { url: string };
	type: "blog" | "projekte";
	slug: string;
}) => {
	const isBlog = type === "blog";
	const mobile = isMobile();
	return (
		<Grid.Container gap={GRID_GAP}>
			<Grid xs={24}>
				<InternalLink href={`${type}${isBlog ? "/" : "#"}${slug}`}>
					<Card hoverable>
						<Image src={image.url} style={{ objectFit: "cover" }} alt={title} />
						<Text h3>{title}</Text>
						<Text type="secondary" small>
							{getPreviewText(content)}
						</Text>
					</Card>
				</InternalLink>
			</Grid>
			<Grid xs={24} justify="center" alignItems="center">
				<InternalLink
					href={isBlog ? "/blog" : "/projekte"}
					style={{ width: mobile ? "100%" : null }}
				>
					<Button ghost style={{ width: mobile ? "100%" : null }}>
						{`Alle ${isBlog ? "Beiträge" : "Projekte"} ansehen`}{" "}
						<ChevronRight />
					</Button>
				</InternalLink>
			</Grid>
		</Grid.Container>
	);
};

export default Preview;
