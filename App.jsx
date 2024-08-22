import "./App.css";
import { useState } from "react";
import Footer from "./component/Footer";
import Result from "./component/Result";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword1Change = (event) => {
    setPassword1(event.target.value);
  };
  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password1.length >= 8 && password1 === password2) {
      alert(" You've just created your A/C");
      setShowForm(false);
    } else {
      setShowErrorMsg(true);
    }
  };

  return (
    <>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <p>Name</p>
          <input
            type="text"
            name="username"
            onChange={handleUsernameChange}
            value={username}
          />
          <p>Email</p>
          <input
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
          <p>Password</p>
          <input
            type="password"
            name="password1"
            onChange={handlePassword1Change}
            value={password1}
          />
          <p>Confirm Your Password</p>
          <input
            type="password"
            name="password2"
            onChange={handlePassword2Change}
            value={password2}
          />
          {showErrorMsg && (
            <p style={{ color: "red" }}>Please insert 8 characters</p>
          )}
          {/* <button>Register</button> */}
          <input type="submit" value="confirm" />
        </form>
      ) : (
        <>
          <h2>Result</h2>
          <Result username={username} email={email} password={password1} />
          <input type="button" value="Edit your information" />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
