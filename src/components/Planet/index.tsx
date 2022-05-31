import Image from "next/image";
import { Title } from "../Text/Title";
import { Paragraph } from "../Text/Paragraph";
import { Container, TitleContainer } from "./styles";
import { ButtonCheck } from "../Button";

interface PlanetProps {
  src: any;
  alt: string;
  name: string;
  description: string;
  linkRef: string;
}

export const Planet = ({
  name,
  description,
  src,
  alt,
  linkRef,
}: PlanetProps) => {
  return (
    <Container>
      <div style={{ width: "50%" }}>
        <Image
          width={600}
          height={620}
          alt={alt}
          src={src}
          objectFit="contain"
          quality={100}
        />
      </div>
      <TitleContainer>
        <Title fontWeight={1000} fontSize="4rem" color="#ffffff">
          {name}
        </Title>
        <Paragraph fontSize="2.5rem" color="#ffffff">
          {description}
        </Paragraph>

        <a
          style={{ marginTop: "2rem" }}
          target="_blank"
          href={linkRef}
          rel="noreferrer"
        >
          <ButtonCheck>Additional informations</ButtonCheck>
        </a>
      </TitleContainer>
    </Container>
  );
};
