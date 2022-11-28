import { Flex, Text } from "@chakra-ui/react";

interface iPositionCards {
  id: number;
  name: string;
  vacancies: number;
  selected: boolean;
}

export const PositionCards = ({ id, name, vacancies, selected }: iPositionCards) => {


  return (
    <Flex
      id={id}
      flexDir="column"
      align="center"
      cursor="pointer"
      justify='center'
      _hover={{ bgColor: "#CCC", border: "2px solid purple", color:"#000" }}
      bgColor={selected ? "#AAA" : "transparents"}
      p="5px"
      color="#FFF"
      fontWeight='400'
      border="1px solid #FFF"
      borderRadius="10px"
      h="60px"
      w="200px"
    >
      <Text>{name}</Text>
      <Text>{vacancies} vagas</Text>
    </Flex>
  );
};
