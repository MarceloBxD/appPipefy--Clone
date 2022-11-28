import { Flex, Text, Input, Button } from "@chakra-ui/react";
import { useApp } from '../../contexts/contextApi'

interface iPositionCards {
  value: number;
  name: string;
  vacancies: number;
  selected: boolean;
}

export const PositionCards = ({
  value,
  name,
  vacancies,
}: iPositionCards) => {

    const {positionSelected, setPositionSelected, availablePositions}: any = useApp()

  return (
    <Flex
      flexDir="column"
      align="center"
      cursor="pointer"
      justify="center"
      _hover={{ transform: "scale(1.1)", transition: "all 1s ease" }}
      p="5px"
      fontWeight="400"
      border='1px solid #333'
      borderRadius="3px"
      h="60px"
      w="200px"
    >
      <Button onClick={ (e) => setPositionSelected(e.target.value)}   m='3px' w="200px" variant='unstyled' border='1px solid #FFF' type="submit">
        <Flex flexDir='column'>
          <Text>{name}</Text>
          <Text>{vacancies}</Text>
        </Flex>
      </Button>
    </Flex>
  );
};
