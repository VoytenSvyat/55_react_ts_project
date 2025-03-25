// пример импорта по умолчанию функции(нужно использовать точное название и заключать его в фигурние скобки)
import Button from "../../components/Button/Button";
import { getAction, TRAFFIC_LIGHT } from "./object_types";

function Lesson06 (){
    console.log(getAction(TRAFFIC_LIGHT.GREEN));
    

    return <div><Button/></div>
}

// Єкспорт по умолчания для компонента Lesson06 
export default Lesson06;
