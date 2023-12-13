import {
  Avatar,
  Card,
  Description,
  Grid,
  Spacer,
  Text,
  useTheme,
} from "@geist-ui/react";
import { Github, Home, Linkedin, Mail } from "@geist-ui/react-icons";
import React from "react";
import { SMALL_GAP } from "../../constants";
import ExternalLink from "../misc/ExternalLink";
import Title from "../misc/Title";

const ColleagueCard = ({
  name = "",
  mail = "",
  position = "",
  linkedin = "",
  github = "",
  homepage = "",
  avatar = "",
  bio = "",
  preview = false,
}) => {
  const theme = useTheme();
  const enteredSocials = Object.entries({
    linkedin,
    github,
    homepage,
    mail,
  })
    .map(([key, val]) => (val.length > 0 ? { [key]: val } : null))
    .filter((_) => _).length;

  const SocialWrapper = ({ children, href }) => (
    <Grid xs={24 / enteredSocials} justify="center" alignItems="center">
      <ExternalLink href={href}>{children}</ExternalLink>
    </Grid>
  );

  const Socials = () => (
    <Grid.Container gap={SMALL_GAP} alignItems="center" justify="center">
      {mail.length > 0 && (
        <SocialWrapper href={`mailto:${mail}`}>
          <Mail />
        </SocialWrapper>
      )}
      {github.length > 0 && (
        <SocialWrapper href={`https://github.com/${github}`}>
          <Github />
        </SocialWrapper>
      )}
      {linkedin.length > 0 && (
        <SocialWrapper href={`https://linkedin.com/in/${linkedin}`}>
          <Linkedin />
        </SocialWrapper>
      )}
      {homepage.length > 0 && (
        <SocialWrapper href={`https://${homepage}`}>
          <Home />
        </SocialWrapper>
      )}
    </Grid.Container>
  );

  return (
    <Grid xs={24} sm={12} md={8}>
      <Card
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderTop: `${theme.layout.gapQuarter} solid ${theme.palette.success}`,
        }}
      >
        <Grid.Container gap={SMALL_GAP}>
          <Grid xs={24} alignItems="center" justify="center" direction="column">
            <Avatar
              src={avatar}
              alt={`${name} (${position} bei QUIKK Software)`}
              isSquare
            />
            <Title caps centered>
              {name}
            </Title>
            <Description title={position} />
          </Grid>
          <Grid xs={24}>
            <Socials />
          </Grid>
          {!preview && (
            <Grid xs={24}>
              <Text type="secondary" small>
                {bio}
              </Text>
            </Grid>
          )}
        </Grid.Container>
      </Card>
    </Grid>
  );
};

export default ColleagueCard;
