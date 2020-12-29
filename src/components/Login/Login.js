import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

const Login = ()=>{
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.prevenDefault();
    }

    return (
        <div className="loginWrapper">
            <div className="Login">
            <h1 className="formTitle">Account Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                            <Button block size="lg" type="submit" disable={!validateForm()}>Login</Button>
                </Form>
            </div>
        </div>
    )
}
export default Login;