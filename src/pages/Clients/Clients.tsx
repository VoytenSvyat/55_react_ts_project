import { ClientsWrapper, Title, StyledLink } from "./styles"

function Clients() {
    return (
        <ClientsWrapper>
            <Title>Clients pages</Title>
            <StyledLink to='apple'>Apple</StyledLink>
            <StyledLink to='mcdonalds'>McDonalds</StyledLink>
            <StyledLink to='microsoft'>Microsoft</StyledLink>
        </ClientsWrapper>
    )
}

export default Clients