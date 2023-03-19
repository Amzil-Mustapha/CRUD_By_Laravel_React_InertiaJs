import { router, usePage } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

function Sign_in() {
    const {flash} = usePage().props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/Onlogin", { username, password });
    };
    return (
        <>
       
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                Username :
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <br />
                Password :
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <button>Login</button>
            </form>

            {flash.info}
        </>
    );
}

export default Sign_in;
