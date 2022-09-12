import React from "react";
import { Planet } from "../../components/Planet";
import { Title } from "../../components/Text/Title";
import { Container } from "./styles";

interface PlanetData {
  name: string;
  description: string;
  wikiLink: string;
  id: number;
  imgSrc: [
    {
      img: string;
      imgDescription: string;
    }
  ];
}

interface Planet {
  planets: PlanetData[];
}

export const ThirdSection = ({ planets }: Planet) => {
  return (
    <Container>
      <Title fontWeight={1000} fontSize="4rem" color="#ffffff">
        There are {planets?.length} planets in our Solar System
      </Title>
      {planets.map((planet) => {
        return (
          <React.Fragment key={planet.id}>
            <Planet
              src={planet.imgSrc[0].img}
              alt={planet.imgSrc[0].imgDescription}
              description={planet.description}
              key={planet.id}
              name={planet.name}
              linkRef={planet.wikiLink}
            />
          </React.Fragment>
        );
      })}
    </Container>
  );
};
