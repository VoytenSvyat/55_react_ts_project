import Message from "../Message/Message"
import { CardTitle, CardWrapper, DataItem } from "./styles"

function Card (){
    return (
        <CardWrapper>
            <CardTitle>Card</CardTitle>
            <DataItem>Sviatoslav Voitenko </DataItem>
            <Message />
        </CardWrapper>
    )
}

export default Card