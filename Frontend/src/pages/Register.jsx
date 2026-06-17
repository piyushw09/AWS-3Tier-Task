import { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const registerUser = async () => {

    try {

      await API.post("/users", form);

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      alert("Registration Failed");

    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center page-container"
    >
      <Card
        className="auth-card p-4"
        style={{ width: "450px" }}
      >

        <h2 className="text-center mb-4">
          Register
        </h2>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>

            <Form.Control
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value
                })
              }
            />
          </Form.Group>

          <Button
            className="w-100"
            onClick={registerUser}
          >
            Register
          </Button>

        </Form>

      </Card>
    </Container>
  );
}

export default Register;