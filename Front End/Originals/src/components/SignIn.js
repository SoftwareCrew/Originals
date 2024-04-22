import React, { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "yourUsername" && password === "yourPassword") {
      console.log("Login successful!");
      // Perform further actions like redirecting to another page
    } else {
      console.log("Invalid credentials!");
      // Display an error message to the user
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {/* Sign-in form */}
      <h1>Sign In</h1>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default SignIn;
