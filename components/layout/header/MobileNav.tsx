import { Button, Grid, Text, useClickAway, useTheme } from "@geist-ui/react";
import React, { useState, useRef } from "react";
import { Menu, X } from "@geist-ui/react-icons";
import MobileMenuWrapper from "./MobileMenuWrapper";
import CTA from "./CTA";
import { APPLICATION_NAME, HEADER_LINKS } from "../../../constants";
import InternalLink from "../../misc/InternalLink";

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

	return (
		<nav ref={ref}>
			<Button
				icon={menuOpen ? <X /> : <Menu />}
				auto
				onClick={toggleMenu}
				aria-label={`Menü ${menuOpen ? "schließen" : "öffnen"}`}
				type="success-light"
			/>
			<MobileMenuWrapper visible={menuOpen}>
				<Grid.Container style={{ height: "100%" }} gap={0}>
					<Grid xs={24} alignItems="center" justify="center" direction="column">
						{Object.entries(HEADER_LINKS).map(([key, value], i) => (
							<InternalLink
								href={value}
								key={i}
								style={{
									padding: theme.layout.gap,
								}}
								onClick={closeMenu}
							>
								{key}
							</InternalLink>
						))}
					</Grid>
					<Grid
						xs={24}
						alignItems="center"
						justify="flex-end"
						direction="column"
					>
						<CTA fit={false} />
						<Text p type="secondary" small>
							© {new Date().getFullYear()} {APPLICATION_NAME}
						</Text>
					</Grid>
				</Grid.Container>
			</MobileMenuWrapper>
		</nav>
	);
};

export default MobileNav;
