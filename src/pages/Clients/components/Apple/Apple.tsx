import { AppleWrapper, CompanyTitle, Image, TextContainer } from "./styles";
import LogoOfCompany from "../../../../assets/R.png";

function Apple() {
  return (
    <AppleWrapper>
      <CompanyTitle>Apple</CompanyTitle>
      <Image src={LogoOfCompany} />
      <TextContainer>
        Apple Inc. is an American multinational corporation and technology
        company headquartered in Cupertino, California, in Silicon Valley. It is
        best known for its consumer electronics, software, and services. Founded
        in 1976 as Apple Computer Company by Steve Jobs, Steve Wozniak and
        Ronald Wayne, the company was incorporated by Jobs and Wozniak as Apple
        Computer, Inc. the following year. It was renamed Apple Inc. in 2007 as
        the company had expanded its focus from computers to consumer
        electronics. Apple is the largest technology company by revenue, with
        US$391.04 billion in the 2024 fiscal year.
      </TextContainer>
    </AppleWrapper>
  );
}

export default Apple;
