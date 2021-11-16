import { useState } from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

import './SignupForm.css';

const SignupForm = (props) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // create user
    
    // navigate to login page
    navigate('/login');
  }

  return (
    <Form className="form-class" onSubmit={onSubmitHandler}>
      <FormGroup>
        <Label htmlFor="firstName">
          First Name
        </Label>
        <Input
          id="firstName"
          name="firstName"
          placeholder="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lastName">
          Last Name
        </Label>
        <Input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password" className="form-label">
          Verify Password
        </Label>
        <Input
          id="password"
          name="password"
          placeholder="Verify Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" />
        {' '}
        <Label className="checkbox-label" check>
          I agree to Superbloom's Terms of Service and Privacy Policy.
        </Label>
      </FormGroup>
      <div className="signup-button">
        <Button type="submit">
          Create Account
        </Button>
      </div>
      {/* link */}
    </Form>
  )
}

export default SignupForm
