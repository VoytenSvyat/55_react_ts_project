import { useNavigate } from "react-router-dom"

import { MicrosoftWrapper, CompanyTitle, Image, ButtonContainer } from "./styles"
import LogoOfCompany from '../../../../assets/Microsoft_logo_(2012).svg.png'
import Button from "../../../../components/Button/Button"
import { TextContainer } from "../Microsoft/styles";

function Microsoft () {
    const navigate = useNavigate();

    const goToApplePage = ()=>{
        navigate('/clients/apple');
    } 
    return (
    <MicrosoftWrapper>
        <CompanyTitle>Microsoft</CompanyTitle>
        <Image src={LogoOfCompany} />
        <TextContainer>
                Microsoft Corporation is an American multinational corporation and
                technology conglomerate headquartered in Redmond, Washington. Founded
                in 1975, the company became highly influential in the rise of personal
                computers through software like Windows, and the company has since
                expanded to Internet services, cloud computing, video gaming and other
                fields. Microsoft is the largest software maker, one of the most
                valuable public U.S. companies, and one of the most valuable brands
                globally.
              </TextContainer>
        <ButtonContainer>
        <Button name="Go to Apple Page" onClick={goToApplePage}/>
        </ButtonContainer>
    </MicrosoftWrapper>
    )
}

export default Microsoft