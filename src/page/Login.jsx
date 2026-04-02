import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  // Form에 포함된 내용을 작성하고, 로그인 버튼을 클릭하면 작동하는 코드
  const loginUser = (event) => {
  // 새로고침 방지 코드
    event.preventDefault();
    console.log('login user func issue');
    setAuthenticate(true);
    navigate('/');
  };


  return (
    <Container>
      {/* 부트스트랩 Form 양식 */}
      <Form onSubmit={() => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
