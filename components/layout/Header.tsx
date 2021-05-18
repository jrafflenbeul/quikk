import { Grid, useTheme, Card } from "@geist-ui/react";
import React from "react";
import isMobile from "../hooks/isMobile";
import Container from "./Container";
import ThemeWrapper from "../theme/ThemeWrapper";
import { HEADER_Z_INDEX } from "../../constants";
import DesktopNav from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";
import InternalLink from "../misc/InternalLink";
import quikk from "../../assets/logos/logo_dark.svg";

const Header = () => {
	const mobile = isMobile();
	const theme = useTheme();
	const logoHeightInEm = 2;

	return (
		<header
			style={{
				position: "fixed",
				top: 0,
				width: "100%",
				zIndex: HEADER_Z_INDEX,
			}}
		>
			<ThemeWrapper variant="light" style={{ background: "unset" }}>
				<Container
					style={{
						padding: `${mobile ? theme.layout.gapHalf : theme.layout.gap}`,
					}}
				>
					<Card>
						<Grid.Container
							direction="row"
							alignItems="center"
							justify="center"
						>
							<Grid xs>
								<InternalLink href="/">
									<img
										src={quikk}
										alt="QUIKK Software Logo"
										title="QUIKK Software Logo"
										style={{
											height: `${logoHeightInEm}em`,
										}}
									/>
								</InternalLink>
							</Grid>
							<Grid xs md={0} justify={"flex-end"}>
								<MobileNav />
							</Grid>
							<Grid xs={0} md justify="flex-end" alignItems="center">
								<DesktopNav />
							</Grid>
						</Grid.Container>
					</Card>
				</Container>
			</ThemeWrapper>
		</header>
	);
};

export default Header;
