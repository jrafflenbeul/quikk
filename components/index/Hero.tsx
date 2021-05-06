import React from "react";
import { Button, Text, Description, Grid, useTheme } from "@geist-ui/react";
import getHeaderHeightInPx from "../../components/hooks/getHeaderHeightInPx";
import Container from "../../components/layout/Container";
import ExternalLink from "../misc/ExternalLink";
import {
	APPLICATION_NAME,
	CTA_TEXT,
	MAGIC_NUMBER_69,
	SHOP_URL,
} from "../../src/constants";
import ThemeWrapper from "../theme/ThemeWrapper";
import Divider from "../misc/Divider";

const Hero = () => {
	const theme = useTheme();
	return (
		<ThemeWrapper variant="dark">
			<div
				style={{
					background: `
					linear-gradient(
						rgba(0, 0, 0, 0.75), 
						rgba(0, 0, 0, 0.95)
					), 
					url('/seiko_5_caseback.jpg')`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Container>
					<Grid.Container
						style={{
							height: `calc(100vh - ${getHeaderHeightInPx()}px)`,
						}}
						alignItems="center"
						justify="center"
					>
						<Grid
							style={{
								paddingBottom: `${getHeaderHeightInPx()}px`,
								maxWidth: `${MAGIC_NUMBER_69}0px`,
								display: "flex",
								flexDirection: "column",
							}}
							alignItems="center"
							justify="space-evenly"
						>
							<Description
								style={{ marginBottom: theme.layout.gap }}
								title={
									<Text
										h2
										b
										style={{
											width: "100%",
											textAlign: "center",
											fontSize: "1rem",
										}}
									>
										{APPLICATION_NAME}
									</Text>
								}
								content={
									<>
										<Divider />
										<Text style={{ textAlign: "center", lineHeight: 1 }} h1>
											Uhren sicher und einfach online kaufen
										</Text>
									</>
								}
							/>
							<ExternalLink href={SHOP_URL}>
								<Button
									type="secondary"
									ghost
									size="large"
									style={{ textTransform: "unset" }}
								>
									{CTA_TEXT}
								</Button>
							</ExternalLink>
						</Grid>
					</Grid.Container>
				</Container>
			</div>
		</ThemeWrapper>
	);
};

export default Hero;
