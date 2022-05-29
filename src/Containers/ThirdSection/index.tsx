import React from "react";
import { ButtonCheck } from "../../components/Button";
import { Planet } from "../../components/Planet";
import { Title } from "../../components/Text/Title";
import { Container } from "./styles";

export const ThirdSection = ({ planets }: any) => {
  return (
    <Container>
      <Title fontWeight={1000} fontSize="4rem" color="#ffffff">
        Existem {planets?._count} planetas em nosso sistema solar
      </Title>
      {planets._items?.map((planet: any) => {
        return (
          <React.Fragment key={planet.id}>
            <Planet
              src={planet.imgSrc[0]?.img}
              alt={planet.imgSrc[1]?.imgDescription}
              description={planet.description}
              key={planet.id}
              name={planet.name}
            />
          </React.Fragment>
        );
      })}
    </Container>
  );
};
