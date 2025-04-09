import { McDonaldsWrapper, CompanyTitle, Image, TextContainer } from "./styles";
import LogoOfCompany from "../../../../assets/logomc.png";

function McDonalds() {
  return (
    <McDonaldsWrapper>
      <CompanyTitle>McDonalds</CompanyTitle>
      <Image src={LogoOfCompany} />
      <TextContainer>
        McDonald's Corporation is an American operator and franchisor of
        fast-food restaurants worldwide and the world's largest fast-food
        company by revenue. As of December 2023, over 41,800 restaurants were
        operated worldwide.
      </TextContainer>
    </McDonaldsWrapper>
  );
}

export default McDonalds;
