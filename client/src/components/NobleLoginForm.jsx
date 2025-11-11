import { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";

export default function NobleLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    // 🧪 Mock API call
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        setMessage("✅ Login successful!");
      } else {
        setMessage("❌ Invalid credentials");
      }
    }, 1000);
  };

  return (

      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
         Noble LoginForm
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            fullWidth
            required
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            fullWidth
            required
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, py: 1.2 }}
          >
            Log In
          </Button>
        </form>

        {message && (
          <Typography variant="body2" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
      </Paper>
   
  );
}
