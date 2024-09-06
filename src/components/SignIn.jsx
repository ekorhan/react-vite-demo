import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import axios from "axios";
import * as HttpRequest from "../service/HttpRequest.jsx";

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        if (email.length == 0 || password.length == 0) {
            console.error("email or password cannot be null!")
        }
        const req = {email, password};
        console.log(req);

        const res = HttpRequest.post("http://localhost:8080/login", req);
        console.log(res);
        console.log(res.data);
    }

    return (
        <div>
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
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
        </div>
    )
}

export default SignIn;