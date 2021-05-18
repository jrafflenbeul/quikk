import {
	Button,
	Grid,
	Text,
	useClickAway,
	useTheme,
	Card,
} from "@geist-ui/react";
import React, { useState, useRef } from "react";
import { Menu, X } from "@geist-ui/react-icons";
import MobileMenuWrapper from "./MobileMenuWrapper";
import CTA from "./CTA";
import {
	APPLICATION_NAME,
	HEADER_LINKS,
	HEADER_Z_INDEX,
} from "../../../constants";
import InternalLink from "../../misc/InternalLink";
import Container from "../Container";
import ThemeWrapper from "../../theme/ThemeWrapper";

const MobileNav = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const ref = useRef();
	const theme = useTheme();

	const openMenu = async () => {
		setMenuOpen(true);
	};

	const closeMenu = async () => {
		setMenuOpen(false);
	};

	const toggleMenu = () => (menuOpen ? closeMenu() : openMenu());

	useClickAway(ref, () => {
		if (menuOpen) closeMenu();
	});

	const style = {
		padding: theme.layout.gap,
	};

	return (
		<nav ref={ref}>
			<Button
				icon={menuOpen ? <X /> : <Menu />}
				auto
				onClick={toggleMenu}
				aria-label={`Menü ${menuOpen ? "schließen" : "öffnen"}`}
				ghost
			/>
			<MobileMenuWrapper visible={menuOpen}>
				<Container style={{ padding: 0, margin: 0 }}>
					<Card shadow>
						<Grid.Container style={{ height: "100%" }} gap={0}>
							<Grid
								xs={24}
								alignItems="center"
								justify="center"
								direction="column"
							>
								{Object.entries(HEADER_LINKS).map(([key, value], i) => (
									<InternalLink
										href={value}
										key={i}
										{...{ style }}
										onClick={closeMenu}
									>
										{key}
									</InternalLink>
								))}
							</Grid>
							<Grid
								xs={24}
								alignItems="center"
								justify="center"
								direction="column"
								{...{ style }}
							>
								<CTA fit={false} />
							</Grid>
						</Grid.Container>
					</Card>
				</Container>
			</MobileMenuWrapper>
		</nav>
	);
};

export default MobileNav;
