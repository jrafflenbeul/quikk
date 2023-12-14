import { Text, Grid, Description, Divider, Button } from "@geist-ui/react";
import React from "react";
import {
	APPLICATION_NAME,
	DATENSCHUTZ_LINK,
	EMAIL,
	GRID_GAP,
	IMPRESSUM_LINK,
	KONTAKT_LINK,
	MAGIC_NUMBER_42,
	PHONE,
	SEPARATOR,
	SMALL_GAP,
	SOCIAL,
	SOCIAL_LINKS,
} from "../../constants";
import ThemeWrapper from "../theme/ThemeWrapper";
import LocationLinks from "./footer/LocationLinks";
import CompanyLinks from "./footer/CompanyLinks";
import Container from "./Container";
import isMobile from "../hooks/isMobile";
import InternalLink from "../misc/InternalLink";
import { excludePathnamesForContactRef } from "../misc/ContactRef";
import { useRouter } from "next/router";
import Title from "../misc/Title";
import { getMailToHref, getTelHref } from "../../utils/kontakt";
import ExternalLink from "../misc/ExternalLink";
import QUIKKDivider from "../misc/Divider";
import { Github, Instagram, Linkedin, Twitter } from "@geist-ui/react-icons";
import ServiceLinks from "./footer/ServiceLinks";
import q from "../../assets/logos/logo_dark_q.svg";

const Footer = () => {
	const mobile = isMobile();
	const router = useRouter();

	const displayContactRef = excludePathnamesForContactRef.every(
		(pathname) => pathname !== router.pathname,
	);

	const getIconForSocial = (social: SOCIAL) => {
		switch (social) {
			case "Github":
				return <Github />;
			case "Instagram":
				return <Instagram />;
			case "Linkedin":
				return <Linkedin />;
			case "Twitter":
				return <Twitter />;
			default:
				break;
		}
	};

	return (
		<footer>
			<ThemeWrapper variant="light">
				{/* @ts-ignore */}
				{!displayContactRef && <Divider y={0} />}
				<Container spacing>
					<Grid.Container gap={GRID_GAP} justify="space-between">
						<Grid direction="column" alignItems="stretch" justify="flex-start">
							<img
								src={q}
								style={{ width: `${MAGIC_NUMBER_42}px` }}
								title={APPLICATION_NAME}
								alt={APPLICATION_NAME}
							/>
							<QUIKKDivider center={false} />
							<Text small span>
								Schreiben Sie uns eine E-Mail an
								<Title h3>
									<ExternalLink href={getMailToHref(EMAIL)}>
										{EMAIL}
									</ExternalLink>
								</Title>
								oder nutzen Sie{" "}
								<Text b span>
									<InternalLink href={KONTAKT_LINK}>
										unser Kontaktformular
									</InternalLink>
								</Text>
								.
								<Text p>
									Sie erreichen uns auch unter{" "}
									<Text b>
										<ExternalLink href={PHONE}>
											Microsoft Teams
										</ExternalLink>
									</Text>
									.
								</Text>
							</Text>
						</Grid>
						<Grid>
							<Grid.Container gap={GRID_GAP}>
								<Grid direction="column">
									<Description
										{...{ title: "Unser Standort", content: <LocationLinks /> }}
									/>
								</Grid>
								<Grid direction="column">
									<Description
										{...{ title: "Unternehmen", content: <CompanyLinks /> }}
									/>
								</Grid>
								<Grid direction="column">
									<Description
										{...{ title: "Leistungen", content: <ServiceLinks /> }}
									/>
								</Grid>
							</Grid.Container>
						</Grid>
						<Grid xs={24}>
							<Grid.Container
								gap={GRID_GAP}
								alignItems="center"
								justify="space-between"
							>
								<Grid
									direction="column"
									alignItems="flex-start"
									justify="flex-start"
								>
									<Title h3 caps>
										Software&shy;entwicklung
									</Title>
									<Text span>individuell für Mobile, Desktop und Web.</Text>
								</Grid>
								<Grid direction="row">
									<Grid.Container gap={SMALL_GAP}>
										{Object.entries(SOCIAL_LINKS).map(([key, value], i) => (
											<Grid key={i}>
												<ExternalLink href={value}>
													<Button
														// @ts-ignore
														icon={getIconForSocial(key)}
														auto
														type="secondary-light"
													/>
												</ExternalLink>
											</Grid>
										))}
									</Grid.Container>
								</Grid>
							</Grid.Container>
						</Grid>
					</Grid.Container>
				</Container>
				<Container>
					{/* @ts-ignore */}
					<Divider y={0} />
					<Grid.Container
						direction={mobile ? "column-reverse" : "row"}
						alignItems={mobile ? "center" : null}
					>
						<Grid
							xs={24}
							md={12}
							alignItems="center"
							justify={mobile ? null : "flex-start"}
						>
							<Text
								p
								type="secondary"
								small
								style={{ marginTop: mobile ? 0 : null }}
							>
								© {new Date().getFullYear()} {APPLICATION_NAME}
							</Text>
						</Grid>
						<Grid
							alignItems="center"
							justify={mobile ? null : "flex-end"}
							xs={24}
							md={12}
						>
							<Text>
								<InternalLink href={IMPRESSUM_LINK}>
									<Text type="secondary" small>
										Impressum
									</Text>
								</InternalLink>
								<Text small style={{ color: "#eaeaea" }}>
									{` ${SEPARATOR} `}
								</Text>
								<InternalLink href={DATENSCHUTZ_LINK}>
									<Text type="secondary" small>
										Datenschutz
									</Text>
								</InternalLink>
							</Text>
						</Grid>
					</Grid.Container>
				</Container>
			</ThemeWrapper>
		</footer>
	);
};

export default Footer;
