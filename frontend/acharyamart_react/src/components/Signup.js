import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1></h1>
      <h1 style={{ textAlign: "center" }}>Login or Signup to Continue</h1>
      {/* <p>Error message</p> */}
      <Box
        component="form"
        sx={{ textAlign: "center" }}
        noValidate
        autoComplete="off"
        style={{ marginTop: "24px" }}
      >
        <TextField
          id="standard-basic"
          label="Full Name"
          variant="standard"
          required
        />{" "}
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          required
        />{" "}
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          required
        />{" "}
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          required
          full
        />{" "}
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="I agree  all the   "
          name="tc"
        />{" "}
        <a href="#">Terms and Conditions</a> <br />
        <Button
          id="login-button"
          type="submit"
          label="Login"
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => {}}
          required
        >
          Signup
        </Button>
      </Box>
    </>
  );
};

export default Signup;




