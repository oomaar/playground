import {
    Nav,
    Logo,
    ButtonsContainer,
    Button,
} from "./styledNavbar";

export const Navbar = () => {
    return (
        <Nav>
            <Logo>Video API</Logo>
            <ButtonsContainer>
                <Button>Likes</Button>
                <Button>Videos</Button>
            </ButtonsContainer>
        </Nav>
    );
};