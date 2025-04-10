import { Dispatch, SetStateAction } from "react"

export interface UserData {
  firstName: string,
  lastName: string,
  age: number
}

export interface MainCardInterface {
  data: UserData | undefined,
  //  При типизации функции для изменнения state в треугольние скобки дженерика
  // для типа setStateAction добавляем типизацию state Dispatch<SetStateAction<типизация state>>
  changeData: (()=> void) | Dispatch<SetStateAction<UserData|undefined>>
}
