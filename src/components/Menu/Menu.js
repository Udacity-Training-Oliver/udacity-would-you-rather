import { useSelector } from "react-redux"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Menu() {
  const user = useSelector((state) => state.users[state.authedUser]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Would you rather?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">

            <Nav.Link as={Link} to="/" className="mx-2">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/add" className="mx-2">
              Add Question
            </Nav.Link>

            <Nav.Link as={Link} to="/leaderboard" className="mx-2">
              Leader Board
            </Nav.Link>

            {user && 
            <Navbar.Text className="mx-2 ms-auto">
              Hello {user.name}
            </Navbar.Text>}

            {user && user.avatarURL !== null &&
              <div className="d-flex align-items-center">
                <img width={32} src={`${process.env.PUBLIC_URL}/${user.avatarURL}`} alt="Avatar" />
              </div>
            }
            
            <Nav.Link as={Link} to="/login" className="mx-2 ms-auto">
              {user ? 'Logout' : 'Login'}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
