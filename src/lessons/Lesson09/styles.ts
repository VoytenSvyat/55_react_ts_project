import styled from "@emotion/styled";

//Интерфейс для props стилизованого компонента BoxInfo
interface BoxInfoStyledProps {
    primary?: boolean
} 

export const BoxInfo = styled.div<BoxInfoStyledProps>`
    display: flex;
    align-items: center;
    justify-content: ${({primary})=> primary ? 'center' : 'flex-start' };;
    padding: 20px;
    width: 300px;
    height: 300px;
    /* background-color: rebeccapurple; */
    background-color: ${({primary})=> primary ? 'rebeccapurple' : 'grey' };
    font-size: 24px;
`;

export const TitleCard = styled.h2``;

export const AvatarImg = styled.img`
 width: 100px;
`;