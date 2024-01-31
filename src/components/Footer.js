import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/web.webp";


export const Footer = () => {
  const date = new Date()
  return (
    <footer className="footer" style={{ paddingTop: "30px" }}>
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} style={{ width: "70px" }} alt="Logo" />
            DEPO
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">

            <p>Copyright {date.getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
