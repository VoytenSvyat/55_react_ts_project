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
        if(inputValue1) {
        setInputCount((prevValue) => prevValue + 1);
    }
    }, [inputValue1])
    return (
            <Homework11Container>
                <Input name='note' placeholder="Enter your note" value={inputValue1} onChange={changeFirstInputValue}/>
                <InputResult>
                Количество изменений в поле Note: {inputCount === -1? '0' : inputCount}
                {/* Количество изменений в поле Note: {inputCount -1 } state = -1. -1 не показиваеться, вместо нее ми подставляем 0 */}
                </InputResult>
                <Input name='note_addition' placeholder="Enter your additional note" value={inputValue2} onChange={changeSecondInputValue}/>
            </Homework11Container>
    )
}

export default Homework11