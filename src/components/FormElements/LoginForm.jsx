import { useState } from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

import './LoginForm.css';

const LoginForm = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // login process

        // navigate to dashboard page
        navigate('/selectpillar');
    }

    return (
        <Form className="login-form-class" onSubmit={onSubmitHandler}>
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
                <div className="forgot-password-link" >
                    <Link to="/">Forgot password?</Link>
                </div>
            </FormGroup>
            <div className="login-button">
                <Button type="submit">
                    Log In
                </Button>
            </div>
            {/* link */}
        </Form>
    )
}

export default LoginForm
