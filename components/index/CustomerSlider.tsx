import React from "react";
import { Grid, Image, useTheme, Card, Text } from "@geist-ui/react";
import Container from "../layout/Container";
import {
	GRID_GAP,
	MAGIC_NUMBER_243,
	MAGIC_NUMBER_24_3,
	MAGIC_NUMBER_42,
	MAGIC_NUMBER_99,
} from "../../constants";
import Title from "../misc/Title";
import ThemeWrapper from "../theme/ThemeWrapper";
import Carousel from "react-multi-carousel";
import isMobile from "../hooks/isMobile";
import { ChevronLeft, ChevronRight } from "@geist-ui/react-icons";
import ExternalLink from "../misc/ExternalLink";

const CustomerSlider = ({ customers }) => {
	const theme = useTheme();
	const mobile = isMobile();
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	const CustomArrow = ({
		onClick,
		dir,
	}: {
		onClick?: any;
		dir: "left" | "right";
	}) => {
		return (
			<button
				onClick={() => onClick()}
				className={`react-multiple-carousel__arrow react-multiple-carousel__arrow--${dir} jsx-3585542286 btn`}
				type="button"
				style={{
					position: "absolute",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					zIndex: 10,
					[dir]: mobile ? 0 : theme.layout.gap,
				}}
			>
				{dir === "left" ? <ChevronLeft /> : <ChevronRight />}
			</button>
		);
	};

	return (
		<ThemeWrapper>
			<Container spacing>
				<Grid.Container gap={GRID_GAP}>
					<Grid xs={24}>
						<Title h2 centered caps>
							Unsere Kunden
						</Title>
					</Grid>
					<Grid xs={24} alignItems="center" justify="center">
						<Carousel
							responsive={responsive}
							partialVisible={false}
							ssr
							infinite
							deviceType={mobile ? "mobile" : "desktop"}
							centerMode={!mobile}
							customLeftArrow={<CustomArrow dir="left" />}
							customRightArrow={<CustomArrow dir="right" />}
							autoPlay={!mobile}
							autoPlaySpeed={MAGIC_NUMBER_243 * MAGIC_NUMBER_24_3}
							arrows={!mobile}
						>
							{[...customers, ...customers, ...customers].map(
								({ name, desc, url, image: { url: imageUrl } }, i) => {
									return (
										<ExternalLink key={i} href={url}>
											<Image
												src={imageUrl}
												alt={`${name} (${desc}) - QUIKK Software Kunde`}
												title={name}
												height={MAGIC_NUMBER_99}
											/>
										</ExternalLink>
									);
								},
							)}
						</Carousel>
					</Grid>
				</Grid.Container>
			</Container>
		</ThemeWrapper>
	);
};

export default CustomerSlider;
