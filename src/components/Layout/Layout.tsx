import { NavLink } from "react-router-dom";

import { 
LayoutComponent,
Header,
LogoText,
Nav,
Main,
Footer
} from "./styles"
import { LayoutProps } from "./types"

function Layout ({children} : LayoutProps){
    return(
        <LayoutComponent>
        <Header>
            <LogoText>Company name</LogoText>
            <Nav>
                {/* NavLink - єто компонент библиотеки, которий добавляет ссилку на страницу по маршруту через prop to */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </Nav>
        </Header>
        <Main>{children}</Main> 
        <Footer>
            <LogoText>Company name</LogoText>
        </Footer>   
        </LayoutComponent>
    )
}

export default Layout