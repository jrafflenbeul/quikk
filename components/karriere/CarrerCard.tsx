import { Card, Description, Grid, Text } from "@geist-ui/react";
import React from "react";
import Title from "../misc/Title";

const CarrerCard = ({ title, subtitle, content }) => {
	return (
		<Grid xs={24} sm={12} md={8}>
			<Card style={{ height: "100%" }}>
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
