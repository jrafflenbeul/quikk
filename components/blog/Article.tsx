import { Card, Grid, Image, Spacer, Text } from "@geist-ui/react";
import { Calendar, Clock } from "@geist-ui/react-icons";
import React from "react";
import { GRID_GAP } from "../../constants";
import { getPreviewText, getReadingTimeInMinutes } from "../../utils/blog";
import isMobile from "../hooks/isMobile";
import AlignedUser from "../misc/AlignedUser";
import InternalLink from "../misc/InternalLink";
import Title from "../misc/Title";
import { TextWithIcon } from "../misc/WithIconHelper";

const Article = ({
	title = "",
	content = "",
	image,
	author,
	published_at = "",
	slug = "",
}) => {
	const mobile = isMobile();

	const { url } = image ?? { url: "" };
	const { name, avatar, position } = author ?? {
		name: "",
		avatar: "",
		position: "",
	};

	return (
		<Grid xs={24}>
			<InternalLink
				href={`/blog/${slug}`}
				style={{ width: "100%" }}
				width="100%"
			>
				<Card hoverable style={{ width: "100%" }} width="100%">
					<Grid.Container
						direction={mobile ? "column-reverse" : "row"}
						gap={GRID_GAP}
					>
						<Grid xs={24} sm={24} md={16} direction="column">
							<Grid.Container>
								<TextWithIcon icon={<Calendar />}>
									<Text type="secondary" small>
										{new Date(published_at).toLocaleDateString()}
									</Text>
								</TextWithIcon>
								<Spacer />
								<TextWithIcon icon={<Clock />}>
									<Text type="secondary" small>
										{getReadingTimeInMinutes(content)} min
									</Text>
								</TextWithIcon>
							</Grid.Container>
							<Spacer />
							<Title h4>{title}</Title>
							<Text p type="secondary" small>
								{getPreviewText(content)}
							</Text>
							<Spacer />
							<AlignedUser {...{ avatar, name, position }} />
						</Grid>
						<Grid xs={24} sm={24} md={8}>
							<Image alt={title} src={url} />
						</Grid>
					</Grid.Container>
				</Card>
			</InternalLink>
		</Grid>
	);
};

export default Article;
