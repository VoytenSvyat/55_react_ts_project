import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { LoadingText, AnimalImage, Lesson13Container, Error } from "./styles";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";


function Lesson13 () {
    const [image, setImage] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | undefined>(undefined);
    const [value, setValue] = useState<string>('');
    // const [currentIndex, setCurrentIndex] = useState<number>(0);

    const IMAGE_URL = 'https://dog.ceo/api/breeds/image/random';

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const deleteAllData = () => {
        setImage([])
        setIsLoading(true)
    }

    const getImage = async () => {
        setError(undefined)
        try {
            const response = await axios.get(IMAGE_URL);
            setImageUrl(response.data.message); 
        } catch (error: any) {
            setError(error.message)
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

    return (
        <Lesson13Container>
            <Input name='image' value={value} onChange={changeValue}  />
            <Button name="GET MORE IMAGES" onClick={getImage}/>
            {isLoading ? (
                <LoadingText>Загрузка изображения...<Spinner/></LoadingText>
            ) : imageUrl && image ? (
                <AnimalImage src={imageUrl} alt="Animal" />
            ) : (
                <LoadingText>Не удалось загрузить изображение</LoadingText>
            )}
            <Error>{error}</Error>
            <Button name="DELETE ALL DATA" onClick={deleteAllData} disabled={isLoading}/>

        </Lesson13Container>
    );
}

export default Lesson13