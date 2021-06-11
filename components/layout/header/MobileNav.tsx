import {
	Button,
	Grid,
	useClickAway,
	useTheme,
	Card,
	Divider,
	Collapse,
	Text,
} from "@geist-ui/react";
import React, { useState, useRef } from "react";
import { Menu, X } from "@geist-ui/react-icons";
import MobileMenuWrapper from "./MobileMenuWrapper";
import CTA from "./CTA";
import { CLICKAWAY, HEADER_LINKS, HEADER_Z_INDEX } from "../../../constants";
import InternalLink from "../../misc/InternalLink";
import Container from "../Container";
import { services } from "../../../pages/leistungen";
import { createLeistungenHrefFromId } from "../../../utils/leistungen";

const MobileNav = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const ref = useRef();
	const theme = useTheme();

	const closeMenu = async () => {
		document.getElementById(CLICKAWAY)?.remove();
		setMenuOpen(false);
	};

	const openMenu = async () => {
		const clickaway = document.createElement("div");
		clickaway.setAttribute("id", CLICKAWAY);
		clickaway.setAttribute("style", `z-index: ${HEADER_Z_INDEX - 1}`);

		clickaway.addEventListener("click", () => console.log("xd"));

		const body = Array.from(document.getElementsByTagName("body"))[0];
		body.appendChild(clickaway);
		setMenuOpen(true);
	};

	const toggleMenu = () => (menuOpen ? closeMenu() : openMenu());

	useClickAway(ref, () => {
		if (menuOpen) {
			closeMenu();
		}
	});

	const style = {
		padding: theme.layout.gap,
	};

	return (
		<nav>
			<Button
				icon={menuOpen ? <X /> : <Menu />}
				auto
				onClick={toggleMenu}
				aria-label={`Menü ${menuOpen ? "schließen" : "öffnen"}`}
				ghost
			/>
			<MobileMenuWrapper visible={menuOpen} {...{ menuOpen, closeMenu }}>
				<Container style={{ padding: 0, margin: 0 }}>
					<div ref={ref}>
						<Card shadow hoverable={false}>
							<Grid.Container style={{ height: "100%" }} gap={0}>
								<Grid
									xs={24}
									alignItems="center"
									justify="center"
									direction="column"
								>
									<Collapse.Group accordion>
										{Object.entries(HEADER_LINKS).map(([key, value], i) =>
											key !== "Leistungen" ? (
												<>
													{i > 0 && <Divider y={0} />}
													<InternalLink
														href={value}
														key={i}
														{...{ style }}
														onClick={closeMenu}
														style={{
															width: "100%",
															padding: `${theme.layout.gap} 0`,
														}}
													>
														<Text h4 style={{ margin: 0, fontWeight: 500 }}>
															{key}
														</Text>
													</InternalLink>
												</>
											) : (
												<Collapse
													// @ts-ignore
													title={
														<Text h4 style={{ margin: 0, fontWeight: 500 }}>
															{key}
														</Text>
													}
												>
													{[
														{ title: "Alle Leistungen", id: null },
														...services,
													].map((service, j) => (
														<Text key={j} small p>
															<InternalLink
																href={createLeistungenHrefFromId(service.id)}
																onClick={closeMenu}
															>
																{service.title}
															</InternalLink>
														</Text>
													))}
												</Collapse>
											),
										)}
									</Collapse.Group>
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
					</div>
				</Container>
			</MobileMenuWrapper>
		</nav>
	);
};

export default MobileNav;
