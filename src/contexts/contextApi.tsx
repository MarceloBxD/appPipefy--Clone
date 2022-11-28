import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext({})

export function AppProvider({ children }: any) {

const professionSelected = useRef();

    const availablePositions = [
        { "id": 1, "Name": "Dev. Front End Jr", "vacancies": 120 },
        { "id": 2, "Name": "Dev. Front End Sr", "vacancies": 340 },
        {
          "id": 3,
          "Name": "Dev. Fullstack Jr",
          "vacancies": 230
        },
        {
          "id": 4,
          "Name": "Software Engeneer Jr",
          "vacancies": 30
        },
        { "id": 5, "Name": "Engeneer Jr", "vacancies": 780},
        { "id": 6, "Name": "Desing UX|UI", "vacancies": 30},
      ];

    const [positionSelected, setPositionSelected] = useState<any>(undefined);
    const [isFilled, setIsFilled] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [textAreaInput, setTextAreaInput] = useState<string>("")
    const [vulCode, setVulCode] = useState<string>("")


    const value = {
    availablePositions,
    positionSelected,
    isFilled,
    setIsFilled,
    name,
    setName,
    email,
    setEmail,
    setPositionSelected,
    textAreaInput,
    setTextAreaInput,
    vulCode,
    setVulCode,
    professionSelected
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
