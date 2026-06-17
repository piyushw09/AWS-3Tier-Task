import { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {

    try {

      const response = await API.post("/users/login", {
        email,
        password
      });

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Credentials");

    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center page-container"
    >
      <Card
        className="auth-card p-4"
        style={{ width: "400px" }}
      >

        <h2 className="text-center mb-4">
          Login
        </h2>

        <Form>

          <Form.Group className="mb-3">

            <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

          </Form.Group>

          <Button
            variant="primary"
            className="w-100"
            onClick={loginUser}
          >
            Login
          </Button>

          <Button
            variant="link"
            className="w-100 mt-2"
            onClick={() => navigate("/register")}
          >
            Create Account
          </Button>

        </Form>

      </Card>
    </Container>
  );
}

export default Login;