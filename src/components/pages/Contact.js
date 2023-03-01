import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name: </Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Email address: </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message: </Form.Label>
          <Form.Control type="message" placeholder="Message" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </div>
  );
}

export default Contact;