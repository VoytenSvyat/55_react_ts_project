import { useContext } from "react";

import { MainCardContext } from "../MainCard/MainCard";
import { ContentComponent, DataItem } from "./styles"
import Button from "../../../../components/Button/Button";
// import { ContentProps } from "./types"

function Content() {
 // Шаг 3. Визиваем хук useContext(после импорта из react)В визов useContext передаем
 // контекст, которий бил создан на шаге 1(нужно импортировать). При визове хук useContext возвращает
 // данние, которие храняться в контексте
//  const userContentData = useContext(MainCardContext);

// Пример передачи функции и данних через контекст
// const userContentData = useContext(MainCardContext)
//Деструктурирующие присваивание
const{data, changeData} = useContext(MainCardContext)

const deleteData = ()=>{
  changeData(undefined)
}


  return (
    <ContentComponent>
      {/* Если переменная может содержать обьект или undefined, тогда перед обращением к свойству обьекта, 
      желательно ставить знак вопроса чтоби избежать случая получения undefined (пустого свойства)
      ТО есть знак вопроса являеться ли переменная слева обьектом */}
      <DataItem>First Name: {data?.firstName} </DataItem>
      <DataItem>Last Name: {data?.lastName} </DataItem>
      <DataItem>Age: {data?.age} </DataItem>
      <Button name='Delete all Data' onClick={deleteData}/>
    </ContentComponent>
  )
}

export default Content

// function Content({userData} : ContentProps) {

//   return (
//     <ContentComponent>
//       <DataItem>First Name: {userData.firstName} </DataItem>
//       <DataItem>Last Name: {userData.lastName} </DataItem>
//       <DataItem>Age: {userData.age} </DataItem>
//     </ContentComponent>
//   )
// }

// export default Content
