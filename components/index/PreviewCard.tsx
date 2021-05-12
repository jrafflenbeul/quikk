import { Card, Image, Text, useTheme } from "@geist-ui/react";
import React from "react";
import { SEPARATOR } from "../../constants";
import { getPreviewText, getReadingTimeInMinutes } from "../../utils/blog";
import AlignedUser from "../misc/AlignedUser";
import InternalLink from "../misc/InternalLink";

const PreviewCard = ({
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
	const theme = useTheme();
	return (
		<InternalLink href={`${type}${isBlog ? "/" : "#"}${slug}`}>
			<Card
				hoverable
				style={{
					borderTop: `${theme.layout.gapQuarter} solid ${theme.palette.success}`,
					height: "100%",
				}}
			>
				<Image
					src={image.url}
					style={{ objectFit: "cover" }}
					alt={title}
					title={title}
				/>
				<Text h3>{title}</Text>
				<Text type="secondary" small>
					{getPreviewText(content)}
				</Text>
				{isBlog && (
					<Text>
						<AlignedUser
							{...{
								avatar: author.avatar,
								name: author.name,
								position: `${new Date(
									updatedAt,
								).toLocaleDateString()} ${SEPARATOR} ${getReadingTimeInMinutes(
									content,
								)} min`,
							}}
						/>
					</Text>
				)}
			</Card>
		</InternalLink>
	);
};

export default PreviewCard;
