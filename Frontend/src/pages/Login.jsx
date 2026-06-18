import { useState } from "react";
import { Card, Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const loginUser = async (e) => {

        e.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        try {

            setLoading(true);

            const response = await API.post("/users/login", {
                email,
                password
            });

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            navigate("/dashboard");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Invalid Credentials"
            );

        } finally {

            setLoading(false);

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
                    Login CI/CD Test
                </h2>

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                <Form onSubmit={loginUser}>

                    <Form.Group className="mb-3">

                        <Form.Label>Email</Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>Password</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </Form.Group>

                    <Button
                        variant="primary"
                        className="w-100"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Spinner
                                    animation="border"
                                    size="sm"
                                    className="me-2"
                                />
                                Logging in...
                            </>
                        ) : (
                            "Login"
                        )}
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