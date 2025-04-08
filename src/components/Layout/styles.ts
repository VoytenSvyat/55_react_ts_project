import styled from "@emotion/styled";

export const LayoutComponent = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`;

export const Header = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 20px;
 background-color: #F5B0Bc;
`;

export const Nav = styled.nav`
display: flex;
gap: 15px;
`;

export const Main= styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
background-color: #8a1e30;
color: white;
`;

export const LogoText = styled.div`
font-size: 28px;
font-weight: bold;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`