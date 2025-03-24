import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();    
    // Step 1: Find user by email
    const response = await fetch(`https://67b69e6007ba6e5908412007.mockapi.io/users?email=${email}`);
    const users = await response.json();

    if (users.length === 0) {  setMessage("Email not found."); return;   }

    // Step 2: Generate reset token
    const token = Math.random().toString(36).substr(2);

    // Step 3: Save token in JSON Server
    await fetch(`https://67b69e6007ba6e5908412007.mockapi.io/users/${users[0].id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...users[0],resetToken: token }) });

    setMessage(`Reset link generated: http://localhost:3000/reset-password/${token}`);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
