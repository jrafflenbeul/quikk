import React from "react";
import { Grid, Text, Collapse } from "@geist-ui/react";
import { breakpoints, breakpoints_fill, GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";
import ThemeWrapper from "../theme/ThemeWrapper";

const Use = ({ service }) => {
	const { title, use } = service;
	return (
		<ThemeWrapper>
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					<TitleAndSubtitle
						title="Use Cases"
						desc={`Einsatzgebiete für ${title}.`}
						titleProps={{ breakpoints, h1: false, h2: true }}
						gridProps={{ ...breakpoints_fill }}
					/>

					<Grid {...breakpoints}>
						<Collapse.Group>
							{use.map(({ title, content }, i) => (
								<Collapse title={title} key={i} initialVisible={i === 0}>
									<Text type="secondary">{content}</Text>
								</Collapse>
							))}
						</Collapse.Group>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default Use;
