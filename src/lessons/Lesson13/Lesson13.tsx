import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { LoadingText, AnimalImage, Lesson13Container, Error, ButtonContainer } from "./styles";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";
import { v4 } from "uuid";


function Lesson13 () {
    //1. Создание всех состояний
    const [image, setImage] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | undefined>(undefined);
    const [value, setValue] = useState<string>('');
    //2. Сохранение переменних
    const IMAGE_URL = 'https://dog.ceo/api/breeds/image/random';

    const getImage = async () => {
        
        setError(undefined)
        try {
            const response = await axios.get(IMAGE_URL);
            setImageUrl(response.data.message);
            // setImage((prevValue)=> [...prevValue, response.data.message])
        } catch (error: unknown) {
            // При типизации ошибки, необходимо указивать специальний тип для нее unknown
            if(axios.isAxiosError(error)) {
            setError(error.message)
            } else{
                setError('Unknown error')
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getImage();
    }, []);

    useEffect(() => {
        getImage();
      }, [value])

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const deleteAllData = () => {
        setImage([])
    }
    // Создание массива елементов
    // const dogPhotos = imageUrl.map((image: string)=>{
    //     return <AnimalImage key={v4()} src={image} alt="Animal" />
    // })

    return (
        <Lesson13Container>
            <ButtonContainer>
            <Input name='image' value={value} onChange={changeValue}  />
            <Button name="GET MORE IMAGES" onClick={getImage}/> 
            </ButtonContainer>
            {isLoading ? (
                <LoadingText>Загрузка изображения...<Spinner/></LoadingText>
            ) : imageUrl && image ? (
                <AnimalImage key={v4()} src={imageUrl} alt="Animal" />
            ) : (
                <LoadingText>Не удалось загрузить изображение</LoadingText>
            )}
            <Error>{error}</Error>
           < Button name="DELETE ALL DATA" onClick={deleteAllData} danger/>
           {/* Скривает кнопку delete all data на странице Если еще нету фотографий */}
            {/* {image.length !== 0 && < Button name="DELETE ALL DATA" onClick={deleteAllData} danger/>} */}
       
        </Lesson13Container>
    );
}

export default Lesson13