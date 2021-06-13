import { Button, Grid, Text, useTheme } from "@geist-ui/react";
import { ChevronRight } from "@geist-ui/react-icons";
import { useRouter } from "next/router";
import React from "react";
import {
	DATENSCHUTZ_LINK,
	IMPRESSUM_LINK,
	KONTAKT_LINK,
	LARGE_GAP,
} from "../../constants";
import isMobile from "../hooks/isMobile";
import Container from "../layout/Container";
import ThemeWrapper from "../theme/ThemeWrapper";
import InternalLink from "./InternalLink";
import Title from "./Title";

export const excludePathnamesForContactRef = [
	KONTAKT_LINK,
	IMPRESSUM_LINK,
	DATENSCHUTZ_LINK,
];

const ContactRef = () => {
	const router = useRouter();
	const theme = useTheme();
	const mobile = isMobile();

	const displayContactRef = excludePathnamesForContactRef.every(
		(pathname) => pathname !== router.pathname,
	);

	const Cta = () => (
		<InternalLink href={KONTAKT_LINK} style={{ width: mobile ? "100%" : null }}>
			<Button
				type="success-light"
				style={{ width: mobile ? "100%" : null }}
				auto
				iconRight={<ChevronRight />}
			>
				Kontakt aufnehmen
			</Button>
		</InternalLink>
	);

	return (
		displayContactRef && (
			<ThemeWrapper
				style={{
					background: theme.palette.accents_8,
					border: `1px solid ${theme.palette.accents_7}`,
					borderWidth: "1px 0",
				}}
			>
				<Container spacing>
					<Grid.Container gap={LARGE_GAP} alignItems="center" justify="center">
						<Grid
							xs={24}
							sm={24}
							md={16}
							alignItems="center"
							justify="center"
							direction="column"
						>
							<Title h2>
								Entdecken Sie die Vorteile&shy; unserer Individual&shy;entwicklung
							</Title>
							<Text
								type="secondary"
								p
								style={{ marginBottom: mobile ? null : 0, width: "100%" }}
							>
								In einem kostenlosen Erstgespräch vor Ort - wahlweise auch am
								Telefon oder über Microsoft Teams - lernen wir uns unverbindlich
								kennen und erarbeiten gemeinsam mit Ihnen ein Lösungskonzept für
								Ihre Ziele. Wir freuen uns auf Sie!
							</Text>
							{mobile && <Cta />}
						</Grid>
						{!mobile && (
							<Grid xs={24} sm={24} md alignItems="center" justify="center">
								<Cta />
							</Grid>
						)}
					</Grid.Container>
				</Container>
			</ThemeWrapper>
		)
	);
};

export default ContactRef;
