import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/", { replace: true });

};

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          AWS 3-Tier Application
        </Navbar.Brand>

        <Button
          variant="outline-light"
          onClick={logout}
        >
          Logout
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;