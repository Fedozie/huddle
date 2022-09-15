import { StyledHeader, Nav, Logo, Image} from "./styles/header.styled";
import { Container } from "./styles/container.styled";
import { Button } from "./styles/button.styled";
import { Flex } from "./styles/flex.styled";

const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./Assets/images/logo.svg" alt=""/>
                    <Button>Try it for free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>Huddle reimagines the way we build communitites. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                        <Button color = "#fff" bg = "hsl(322, 100%, 66%)">Get Started For Free</Button>
                    </div>
                    <Image src = '../../Assets/images/illustration-mockups.svg' alt = 'Illustrations for mockups'/>
                </Flex>
            </Container>
        </StyledHeader>

    )
}

export default Header;