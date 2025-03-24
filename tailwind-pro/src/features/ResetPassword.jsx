import { useState } from "react";
import { useParams, useNavigate } from "react-router";

const ResetPassword = () => {
  const { token } = useParams(); // Get token from URL
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Step 1: Find user by reset token
    const response = await fetch(`https://67b69e6007ba6e5908412007.mockapi.io/users?resetToken=${token}`);
    const users = await response.json();
    console.log(users)
    if (users.length === 0) {  setMessage("Invalid or expired token.");  }
    else {
    // Step 2: Update password and clear reset token
    await fetch(`https://67b69e6007ba6e5908412007.mockapi.io/users/${users[0].id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...users[0] , password: newPassword, resetToken: "" })   });
      setMessage("Password reset successful! Redirecting...");     
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
