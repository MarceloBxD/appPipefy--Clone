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
  InputLeftAddon,
  Box,
  PopoverArrow,
  PopoverCloseButton,
  InputGroup,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { PositionCards } from "../PositionCards/index";
import { useApp } from "../../contexts/contextApi";

export const DataUser = () => {


  const {
    positionSelected,
    setPositionSelected,
    availablePositions,
    isFilled,
    setIsFilled,
    name,
    setName,
    email,
    setEmail,
    textAreaInput,
    setTextAreaInput,
    professionSelected
  }: any = useApp();

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
      overflowY="scroll"
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
        <Popover placement="right-end">
          <PopoverTrigger>
            <Box
              role="button"
              aria-label="Some box"
              textAlign="center"
              w="110px"
              p="5px"
              _hover={{ textDecoration: "underlined", color: "blue.300" }}
              borderRadius="8px"
              textDecor="underline"
              color="#666"
              children="Create Record"
            />
          </PopoverTrigger>
          <PopoverContent color="#666">
            <PopoverHeader fontWeight="semibold">
              Cargos Disponíveis
            </PopoverHeader>
            <PopoverArrow bg="#333" />
            <PopoverCloseButton
              bg="#FFF"
              _hover={{ bgColor: "#888" }}
              color="#333"
            />
            <PopoverBody h="300px" overflowY="scroll">
              <Input w="100%" placeholder="Procurar conteúdo" />
              {availablePositions.map((position: any, index: number) => (
                <Flex key={index} m="12px">
                  <PositionCards
                    value={position.id}
                    name={position.Name}
                    vacancies={position.vacancies}
                  ></PositionCards>
                </Flex>
              ))}
              <Button
                w="100%"
                _hover={{
                  color: "#333",
                  bgColor: "#FFF",
                  border: "2px solid #888",
                  transition: "all 1 ease",
                }}
                bgColor="#333"
                color="#FFF"
              >
                Adicionar
              </Button>
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
      <FormControl>
        <FormLabel>*Candidato à PCD?</FormLabel>
        <RadioGroup defaultValue="Nao">
          <HStack spacing="24px">
            <Radio value="Sim">Sim</Radio>
            <Radio value="Nao">Não</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Se sim, qual o CID?</FormLabel>
        <Input placeholder="CID" />
      </FormControl>
      <FormControl>
        <FormLabel>Telefone</FormLabel>
        <InputGroup>
          <InputLeftAddon children="+234" />
          <Input type="tel" placeholder="+55 (21) 99491-9288" />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Anexe seu currículo</FormLabel>
        <Input border="none" type="file" />
      </FormControl>
      <FormControl>
      <FormLabel>*Por que se interessou nessa vaga?</FormLabel>
        <Textarea resize='none' onChange={e => setTextAreaInput(e.target.value)} placeholder='Motivo pelo qual se interessou pela vaga...'></Textarea>
      </FormControl>
    </Flex>
  );
};
