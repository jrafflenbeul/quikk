import { Grid } from "@geist-ui/react";
import React from "react";
import { GRID_GAP } from "../../constants";
import Container from "../layout/Container";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";
import ThemeWrapper from "../theme/ThemeWrapper";
import ColleagueCard from "./ColleagueCard";

const ColleaguePreview = ({ colleagues }) => {
  return (
    <ThemeWrapper variant="light">
      <Container spacing>
        <Grid.Container gap={GRID_GAP}>
          <TitleAndSubtitle
            title="Wer wir sind"
            desc="Wir freuen uns darauf, Sie kennenzulernen!"
            titleProps={{ h1: false, h2: true }}
          />
          {colleagues.map((colleague, i) => (
            <ColleagueCard key={i} {...colleague} preview />
          ))}
        </Grid.Container>
      </Container>
    </ThemeWrapper>
  );
};

export default ColleaguePreview;
