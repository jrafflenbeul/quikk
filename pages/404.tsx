import { Button, Grid, Text } from "@geist-ui/react";
import React from "react";
import isMobile from "../components/hooks/isMobile";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import InternalLink from "../components/misc/InternalLink";
import TitleAndSubtitle from "../components/misc/TitleAndSubtitle";
import ThemeWrapper from "../components/theme/ThemeWrapper";
import { GRID_GAP, KONTAKT_LINK, SMALL_GAP } from "../constants";

const NotFound = () => {
	const title = "Oh nein, 404 :(";
	const desc =
		"Leider konnten wir diese Seite nicht finden, weil sie nicht (mehr) existiert.";
	const mobile = isMobile();

	return (
		<ThemeWrapper>
			<TitleAndDesc {...{ title, desc }} />
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					<TitleAndSubtitle {...{ title, desc }} />
					<Grid>
						<Grid.Container gap={SMALL_GAP} alignItems="center">
							<Grid xs={24} md>
								<InternalLink
									href={KONTAKT_LINK}
									style={{ width: mobile ? "100%" : null }}
								>
									<Button
										type="success-light"
										style={{ width: mobile ? "100%" : null }}
									>
										Uns darüber informieren
									</Button>
								</InternalLink>
							</Grid>
							<Grid xs={24} md>
								<Text
									type="secondary"
									span
									style={{ textAlign: "center", width: mobile ? "100%" : null }}
								>
									oder
								</Text>
							</Grid>
							<Grid xs={24} md>
								<InternalLink
									href="/"
									style={{ width: mobile ? "100%" : null }}
								>
									<Button
										type="secondary-light"
										style={{ width: mobile ? "100%" : null }}
									>
										Zurück zur Startseite
									</Button>
								</InternalLink>
							</Grid>
						</Grid.Container>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default NotFound;
