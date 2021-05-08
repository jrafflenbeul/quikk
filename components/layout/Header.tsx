import { Text, Grid, useTheme, Image } from "@geist-ui/react";
import React from "react";
import isMobile from "../hooks/isMobile";
import Container from "./Container";
import ThemeWrapper from "../theme/ThemeWrapper";
import { MAGIC_NUMBER_99 } from "../../constants";
import DesktopNav from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";
import InternalLink from "../misc/InternalLink";
import quikk from "../../assets/logos/logo_light_quikk_only.svg";

const Header = ({ menuLeft = true }: { menuLeft?: boolean }) => {
	const mobile = isMobile();
	const theme = useTheme();
	const logoHeightInEm = mobile ? 2 : 1.5;

	return (
		<header
			style={{
				position: "fixed",
				top: 0,
				width: "100%",
				zIndex: MAGIC_NUMBER_99,
			}}
		>
			<ThemeWrapper variant="dark">
				<Container
					style={{
						padding: `${theme.layout.gapHalf} 0`,
					}}
				>
					<Grid.Container direction="row" alignItems="center" justify="center">
						<Grid xs md={0}>
							{menuLeft && <MobileNav />}
						</Grid>
						<Grid
							xs
							style={{ textAlign: mobile ? "center" : null }}
							justify={mobile ? "center" : null}
						>
							<InternalLink href="/">
								<img
									src={quikk}
									alt="QUIKK Software Logo"
									title="QUIKK Software Logo"
									style={{
										height: `${logoHeightInEm}em`,
										marginTop: `${logoHeightInEm / 6}em`,
									}}
								/>
							</InternalLink>
						</Grid>
						<Grid xs md={0} justify={menuLeft ? null : "flex-end"}>
							{!menuLeft && <MobileNav />}
						</Grid>
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
