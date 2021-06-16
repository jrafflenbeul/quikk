import { Button, Grid, Image, Text, Description } from "@geist-ui/react";
import React from "react";
import {
  GRID_GAP,
  KONTAKT_LINK,
  LEISTUNGEN_LINK,
  MAGIC_NUMBER_243,
  SMALL_GAP,
} from "../../constants";
import Container from "../layout/Container";
import InternalLink from "../misc/InternalLink";
import blob from "../../assets/backgrounds/blob.svg";
import wave from "../../assets/backgrounds/wave.svg";
import getHeaderHeightInPx from "../hooks/getHeaderHeightInPx";
import isMobile from "../hooks/isMobile";
import ThemeWrapper from "../theme/ThemeWrapper";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";
import { ChevronRight } from "@geist-ui/react-icons";

const Hero = ({
  logo,
  description = "",
  titleAndSubtitle = "",
  text = "",
  altImageText = "QUIKK Software",
  titleImageText = "QUIKK Software",
  logoBgActive = true,
}) => {
  const mobile = isMobile();

  return (
    <ThemeWrapper
      variant="light"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: `calc(100vh - ${getHeaderHeightInPx()}px)`,
        }}
      >
        <Grid.Container
          gap={GRID_GAP}
          style={{ paddingBottom: `${getHeaderHeightInPx()}px` }}
          alignItems="center"
          justify="center"
        >
          <Grid xs={24} sm={24} md={17} direction="column">
            <Description title={description} />
            <TitleAndSubtitle
              title={titleAndSubtitle}
              grid={false}
              titleProps={{ caps: false }}
            />
            <Text type="secondary" style={{ marginTop: 0 }}>
              {text}
            </Text>
            <Grid.Container gap={SMALL_GAP}>
              <Grid xs={24} sm={24} md={12}>
                <InternalLink href={KONTAKT_LINK} style={{ width: "100%" }}>
                  <Button
                    type="success-light"
                    style={{ width: "100%" }}
                    auto
                    iconRight={<ChevronRight />}
                  >
                    Kostenlos anfragen
                  </Button>
                </InternalLink>
              </Grid>
              <Grid xs={24} sm={24} md={12}>
                <InternalLink href={LEISTUNGEN_LINK} style={{ width: "100%" }}>
                  <Button
                    type="secondary-light"
                    style={{ width: "100%" }}
                    auto
                    iconRight={<ChevronRight />}
                  >
                    Unsere Leistungen
                  </Button>
                </InternalLink>
              </Grid>
            </Grid.Container>
          </Grid>
          {!mobile && (
            <Grid
              md={7}
              justify="center"
              alignItems="center"
              style={{
                backgroundImage: logoBgActive && `url(${blob})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Image
                src={logo}
                alt={altImageText}
                title={titleImageText}
                height={MAGIC_NUMBER_243}
                style={{ filter: !logoBgActive && "grayscale(1)" }}
              />
            </Grid>
          )}
        </Grid.Container>
      </Container>
    </ThemeWrapper>
  );
};

export default Hero;
