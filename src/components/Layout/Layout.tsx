import { v4 } from "uuid"
import { Link, useNavigate } from "react-router-dom"

import { 
LayoutComponent,
Header,
LogoText,
Nav,
Main,
Footer,
StyledNavLink,
LogoImage,
ButtonContainer
} from "./styles"
import { LayoutProps, NavLinkObj } from "./types"
import { navLinksData } from "./data"
import Logo from '../../assets/avatar.jpg'
import Button from "../Button/Button"



function Layout ({children} : LayoutProps){
    const navigate = useNavigate();

    const goBack = ()=>{
        // при визове функции navigate, если добавить в качестве атрибута -1,
        // тогда при виполнени функции нас всегда будет возвращать на предидущую откритиую страницу
        navigate(-1);
    }

    const navLinks = navLinksData.map((navLink: NavLinkObj )=>{
        {/* NavLink - єто компонент библиотеки, которий добавляет ссилку на страницу по маршруту через prop to */}
        {/* <StyledNavLink to='/' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' }) }>Home</StyledNavLink> - подчеркивание с нижней линией */}
        return <StyledNavLink key={v4()} to={navLink.to} style={({isActive})=> ({color: isActive ? 'red' : 'black'})}>
            {navLink.linkName}</StyledNavLink>
    })
    return(
        <LayoutComponent>
        <Header>
            <Link to='/'>
                <LogoImage src={Logo}/>
            </Link>
            <Nav>
                {navLinks}
            </Nav>
        </Header>
        <Main>{children}</Main> 
        <Footer>
            <ButtonContainer>
                <Button name='<-' onClick={goBack}/>
            </ButtonContainer>
            <LogoText>Company name</LogoText>
        </Footer>   
        </LayoutComponent>
    )
}

export default Layout