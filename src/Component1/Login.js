


import { useEffect, useState } from "react";
import "./Login.css";
function Login() {

  const [password, setpass] = useState("");
  const [email, setEmail] = useState("");
  const onemailChange = e => setEmail(e.target.value);
  const onpassChange = e => setpass(e.target.value);

  const submitHandler = () => {
    
    // e.preventDefault();
    console.log("hello Now you are login");
    alert("submiited")
  }
  const handleClick = () => {
    // e.preventDefault();

    alert("Goes to registration page");
  };
  return (
    <div>
      <center>
        <form className="form" onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="email">email</label>
            <input type="text" name="email" value={email}
              placeholder="email" onChange={onemailChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="pass" value={password} onChange={onpassChange}
            />
          </div>
          {/* <input type="password" name="password" /><br/> */}
          <button className="primary">Login</button>
        </form>
        <br />
        <button className="secondary" onClick={handleClick}>
          registration
        </button>
      </center>
    </div>

  );
}
export default Login;



