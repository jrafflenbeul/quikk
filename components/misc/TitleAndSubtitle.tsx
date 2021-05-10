import { Grid, Description } from "@geist-ui/react";
import React from "react";
import Divider from "./Divider";
import Title from "./Title";

const TitleAndSubtitle = ({
	title,
	desc = null,
	gridProps = {},
	titleProps = {},
	dividerProps = {},
	grid = true,
}) => {
	return grid ? (
		<Grid direction="column" {...gridProps} xs={24}>
			<Title h1 caps {...titleProps}>
				{title}
			</Title>
			<Divider center={false} {...dividerProps} />
			{desc && <Description title={desc} />}
		</Grid>
	) : (
		<>
			<Title h1 caps {...titleProps}>
				{title}
			</Title>
			<Divider center={false} {...dividerProps} />
			{desc && <Description title={desc} />}
		</>
	);
};

export default TitleAndSubtitle;
