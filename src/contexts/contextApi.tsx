import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext({})

export function AppProvider({ children }: any) {

    const availablePositions = [
        { "id": 1, "Name": "Dev. Front End Jr", "vacancies": 120, "selected": false },
        { "id": 2, "Name": "Dev. Front End Sr", "vacancies": 340, "selected": false },
        {
          "id": 3,
          "Name": "Dev. Fullstack End Jr",
          "vacancies": 230,
          "selected": false,
        },
        {
          "id": 4,
          "Name": "Software Engeneer Jr",
          "vacancies": 30,
          "selected": false,
        },
        { "id": 5, "Name": "Engeneer Jr", "vacancies": 780, "selected": false },
        { "id": 6, "Name": "Desing UX|UI", "vacancies": 30, "selected": false },
      ];

    const [positionSelected, setPositionSelected] = useState<any>(undefined);
    const [isFilled, setIsFilled] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");


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
