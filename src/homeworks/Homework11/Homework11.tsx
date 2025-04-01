import { ChangeEvent, useEffect, useState } from "react"
import Input from "../../components/Input/Input"
import { Homework11Container, InputResult } from "./styles"

function Homework11() {
    const [inputValue1, setInputValue1] = useState<string>('');
    const [inputValue2, setInputValue2] = useState<string>('');
    const [inputCount, setInputCount] = useState<number>(-1);

    const changeFirstInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue1(event.target.value);
    }

    const changeSecondInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue2(event.target.value);
   }

    useEffect(() => {
        setInputCount((prevValue) => prevValue + 1);
    }, [inputValue1])
    return (
            <Homework11Container>
                <Input name='input1' value={inputValue1} onChange={changeFirstInputValue}/>
                <Input name='input2' value={inputValue2} onChange={changeSecondInputValue}/>
                <InputResult>Количество изменений: {inputCount === -1? '0' : inputCount}</InputResult>
            </Homework11Container>
    )
}

export default Homework11