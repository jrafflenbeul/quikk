import { Card, Display, Grid, Text, Button, useTheme } from "@geist-ui/react";
import React from "react";
import InternalLink from "../misc/InternalLink";
import { MAGIC_NUMBER_42 } from "../../constants";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";
import { createLeistungenHrefFromId } from "../../utils/leistungen";

const ServiceCard = ({ title, content, icon, id = null }) => {
	const theme = useTheme();
	return (
		<Grid xs={24} sm={12} md={8} alignItems="stretch">
			<InternalLink href={createLeistungenHrefFromId(id)}>
				<Card
					hoverable
					shadow
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderTop: `${theme.layout.gapQuarter} solid ${theme.palette.success}`,
					}}
				>
					<Display
						caption={
							<>
								<TitleAndSubtitle
									title={title}
									titleProps={{
										h1: false,
										h3: true,
										caps: true,
										centered: true,
										color: true,
									}}
									dividerProps={{ center: true }}
									grid={false}
									divider={false}
								/>
								<Text type="secondary" style={{ marginBottom: 0 }}>
									{content}
								</Text>
							</>
						}
					>
						{React.cloneElement(icon, {
							size: MAGIC_NUMBER_42,
						})}
					</Display>
				</Card>
			</InternalLink>
		</Grid>
	);
};

export default ServiceCard;
