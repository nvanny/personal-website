import React from 'react';
import './App.css';
import { Navbar, Nav} from "react-bootstrap";
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
    return (
        <div>
        <Navbar
          expand="sm"
          className="navbar-custom"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand>
            </Navbar.Brand>
            <Nav className="mr-auto" defaultActiveKey={this.props.active}>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey="1" href="/" className={"1" ===  this.props.active ? "nav-active-link" : "nav-link"}>
                  Home
                  </Nav.Link>
              </Nav.Item>

              <Nav.Item className="nav-item">
                <Nav.Link eventKey="2" href="/projects" className={"2" ===  this.props.active ? "nav-active-link" : "nav-link"}>
                  Projects
                  </Nav.Link>
              </Nav.Item>

              <Nav.Item className="nav-item">
                <Nav.Link eventKey="3" href="/resume" className={"3" ===  this.props.active ? "nav-active-link" : "nav-link"} >
                  Resume
                  </Nav.Link>
              </Nav.Item>

            </Nav>
            <Nav>
              <Nav.Item className="nav-item">
                <Nav.Link className="nav-active-link" style={{textDecoration:"none", cursor:"auto"}}>
                  Nico Vanny
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
    );
    }
}

export default withRouter(NavBar);