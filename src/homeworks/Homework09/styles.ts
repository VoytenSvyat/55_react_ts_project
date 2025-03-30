import styled from "@emotion/styled";

interface BoxCardStyledProps {
    primary?: boolean
  }

  export const BoxCard = styled.div<BoxCardStyledProps>`
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   padding: 20px;
   width: ${({ primary }) => primary ? '500px' : '450px'};
   height: ${({ primary }) => primary ? '350px' : '300px'};
   background-color: ${({ primary }) => primary ? 'red' : 'lightgrey'};
   font-size: 22px;
  `;

export const VipCard = styled.h2`
font-size: 28px;
margin: 10px;

`;

export const DescriptionCard = styled.h2`
font-size: 20px;
text-align: center;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex: 1;
  padding: 40px;
  background-color: rgb(202, 154, 234);
`;