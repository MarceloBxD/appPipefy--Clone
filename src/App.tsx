import { Flex } from "@chakra-ui/react";
import { DataUser } from "./components/DataUser";
import "./App.css";
import { DataCompany } from "./components/DataCompany";

function App() {
  return (
    <Flex
      flexDirection={{
        xl: "row",
        md: "column",
        sm: "column",
      }}
      pt="20px"
      gap="30px"
      opacity="0.90"
      bgImage='url("https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNTk3fQ")'
      align="center"
      justify="center"
      w="100vw"
      h="100vh"
      overflowY={{
        xl: "hidden",
        md: "visible",
        sm: "visible",
      }}
    >
      <DataCompany />
      <DataUser />
    </Flex>
  );
}

export default App;
