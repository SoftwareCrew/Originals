import React from "react";

function SignIn() {
  const handleLogin = () => {
    console.log("Login clicked!");
  };
  return (
    <div>
      {/* Sign-in form */}
      <h1>Sign In</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default SignIn;
