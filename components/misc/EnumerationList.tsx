import { Grid, Text } from "@geist-ui/react";
import React from "react";

const EnumerationList = ({ _ }) => {
	return (
		<Grid
			xs={24}
			sm={24}
			md={12}
			lg={8}
			xl={8}
			direction="column"
			justify="flex-start"
			alignItems="flex-start"
		>
			<Text h4>
				{React.cloneElement(_.icon, { size: "1rem" })} {_.title}
			</Text>
			<ul>
				{_.content.map((__, i) => (
					<li key={i}>
						<Text style={{ margin: 0 }} type="secondary">
							{__}
						</Text>
					</li>
				))}
			</ul>
		</Grid>
	);
};

export default EnumerationList;
