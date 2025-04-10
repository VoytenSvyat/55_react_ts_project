import { useState, createContext } from "react"

import Section from "../Section/Section"
import { MainCardTitle, MainCardWrapper } from "./styles"
import { MainCardInterface, UserData } from "./types"

// Шаг 1. Создаем хранилище - контекст, с помощью функции createContext,
// импорт из react
// export const MainCardContext = createContext<undefined | UserData>(undefined)

// Пример передачи функции ии данних через контекст
export const MainCardContext = createContext<MainCardInterface>({
  data: undefined,
  changeData: ()=> { }
})

function MainCard() {
  const [userData, setUserData] = useState<UserData|undefined>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 11
  })

  return (
    // Шаг 2. Создаем обертку, которая позволит получить значение из контекста
    // в любом компоненте, которий будет вложен в компонент с оберткой (внук, правнук и т.д.)
    // Провайдер ми получаем из соданного контекста. Провайдер требует требует передачи данних в контекст через prop value
    // <MainCardContext.Provider value={userData}>
    <MainCardContext.Provider value={{
      data: userData,
      changeData: setUserData
    }}>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        {/* Пример с props drilling */}
        {/* <Section data={userData}/> */}
        <Section />
    </MainCardWrapper>
    </MainCardContext.Provider>
  )
}

export default MainCard