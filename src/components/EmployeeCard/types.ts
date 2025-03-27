import { ReactNode } from "react";

export interface EmployeeCardProps {
    name: string,
    position: string,
    department: string,
    img?: string,
    // {/* children - специальный prop, с помощью которого можно передавать в компонент
    //   элементы JSX */} 
    children: ReactNode
}