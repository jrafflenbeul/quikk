import { Avatar, Card, Grid, Text, Spacer } from "@geist-ui/react";
import React from "react";
import ThemeWrapper from "../theme/ThemeWrapper";
import philip from "../../assets/images/philip_weidich.jpeg";
import { FOUNDER, GRID_GAP, MAGIC_NUMBER_243 } from "../../src/constants";
import Container from "../layout/Container";

const Founder = () => {
	return (
		<ThemeWrapper variant="light">
			<Container spacing>
				<Card>
					<Grid.Container gap={GRID_GAP}>
						<Grid xs alignItems="center" justify="center">
							<Avatar
								src={philip}
								size={MAGIC_NUMBER_243}
								alt={FOUNDER}
								title={FOUNDER}
							/>
						</Grid>
						<Grid xs={24} lg={16} alignItems="center" justify="center">
							<Grid.Container gap={GRID_GAP}>
								<Grid xs={24} direction="column">
									<Text i>
										„Vor allem der Kauf von gebrauchten Armbanduhren kann online
										mit einigen Risiken verbunden sein. Deswegen streben wir
										nach größtmöglicher Transparenz und geben unser Bestes, um
										eine reibungslose Abwicklung zu garantieren.“
									</Text>
									<Spacer />
									<Text b>
										- {FOUNDER} <Text small>(Inhaber)</Text>
									</Text>
								</Grid>
							</Grid.Container>
						</Grid>
					</Grid.Container>
				</Card>
			</Container>
		</ThemeWrapper>
	);
};

export default Founder;
