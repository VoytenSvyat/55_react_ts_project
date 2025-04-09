import { UsersWrapper, Title, StyledLink } from "./styles"

function Users() {
    return (
        <UsersWrapper>
            <Title>Users pages</Title>
            {/* Если ми переходим на дополнительную страницу, у которой маршрут имеет формат
            '/<адрес текущей страници> /<адрес дополнительной страници>', то можно сделать упрощение t0=<адрес дополнительной страници>*/}
            <StyledLink to='manager'>Manager</StyledLink>
            <StyledLink to='designer'>Designer</StyledLink>
        </UsersWrapper>
    )
}

export default Users