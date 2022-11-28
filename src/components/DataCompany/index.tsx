import { Flex, Img, Text } from "@chakra-ui/react";
import stones from "../../assets/images/stones.jpg";

export const DataCompany = () => {
  return (
    <Flex
      bgColor="#FFF"
      flexDir="column"
      borderRadius="5px"
      w="280px"
      h="450px"
    >
      <Flex flex="1" bgColor="#CCC">
        <Img w="300px" backgroundPosition='center' h='200px' objectFit='cover' src={stones} />
      </Flex>
      <Flex flex="1">
        <Text p='10px' textAlign='justify' fontSize='16px'>
          Vagas / Vacantes - M3 Estamos felizes por você querer fazer parte da
          equipe. Preencha nosso formulário de cadastro, selecionando a vaga em
          que deseja se inscrever. Em breve entraremos em contato com os
          próximos passos.
        </Text>
      </Flex>
    </Flex>
  );
};
