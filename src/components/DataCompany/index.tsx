import { Flex, Img, Text } from "@chakra-ui/react";
import astrounaut from "../../assets/images/astronaut.jpg";

export const DataCompany = () => {
  return (
    <Flex
      bgColor="#FFF"
      flexDir="column"
      w="300px"
      h="450px"
      borderRadius="10px"
    >
      <Flex  flex="1">
        <Img pt='20px' w="300px" backgroundPosition='center' h='200px' objectFit='cover' src={astrounaut} />
      </Flex>
      <Flex flex="1">
        <Text p='10px' textAlign='justify' fontSize='16px'>
          <b>Vamos pra cima - M3</b>. Estamos felizes por você querer fazer parte da
          equipe. Preencha nosso formulário de cadastro, selecionando a vaga em
          que deseja se inscrever. Em breve entraremos em contato para te fornecer
          próximos passos.
        </Text>
      </Flex>
    </Flex>
  );
};
