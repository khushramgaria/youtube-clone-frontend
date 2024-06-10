import React, { useState } from "react";
import FormInput from "../UI/FormInput";
import FormButton from "../UI/FormButton";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginUser = () => {
  const navigate = useNavigate()
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsernameOrMail = (name, value) => {
    setUserid(value);
  };
  const onChangePassword = (name, value) => {
    setPassword(value);
  };

  const loginServer = "http://localhost:8000/api/v1/users/login";

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(loginServer, {
        username: userid,
        email: userid,
        password,
      });

      console.log(response);

      if (response.data.statusCode === 200) {
        console.log("User Login Successfully");
        navigate("/userprofile")
        localStorage.setItem("accessToken", response.data.data.accessToken);
      }
    } catch (error) {
      console.log("catch error");
      console.log(error);
    }
  };

  
  return (
    <>
      <div>
        <div className="text-center my-4">
          <h1 className="text-5xl font-bold uppercase underline text-white">
            Login
          </h1>
        </div>
        <div className="justify-center">
          <form>
            <div className="flex justify-center py-8">
              <FormInput
                label="Username or Email"
                placeholder="Username or Email Here..."
                type="text"
                onChange={onChangeUsernameOrMail}
              />
            </div>
            <div className="flex justify-center pb-2">
              <FormInput
                label="Password"
                placeholder="Password Here..."
                type="password"
                onChange={onChangePassword}
              />
            </div>
            <div className="flex justify-center my-8">
              <FormButton title="Login" onClick={loginHandler} />
            </div>
            <div className="flex justify-center gap-2">
              <h1 className="text-white">New User ? </h1>
              <Link to="/" className="text-blue-400 underline">Register Here</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
