import styled from "@emotion/styled";

interface ButtonStyledProps {
  IsDanger?: boolean
}

export const MainButton = styled.button<ButtonStyledProps>`
    width: 100%;
    height: fit-content;
    padding: 20px;
    background: ${({IsDanger})=> IsDanger? 'rgb(127, 17, 23)': 'rgb(17, 48, 127)'};
    border: none;
    border-radius: 6px;
    font-size: 26px;
    color: white;
    cursor: pointer;

    &:disabled {
      background: grey;
    }
`;

