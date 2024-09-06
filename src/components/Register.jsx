import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import * as HttpRequest from "../service/HttpRequest.jsx";

function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleRegister() {
        if (email.length == 0
            || password.length == 0
            || firstName.length == 0
            || lastName.length == 0) {
            console.error("All Input should be filled!")
        }
        const req = {firstName, lastName, email, password};

        const res = HttpRequest.post("http://localhost:8080/register", req);
    }

    return (
        <div>
            <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleRegister}>
                Register
            </Button>
        </div>
    )
}

export default Register;