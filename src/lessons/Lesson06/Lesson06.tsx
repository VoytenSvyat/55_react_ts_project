import Button from "../../components/Button/Button";
// пример именованного импорта по умолчанию функции(нужно использовать точное название и заключать его в фигурние скобки)
import { getAction, TRAFFIC_LIGHT } from "./object_types";

function Lesson06 (){
    console.log(getAction(TRAFFIC_LIGHT.GREEN));
    

    return <div><Button 
    danger
    name='Send'/></div>
}

// Экспорт по умолчания для компонента Lesson06 
export default Lesson06;
