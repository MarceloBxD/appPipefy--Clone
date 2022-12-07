import { Flex, Img, Text } from "@chakra-ui/react";
import astrounaut from "../../assets/images/astronaut.jpg";

export const DataCompany = () => {
  return (
    <Flex
      bgColor="#fff"
      align="center"
      justify="center"
      h="80%"
      flexDir="column"
      w="300px"
      borderRadius="10px"
    >
      <Flex w="80%" h="80%" flexDir="column">
        <Img
          borderRadius="10px"
          w="100%"
          h="50%"
          backgroundPosition="center"
          objectFit="cover"
          src={astrounaut}
        />
        <Text fontWeight="bold" align="center">
          Vamos para cima D3
        </Text>
        <Text
          display="flex"
          flexDir="column"
          justifyContent="center"
          align="center"
          mt="20px"
          textAlign="justify"
          fontSize={{
            xl: "16px",
            md: "14px",
            base: "12px",
          }}
        >
          Estamos felizes por você querer fazer parte da equipe. Preencha nosso
          formulário de cadastro, selecionando a vaga em que deseja se
          inscrever. Em breve entraremos em contato para te fornecer próximos
          passos.
        </Text>
      </Flex>
    </Flex>
  );
};
