import React from 'react'
import { Container, Row, Col, Nav, Button } from 'react-bootstrap'
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'

const MyFooter = () => {
  return (
    <Container style={{ paddingTop: '50px' }}>
      <div>
        <a href="#">
          <Facebook className="bi bi-facebook text-light m-2" />
          <Instagram className="bi bi-instagram text-light m-2" />
          <Twitter className="bi bi-twitter text-light m-2" />
          <Youtube className="bi bi-youtube text-light m-2" />
        </a>
      </div>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-5 my-1 py-5">
        <Col className="mb-3">
          <Nav className="flex-column">
            <Nav.Link href="#" className="p-0 text-secondary">
              Audio and subtitles
            </Nav.Link>
            <Nav.Link href="#" className="p-0 text-secondary">
              Media Center
            </Nav.Link>
            <Nav.Link href="#" className="p-0 text-secondary">
              Privacy
            </Nav.Link>
            <Nav.Link href="#" className="p-0 text-secondary">
              Contact Us
            </Nav.Link>
          </Nav>
        </Col>
        <Col className="mb-3">
          <Nav className="flex-column">
            <Nav.Link href="#" className="p-0 text-secondary">
              Audio Description
            </Nav.Link>
            <Nav.Link href="#" className="p-0 text-secondary">
              Investor Relations
            </Nav.Link>
            <Nav.Link href="#" className="p-0 text-secondary">
              Legal Notices
            </Nav.Link>
          </Nav>
        </Col>
        <Col className="mb-3">
          <Nav className="flex-column">
            <Nav.Link href="#" className="p-0 text-secondary">
              Help Center
            </Nav.Link>
            <Nav.Link href="#" className="p-0 text-secondary">
              Jobs
            </Nav.Link>
            <Nav.Link href="#" className="p-0 text-secondary">
              Cookie Preferences
            </Nav.Link>
          </Nav>
        </Col>
        <Col className="mb-3">
          <Nav className="flex-column">
            <Nav.Link href="#" className="p-0 text-secondary">
              Gift Cards
            </Nav.Link>
            <Nav.Link href="#" className="p-0 text-secondary">
              Terms of Use
            </Nav.Link>
            <Nav.Link href="#" className="p-0 text-secondary">
              Corporate Information
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
      <Button variant="outline-secondary" className="mt-5">
        Service Code
      </Button>

      <p className="nav-link p-0 text-secondary mt-3">
        &copy; 1997-2019 Netflix, Inc. (i-0d00fcda2fdf9c0de)
      </p>
    </Container>
  )
}

export default MyFooter
