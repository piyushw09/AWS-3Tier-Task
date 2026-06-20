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

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

        navigate("/");

        return;

    }

    fetchUsers();

}, []);

  const fetchUsers = async () => {

    const response = await API.get("/users");

    setUsers(response.data);

  };

  return (
    <>
      <NavigationBar />

      <Container className="mt-4">

        <Row>

          <div className="mb-4">

            <h2>
              Welcome back, {currentUser?.username} 👋
            </h2>

            <p className="text-muted">
              Last Login: {loginTime}
            </p>

          </div>

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
              bg="dark"
              text="white"
              className="dashboard-card"
            >
              <Card.Body>

                <Card.Title>
                  Backend
                </Card.Title>

                <h4>
                  Node.js API
                </h4>

              </Card.Body>
            </Card>
          </Col>

        </Row>

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