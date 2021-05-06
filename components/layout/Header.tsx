import { Text, Grid, useTheme } from "@geist-ui/react";
import React from "react";
import isMobile from "../hooks/isMobile";
import Container from "./Container";
import ThemeWrapper from "../theme/ThemeWrapper";
import { MAGIC_NUMBER_99 } from "../../src/constants";
import DesktopNav from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";
import InternalLink from "../misc/InternalLink";

const Header = () => {
	const mobile = isMobile();
	const theme = useTheme();

	return (
		<header
			style={{
				position: "fixed",
				top: 0,
				width: "100%",
				zIndex: MAGIC_NUMBER_99,
				boxShadow: "rgb(0 0 0 / 10%) 0px 0px 15px 0px",
			}}
		>
			<ThemeWrapper variant="light">
				<Container
					style={{
						padding: `${theme.layout.gapHalf}`,
						paddingLeft: mobile ? theme.layout.gapHalf : 0,
						paddingRight: mobile ? theme.layout.gapHalf : 0,
					}}
					bread
				>
					<Grid.Container direction="row" alignItems="center" justify="center">
						<Grid xs md={0}>
							<MobileNav />
						</Grid>
						<Grid
							xs
							style={{ textAlign: mobile ? "center" : null }}
							justify={mobile ? "center" : null}
						>
							<InternalLink href="/">
								<Text span b>
									Watch
								</Text>
								<Text span b type="secondary">
									Trade
								</Text>
								<Text span b type="success">
									24
								</Text>
							</InternalLink>
						</Grid>
						<Grid xs md={0} />
						<Grid xs={0} md justify="flex-end" alignItems="center">
							<DesktopNav />
						</Grid>
					</Grid.Container>
				</Container>
			</ThemeWrapper>
		</header>
	);
};

export default Header;
