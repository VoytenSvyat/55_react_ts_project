import axios from "axios";
import Button from "../../components/Button/Button"
import { JokeWrapper, Lesson12Container, Error} from "./styles"
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

function Lesson12 () {
// Пример запроса GET с использованием axios
const JOKE_URL: string = 'https://official-joke-api.appspot.com/random_joke';
const [joke, setJoke] = useState<string | undefined >(undefined); 
const [error, setError] = useState<string | undefined>(undefined);
const [isLoading, setIsLoading] = useState<boolean>(false);

    const getJoke = async()=>{
        // Очистка ошибки, при каждом новом запуске функции
        setError(undefined)
        // в блоке try отправляеться запрос и обрабативаеться успешний результат ответа
        try {
            setIsLoading(true);
            const response = await axios.get(JOKE_URL);
            console.log(response.data);
            // обработка успешного результата
            const data = response.data;
            setJoke(`${data.setup} - ${data.punchline}`)
        } 
        // в блоке catch обрабативаеться ошибка(при получении ошибки запроса, информация о ней будет передана в error)
        catch(error: any) {
            console.log(error.message);
            // обработка ошибки
            setError(error.message)
        } 
        // в блоке finally прописиваеться действие, которое должни бить виполнени в любом случае
        // при ошибке или при получении данних
        finally {
            console.log('Результат получен');
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getJoke()
    }, [])
    return (
        <Lesson12Container>
            <Button name="GET ANOTHER JOKE" onClick={getJoke} disabled={isLoading }/>
            {/* {isLoading && <Spinner />} */}
            <JokeWrapper>{isLoading ? <Spinner /> : joke}</JokeWrapper>
            <Error>{error}</Error>
        </Lesson12Container>
    )
}

export default Lesson12