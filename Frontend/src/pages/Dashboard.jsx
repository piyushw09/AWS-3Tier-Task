import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import NavigationBar from "../components/Navbar";
import API from "../services/api";

function Dashboard() {

    const currentUser = JSON.parse(
        localStorage.getItem("user")
    );

    const loginTime = localStorage.getItem("loginTime");

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [backendStatus, setBackendStatus] = useState("Checking...");

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {

            navigate("/");
            return;

        }

        fetchUsers();
        checkBackendHealth();

    }, []);

    const fetchUsers = async () => {

        try {

            const response = await API.get("/users");

            setUsers(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const checkBackendHealth = async () => {

        try {

            await API.get("/health");

            setBackendStatus("Online");

        } catch (error) {

            setBackendStatus("Offline");

        }

    };

    return (
        <>
            <NavigationBar />

            <Container className="mt-4">

                {/* Welcome Section */}

                <div className="mb-4">

                    <h2>
                        Welcome back, {currentUser?.username} 👋
                    </h2>

                    <p className="text-muted">
                        Last Login: {loginTime}
                    </p>

                </div>

                {/* Statistics Cards */}

                <Row>

                    <Col md={4}>
                        <Card
                            bg="primary"
                            text="white"
                            className="dashboard-card"
                        >
                            <Card.Body>

                                <Card.Title>
                                    Total Users
                                </Card.Title>

                                <h1>
                                    {users.length}
                                </h1>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card
                            bg="success"
                            text="white"
                            className="dashboard-card"
                        >
                            <Card.Body>

                                <Card.Title>
                                    Database
                                </Card.Title>

                                <h4>
                                    MongoDB Atlas
                                </h4>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card
                            bg={
                                backendStatus === "Online"
                                    ? "success"
                                    : backendStatus === "Offline"
                                        ? "danger"
                                        : "warning"
                            }
                            text="white"
                            className="dashboard-card"
                        >
                            <Card.Body>

                                <Card.Title>
                                    Backend Health
                                </Card.Title>

                                <h4>

                                    {backendStatus === "Online"
                                        ? "🟢 Online"
                                        : backendStatus === "Offline"
                                            ? "🔴 Offline"
                                            : "🟡 Checking..."}

                                </h4>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                {/* Profile Card */}

                <Row className="mt-4">

                    <Col md={6}>

                        <Card className="dashboard-card">

                            <Card.Body>

                                <Card.Title>
                                    Profile Information
                                </Card.Title>

                                <hr />

                                <div className="text-center mb-4">

                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                        alt="Profile"
                                        width="100"
                                    />

                                </div>

                                <p>
                                    <strong>Username:</strong>{" "}
                                    {currentUser?.username}
                                </p>

                                <p>
                                    <strong>Email:</strong>{" "}
                                    {currentUser?.email}
                                </p>

                                <p>
                                    <strong>Last Login:</strong>{" "}
                                    {loginTime}
                                </p>

                                <p>
                                    <strong>Authentication:</strong>{" "}
                                    JWT Token
                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* User Table */}

                <div className="table-container mt-4">

                    <h3>User List</h3>

                    <Table
                        striped
                        bordered
                        hover
                    >

                        <thead>

                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>

                        </thead>

                        <tbody>

                            {users.map((user) => (

                                <tr key={user._id}>

                                    <td>{user.username}</td>

                                    <td>{user.email}</td>

                                </tr>

                            ))}

                        </tbody>

                    </Table>

                </div>

            </Container>
        </>
    );
}

export default Dashboard;