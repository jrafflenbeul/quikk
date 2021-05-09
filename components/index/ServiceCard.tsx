import {
	Card,
	Description,
	Display,
	Grid,
	Text,
	useTheme,
} from "@geist-ui/react";
import React from "react";
import InternalLink from "../misc/InternalLink";
import Divider from "../misc/Divider";
import { MAGIC_NUMBER_42 } from "../../constants";

const ServiceCard = ({ title, content, icon }) => {
	const theme = useTheme();
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
							<Description
								title={
									<Text
										h3
										style={{
											textAlign: "center",
											width: "100%",
											color: theme.palette.foreground,
											fontWeight: "bold",
										}}
									>
										{title}
									</Text>
								}
								content={
									<>
										<Divider />
										<Text
											p
											small={false}
											style={{ fontWeight: "normal" }}
											type="secondary"
										>
											{content}
										</Text>
									</>
								}
								style={{
									textAlign: "center",
									justifyContent: "center",
									alignItems: "center",
								}}
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
