import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useLoginMutation } from "../services/products";
import { storeToken, getToken, removeToken } from "../services/localStorage";
import { setUserToken,unSetUserToken } from "../features/authSlice";
import { setUserInfo,unSetUserInfo } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";



const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginMutation();
  const dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const res = await loginUser(actualData);
    if (res.error) {
      console.log(res.error);
    } else {
      let {access_token}=getToken()
      dispatch(setUserToken({access_token:access_token}))
      dispatch(setUserInfo({email:actualData.email,name:""}))

      storeToken(res.data.token);

    }
  };

  useEffect(()=>{
    // let {access_token}=getToken()
        // dispatch(setUserToken({access_token:access_token}))
    dispatch(setUserInfo({email:"Happynath@gm.com",name:""}))
  // },[access_token,dispatch])
  },[])

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
        onSubmit={submitHandler}
      >
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          required
          name="email"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          required
          full
          name="password"
        />{" "}
        <br />
        <Button
          id="login-button"
          type="submit"
          label="Login"
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => {}}
          required
        >
          Login
        </Button>
        <NavLink
          to="/home
        "
          sx={{ ml: 2 }}
        >
          Forget Password
        </NavLink>
      </Box>
    </>
  );
};

export default Login;




// <div class="d-flex justify-content-around" key={i}>
// <div className="card" style={{width:'18rem'}}>
//   <img className="card-img-top" src={"http://127.0.0.1:8000"+ prod.image} alt="Card image cap"/>
 
 
//   <div className="card-body">
//     <h5 className="card-title">
//       {prod.title}
//     </h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Add To Cart</a>
//   </div>
// </div>
// </div>