import styled from "@emotion/styled";

export const Homework15Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 60px;
  background-color: rgb(56, 244, 238);
`;

export const CheckboxHomeworkContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
`
export const CheckboxHomework = styled.input`
 width: 25px;
 height: 25px;
`
export const CheckboxLabel = styled.label`
 font-size: 20px;
`

export const ErrorMessage = styled.div`
 height: 20px;
 font-size: 18px;
 color: red;
`