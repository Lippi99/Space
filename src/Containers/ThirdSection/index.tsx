import React from "react";
import { Planet } from "../../components/Planet";
import { Title } from "../../components/Text/Title";
import { Container } from "./styles";

export const ThirdSection = ({ planets }: any) => {
  console.log(planets);
  return (
    <Container>
      <Title fontWeight={1000} fontSize="4rem" color="#ffffff">
        There are {planets?._count} planets in our Solar System
      </Title>
      {planets._items?.map((planet: any) => {
        return (
          <React.Fragment key={planet.id}>
            <Planet
              src={planet.imgSrc[0]?.img}
              alt={planet.imgSrc[0]?.imgDescription}
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
