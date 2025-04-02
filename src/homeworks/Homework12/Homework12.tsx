import axios from "axios";
import Button from "../../components/Button/Button"
import { Homework12Container, FactsWrapper, Error } from "./styles"
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

function Homework12 () {
    const [fact, setFact] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const FACTS_URL: string = 'https://catfact.ninja/fact';

    const getFact = async () => {
        setError(undefined)
        try {
            setIsLoading(true)
            const response = await axios.get(FACTS_URL)
            setFact(`${response.data.fact}`)
        } catch (error: any) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {getFact()},[])

    return (
        <Homework12Container>
            <Button name='GET MORE FACTS' onClick={getFact} disabled={isLoading}/>
            <FactsWrapper>{isLoading ? <Spinner /> : fact}</FactsWrapper>
            <Error>{error}</Error>
        </Homework12Container>
    )
    
}

export default Homework12