import { Card, Image, Text, Grid, Button, useTheme } from "@geist-ui/react";
import { ChevronRight } from "@geist-ui/react-icons";
import React from "react";
import { GRID_GAP } from "../../constants";
import { getPreviewText } from "../../utils/blog";
import isMobile from "../hooks/isMobile";
import InternalLink from "../misc/InternalLink";
import PreviewCard from "./PreviewCard";

const Preview = ({
	title = "Lorem",
	content = "Ipsum",
	image = { url: "" },
	type = "blog",
	slug = "",
	author = { name: "", avatar: "" },
	updatedAt = "",
}: {
	title: string;
	content: string;
	image: { url: string };
	type: "blog" | "projekte";
	slug: string;
	author?: { name: string; avatar: string };
	updatedAt?: string;
}) => {
	const isBlog = type === "blog";
	const mobile = isMobile();
	return (
		<Grid.Container gap={GRID_GAP} style={{ height: "100%" }}>
			<Grid xs={24} style={{ height: "100%" }}>
				<PreviewCard
					{...{ title, content, image, type, slug, author, updatedAt }}
				/>
			</Grid>
			<Grid
				xs={24}
				justify="center"
				alignItems="center"
				style={{ height: "100%" }}
			>
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
