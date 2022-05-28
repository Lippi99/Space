import Image from "next/image";
import { Description } from "../../components/Text/Paragraph/styles";
import { Title } from "../../components/Text/Title";
import { Container, TitleContainer } from "./styles";

export const SecondSection = () => {
  return (
    <Container>
      <TitleContainer>
        <Title fontSize={"6rem"} color={"#ffffff"}>
          Explore <br />
          universe
        </Title>
        <div style={{ width: "50%" }}>
          <Description fontSize={"2rem"} color="#8C8C8C">
            Learn about our amazing universe and be the part of overcast
          </Description>
        </div>
      </TitleContainer>
      <div className="planet1">
        <Image
          width={800}
          height={700}
          quality={100}
          objectFit="cover"
          src="/planetTwo.png"
          alt="logo"
        />
      </div>
    </Container>
  );
};
