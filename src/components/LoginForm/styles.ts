import styled from "@emotion/styled";

// Для обертки елементов форми(поля, чекбокси кнопки) должен использоваться елемент form
export const LoginFormComponent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-width: 600px;
    padding: 40px;
    background-color: white;
    border: 2px solid black;
    border-radius: 6px;
`

export const Title = styled.div`
    align-self: center;
    font-size: 26px;
    font-weight: bold;
`