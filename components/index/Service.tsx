import { Grid, Text, Description, useTheme } from "@geist-ui/react";
import React, { ReactElement } from "react";
import { HALF_GRID_GAP, MAGIC_NUMBER_42 } from "../../src/constants";
import Divider from "../misc/Divider";

const Service = ({
	title,
	icon,
	content = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.",
	fullWidth = false,
}: {
	title: string;
	icon: ReactElement;
	content?: string;
	fullWidth?: boolean;
}) => {
	const theme = useTheme();
	return (
		<Grid
			xs={24}
			md={fullWidth ? 24 : 12}
			alignItems="flex-start"
			justify="flex-start"
		>
			<Grid.Container alignItems="center" justify="center">
				<Grid xs={24} direction="column">
					<Grid.Container
						gap={HALF_GRID_GAP}
						alignItems="center"
						justify="flex-end"
						direction="column"
					>
						<Grid
							alignItems="center"
							justify="flex-end"
							style={{ display: "flex" }}
						>
							{React.cloneElement(icon, { size: MAGIC_NUMBER_42 })}
						</Grid>
						<Divider />
						<Grid alignItems="center" justify="center">
							<Description
								title={
									<Text span style={{ width: "100%", textAlign: "center" }}>
										{title}
									</Text>
								}
								style={{
									textAlign: "center",
									marginBottom: theme.layout.gapHalfNegative,
								}}
							/>
						</Grid>
					</Grid.Container>
				</Grid>
				<Grid xs={24} direction="column">
					<Text style={{ textAlign: fullWidth ? "center" : null }}>
						{content}
					</Text>
				</Grid>
			</Grid.Container>
		</Grid>
	);
};

export default Service;
