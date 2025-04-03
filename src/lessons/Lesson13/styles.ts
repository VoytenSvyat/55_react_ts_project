import styled from "@emotion/styled";

export const Lesson13Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
flex: 1;
padding: 60px;
background-color: rgb(245, 249, 250);
/* overflow-y: scroll;
height: 700px;  */
border: 1px solid #ccc;

`;

export const AnimalImage = styled.img`
    width: 500px;
    height: 400px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LoadingText = styled.p`
    font-size: 18px;
    color: #555;
`;

export const Error = styled.div`
    font-size: 28px;
    color: red;
    font-weight: bold;
`