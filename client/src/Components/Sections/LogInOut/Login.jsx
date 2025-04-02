import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import baner from "/photos/Candy/BanerContacts.jpg";
import Navigation from "../../Parts/Navigation";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <>
        <div className="bannerContacts">
            <img src={baner} alt="baner" className="baner-photo" />
            <Navigation/>
        </div>
        <form className="login" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input className="loginEmail" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="loginPassword" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="loginSubmit" type="submit">Login</button>
            <Link className="loginRedister" to="/registration">Don't have un account?</Link>
        </form>
        </>
    );
};