import styled from "@emotion/styled";

export const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 30px;
  background-color: rgb(229, 238, 197);
`;

export const Title = styled.div`
font-size: 35px;
font-weight: bold;
color: #4b35dc;
`;

export const Topics = styled.ul`
font-size: 25px;
gap: 5px;
font-weight: bold;
color: #4b35dc;
`;

export const TopicsList = styled.li`
display: list-item;
flex-direction: column;
color: blueviolet;
`;