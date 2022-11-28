import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Box,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { PositionCards } from "../PositionCards/index";

export const DataUser = () => {
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const availablePositions = [
    { "id": 1, Name: "Dev. Front End Jr.", vacancies: 120, "selected": isSelected} ,
    { "id": 2, Name: "Dev. Front End Sr.", vacancies: 340, "selected": isSelected},
    { "id": 3, Name: "Dev. FullStack End Jr.", vacancies: 230, "selected": isSelected},
    { "id": 4, Name: "Software Engeneer Jr.", vacancies: 30, "selected": isSelected},
  ];

  useEffect(() => {
    checkIsFilled();
  }, [name, email]);

  const checkIsFilled = () => {
    if (name || email == "") {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  };

  return (
    <Flex
      p="20px"
      gap="20px"
      flexDir="column"
      w="500px"
      h="520px"
      borderRadius="7px"
      bgColor="#FFF"
    >
      <FormControl>
        <FormLabel color={name ? "" : "#F00"}> *Nome Completo</FormLabel>
        <Input
          required
          type="text"
          border="1px solid black"
          borderColor={name ? "#CCC" : "#F00"}
          onChange={(e) => setName(e.target.value)}
        />
        {name ? (
          ""
        ) : (
          <FormHelperText fontWeight="500" color="#F00">
            Nome precisa ser preenchido.
          </FormHelperText>
        )}
      </FormControl>
      <FormControl>
        <FormLabel
          color={email ? "" : "#F00"}
          borderColor={isFilled ? "" : "#F00"}
        >
          {" "}
          *Email
        </FormLabel>
        <Input
          border="1px solid black"
          borderColor={email ? "#CCC" : "#F00"}
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        {email ? (
          ""
        ) : (
          <FormHelperText fontWeight="500" color="#F00">
            Email deve ser preenchido.
          </FormHelperText>
        )}
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>*Cargo Desejado</FormLabel>
        <Popover>
          <PopoverTrigger>
            <Box
              role="button"
              aria-label="Some box"
              textAlign="center"
              w="110px"
              p="5px"
              borderRadius="8px"
              textDecor="underline"
              color="#666"
              children="Create Record"
            />
          </PopoverTrigger>
          <PopoverContent bg="#666" color="white">
            <PopoverHeader fontWeight="semibold">
              Cargos Disponíveis
            </PopoverHeader>
            <PopoverArrow bg="pink" />
            <PopoverCloseButton bg="purple" />
            <PopoverBody>
              {availablePositions.map((position) => (
                <Flex onClick={() => setIsSelected(!isSelected)} m='10px'> 
                    <PositionCards id={position.id} selected={position.selected} name={position.Name} vacancies={position.vacancies}></PositionCards>
                </Flex>
              ))}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </FormControl>
      <FormControl>
        <FormLabel>*Foi indicado por um de nossos colaboradores?</FormLabel>
        <RadioGroup defaultValue="Nao">
          <HStack spacing="24px">
            <Radio value="Sim">Sim</Radio>
            <Radio value="Nao">Não</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
    </Flex>
  );
};
