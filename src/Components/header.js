import { StyledHeader, Nav, Logo } from "./styles/header.styled";
import { Container } from "./styles/container.styled";
import { StyledButton } from "./styles/button.styled"

const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./Assets/images/logo.svg" alt=""/>
                    <StyledButton>Try it for free</StyledButton>
                </Nav>
            </Container>
        </StyledHeader>

    )
}

export default Header;