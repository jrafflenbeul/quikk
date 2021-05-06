import { Grid, Button, useTheme } from "@geist-ui/react";
import React from "react";
import {
	CTA_TEXT,
	GRID_GAP,
	MAGIC_NUMBER_69,
	SHOP_URL,
} from "../../src/constants";
import Container from "../layout/Container";
import ExternalLink from "../misc/ExternalLink";
import ThemeWrapper from "../theme/ThemeWrapper";
import Service from "./Service";
import { ShoppingBag } from "@geist-ui/react-icons";

const ShopRef = () => {
	const theme = useTheme();
	return (
		<ThemeWrapper variant="light">
			<Container spacing>
				<Grid.Container alignItems="center" justify="center" gap={GRID_GAP}>
					<Grid
						style={{
							display: "flex",
							flexDirection: "column",
						}}
						xs={24}
						alignItems="center"
						justify="space-evenly"
					>
						<Service
							title="Mehr Entdecken"
							content="Schauen Sie sich gerne unsere Inserate auf eBay Kleinanzeigen an und kontaktieren Sie uns bei Interesse per Direktnachricht, Mail oder Telefon. Wir freuen uns auf Sie!"
							icon={<ShoppingBag />}
						/>
						<ExternalLink href={SHOP_URL}>
							<Button
								type="secondary"
								ghost
								size="large"
								style={{ textTransform: "unset" }}
							>
								{CTA_TEXT}
							</Button>
						</ExternalLink>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default ShopRef;
