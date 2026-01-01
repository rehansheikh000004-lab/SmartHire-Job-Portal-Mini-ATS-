import { useState } from "react";
import api from "../api";

export default function Signup() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState("");

  const submit = async e => {
    e.preventDefault();
    try {
      await api.post("/api/auth/signup", { name, email, password });
      setMsg("Signup successful");
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button>Signup</button>
      <p>{msg}</p>
    </form>
  );
}
