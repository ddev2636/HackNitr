import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    Name: "",
    description: "",
    phone: "",
    company: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) RegisterStartup(formValue);
  };
  const RegisterStartup = async (values) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    console.log(values);

    const savedUserResponse = await fetch(
      "http://localhost:5001/startup/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    //console.log(savedUserResponse);
    const savedUser = await savedUserResponse.json();
    console.log(savedUser);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // const register = async (data) => {
  //   const savedUserResponse = await fetch(
  //     "http://localhost:5001/startup/register",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     }
  //   );
  //   console.log(savedUserResponse);
  //   register();
  // };

  const { email, password, company, Name, phone, description } = formValue;

  return (
    <Grid
      container
      component="main"
      sx={{
        width: "100vw",
        mb: "10px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="password"
              autoFocus
              onChange={handleChange}
              value={password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="company"
              label="Company Name"
              name="company"
              autoComplete="company"
              autoFocus
              onChange={handleChange}
              value={company}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="Name"
              autoComplete="name"
              autoFocus
              onChange={handleChange}
              value={Name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="company"
              autoFocus
              onChange={handleChange}
              value={phone}
            />

            <TextField
              fullWidth
              margin="normal"
              id="outlined-textarea"
              label="Product Description"
              placeholder="Placeholder"
              name="description"
              multiline
              onChange={handleChange}
              value={description}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
