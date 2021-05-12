import { Card, Description, Grid, Text, useTheme } from "@geist-ui/react";
import React from "react";
import Title from "../misc/Title";

const CarrerCard = ({ title, subtitle, content }) => {
	const theme = useTheme();
	return (
		<Grid xs={24} sm={12} md={8}>
			<Card
				style={{
					height: "100%",
					borderTop: `${theme.layout.gapQuarter} solid ${theme.palette.success}`,
				}}
			>
				<Title caps>{title}</Title>
				<Description title={subtitle} />
				<Text type="secondary" small>
					{content}
				</Text>
			</Card>
		</Grid>
	);
};

export default CarrerCard;
