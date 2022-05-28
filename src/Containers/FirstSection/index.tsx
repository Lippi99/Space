import Image from "next/image";
import { Description } from "../../components/Text/Paragraph/styles";
import { Title } from "../../components/Text/Title";
import { Container, TitleContainer } from "./styles";

export const FirstSection = () => {
  return (
    <Container>
      <TitleContainer>
        <Title fontSize={"6rem"} color={"#8C8C8C"}>
          Discover our <span style={{ color: "#ffffff" }}>universe</span>
        </Title>

        <Description fontSize={"2rem"} color="#8C8C8C">
          User Interface
        </Description>
      </TitleContainer>

      <div className="planet">
        <Image
          width={1000}
          height={800}
          quality={100}
          objectFit="cover"
          src="/planet.jpg"
          alt="logo"
        />
      </div>
    </Container>
  );
};
