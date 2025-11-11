import { useState } from "react";

export default function LoginForm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState(''); 

const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
}  

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>

                {submitted && (
                    <div>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Password: {password}</p>
                    </div>
                )}
            </form>
        </>
    );
}