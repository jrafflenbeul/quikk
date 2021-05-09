import { Grid, Description, useTheme } from "@geist-ui/react";
import React from "react";
import Divider from "./Divider";
import Title from "./Title";

const TitleAndSubtitle = ({
	title,
	desc,
	gridProps = {},
	titleProps = {},
	dividerProps = {},
	grid = true,
}) => {
	const theme = useTheme();
	return grid ? (
		<Grid direction="column" {...gridProps} xs={24}>
			<Title h1 caps {...titleProps}>
				{title}
			</Title>
			<Divider center={false} {...dividerProps} />
			<Description title={desc} />
		</Grid>
	) : (
		<>
			<Title h1 caps {...titleProps}>
				{title}
			</Title>
			<Divider center={false} {...dividerProps} />
			<Description title={desc} />
		</>
	);
};

export default TitleAndSubtitle;
