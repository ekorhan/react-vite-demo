import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import axios from "axios";
import * as HttpRequest from "../service/HttpRequest.jsx";

function SignIn() {

    const [token, setToken] = useState("");
    const [success, setSucess] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        if (email.length == 0 || password.length == 0) {
            console.error("email or password cannot be null!")
        }
        const req = { email, password };

        const response = HttpRequest.post("login", req);

        response.then(data => {
            setToken(data.token);
            setSucess(true);
        }).catch(() => {
            console.log("HATA");
            (setSucess(false));
        });

        console.log("token: " + token);
        console.log("success: " + success);
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

            <TextField
                label="token"
                type="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                fullWidth
                margin="normal"
            />

            <TextField
                label="success"
                type="success"
                value={success}
                onChange={(e) => setSucess(e.target.value)}
                fullWidth
                margin="normal"
            />
        </div>
    )
}

export default SignIn;