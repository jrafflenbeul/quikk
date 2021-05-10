import React from "react";
import { Grid, Text } from "@geist-ui/react";
import { breakpoints } from "../../constants";
import Container from "../layout/Container";

import TitleAndSubtitle from "../misc/TitleAndSubtitle";

const Mission = () => {
	return (
		<Container spacing>
			<Grid.Container justify="center">
				<TitleAndSubtitle
					titleProps={{ h1: false, h2: true, caps: true }}
					gridProps={{ ...breakpoints }}
					title="Unser Versprechen"
					desc="Für eine optimale Zusammenarbeit."
				/>
				<Grid {...breakpoints} direction="column">
					<Text type="secondary" p>
						Wir lassen Sie nicht im Regen stehen und packen da an, wo es
						knifflig wird. In 2-wöchigen Sprints entwickeln wir inkrementelle
						Zwischenversionen Ihrer Lösung und binden Sie aktiv in die
						Mitgestaltung ein. So können wir Ihr Feedback optimal umsetzen und
						dabei gleichzeitig völlig transparent und flexbiel agieren. Nach
						Projektabschluss erhalten Sie selbstverständlich eine Einweisung in
						die Nutzung und den dokumentierten Code.
					</Text>
				</Grid>
			</Grid.Container>
		</Container>
	);
};

export default Mission;
