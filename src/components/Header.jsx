import { Container, Navbar } from "react-bootstrap";
import ReactLogo from '../assets/react.svg';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" className="shadow p-2">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={ReactLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                    />
                    Magic Scrape
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}