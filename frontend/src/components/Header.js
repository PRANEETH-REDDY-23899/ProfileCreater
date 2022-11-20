import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../actions/userActions";
import './Screen.css'

function Header({ setSearch }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar collapseOnSelect expand="lg" bg ='secondary' variant="dark" >
      <Container>
        <Button variant="outline-light" className="mx-2">
        <Navbar.Brand href="/" className='text-dark'> Praneeth Reddy profile app</Navbar.Brand>
          </Button>
        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="m-auto">
            {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav> */}
          <Nav>
            {userInfo ? (
              <>
                <Nav.Link href="/profile" className='text-dark'>Edit-Profile</Nav.Link>
                <Nav.Link href="/addition" className='text-dark'>Addition</Nav.Link>
                <Nav.Link href="/news" className='text-dark'>News</Nav.Link>
                <Nav.Link href="/sports" className='text-dark'>Sports</Nav.Link>
                <Nav.Link href="/entertainment" className='text-dark'>Entertainment</Nav.Link>
                <NavDropdown className='text-dark Loginclass'
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                  
                >
                  <NavDropdown.Item href="/profile" className='text-dark'>
                    {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler} className='text-dark'>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
             
              <Nav.Link href="/addition" className='text-dark'>Addition</Nav.Link>
              <Nav.Link href="/news" className='text-dark'>News</Nav.Link>
              <Nav.Link href="/sports" className='text-dark'>Sports</Nav.Link>
              <Nav.Link href="/entertainment" className='text-dark'>Entertainment</Nav.Link>
              <Nav.Link href="/login" className='text-dark Loginclass mr-0'>Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
