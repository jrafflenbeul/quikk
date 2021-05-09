import { Card, Display, Grid } from "@geist-ui/react";
import React from "react";
import InternalLink from "../misc/InternalLink";
import { MAGIC_NUMBER_42 } from "../../constants";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";

const ServiceCard = ({ title, content, icon }) => {
	return (
		<Grid xs={24} sm={12} md={8} alignItems="stretch">
			<InternalLink>
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
					}}
				>
					<Display
						caption={
							<TitleAndSubtitle
								title={title}
								titleProps={{
									h1: false,
									h3: true,
									caps: true,
									centered: true,
								}}
								dividerProps={{ center: true }}
								desc={content}
								grid={false}
							/>
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
