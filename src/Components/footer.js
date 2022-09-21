import React from 'react';
import SocialIcons from './socialIcons';
import { StyledFooter } from './styles/footer.styled';
import { Container } from './styles/container.styled';
import { Flex } from './styles/flex.styled';
import { GrLocationPin, GrPhone, GrMailOption } from 'react-icons/gr';

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src="../../Assets/images/logo.svg" alt = ""/>
                    <Flex>
                    <ul>
                        <li>
                            <div>
                                <GrLocationPin />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.
                            </p>
                        </li>
                        <li>
                            <div>
                                <GrPhone />
                            </div>
                            <p>+1-543-123-4567</p>
                        </li>
                        <li>
                            <div>
                                <GrMailOption />
                            </div>
                            <p>example@huddle.com</p>
                        </li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>
                <p className="copyright">&copy; 2021 Huddle. All rights reserved.</p>
            </Container>
        </StyledFooter>
    )
}

export default Footer;