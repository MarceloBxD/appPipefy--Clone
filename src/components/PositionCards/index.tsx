import { Flex, Text, Input, Button } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";

interface iPositionCards {
  value: number;
  name: string;
  vacancies: number;
}

export const PositionCards = ({ value, name, vacancies }: iPositionCards) => {
  const {
    positionSelected,
    professionSelected,
    setPositionSelected,
    availablePositions,
  }: any = useApp();

  return (
    <Flex
      flexDir="column"
      align="center"
      cursor="pointer"
      justify="center"
      _hover={{
        transform: "scale(1.1)",
        transition: "all 1s ease",
        color: "#fff",
      }}
      p="5px"
      fontWeight="400"
      borderRadius="3px"
      h="60px"
      w="200px"
    >
      <Button
        h="100%"
        ref={professionSelected}
        value={value}
        onClick={(e) => setPositionSelected(e.target?.value)}
        bgColor="black"
        m="3px"
        w="200px"
        variant="unstyled"
        border="1px solid #FFF"
        type="submit"
      >
        <Flex flexDir="column">
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="13px">{vacancies} vagas</Text>
        </Flex>
      </Button>
    </Flex>
  );
};
