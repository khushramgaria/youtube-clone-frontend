import React, { useState } from "react";
import FormInput from "../UI/FormInput";
import FormButton from "../UI/FormButton";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState();
  const [coverImage, setCoverImage] = useState();

  const onChangeUsername = (name, value) => {
    setUsername(value);
  };
  const onChangeName = (name, value) => {
    setName(value);
  };
  const onChangeEmail = (name, value) => {
    setEmail(value);
  };
  const onChangePassword = (name, value) => {
    setPassword(value);
  };
  const onChangeAvatar = (name, value) => {
    setAvatar(value);
  };
  const onChangeCoverImage = (name, value) => {
    setCoverImage(value);
  };

  const registerServer = "http://localhost:8000/api/v1/users/register"

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('fullName', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('avatar', avatar);
    formData.append('coverImage', coverImage);

    try {
        const response = await axios.post(registerServer, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        console.log(response);
  
        if(response.data.statusCode === 200) {
          console.log("User Register Successfully");
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
            Register
          </h1>
        </div>
        <div className="justify-center">
          <form>
            <div className="flex gap-4 justify-center py-8">
              <FormInput
                label="Username"
                placeholder="Username Here..."
                type="text"
                onChange={onChangeUsername}
              />
              <FormInput
                label="Name"
                placeholder="Full Name Here..."
                type="text"
                onChange={onChangeName}
              />
            </div>
            <div className="flex gap-4 justify-center pb-8">
              <FormInput
                label="Email"
                placeholder="Email Here..."
                type="email"
                onChange={onChangeEmail}
              />
              <FormInput
                label="Password"
                placeholder="Password Here..."
                type="password"
                onChange={onChangePassword}
              />
            </div>
            <div className="flex gap-4 justify-center">
              <FormInput
                label="Avatar"
                placeholder=""
                type="file"
                onChange={onChangeAvatar}
              />
              <FormInput
                label="Cover Image"
                placeholder=""
                type="file"
                onChange={onChangeCoverImage}
              />
            </div>
            <div className="flex justify-center my-8">
              <FormButton title="Register" onClick={submitHandler} />
            </div>
            <div className="flex justify-center gap-2">
              <h1 className="text-white">Already have an account ? </h1>
              <Link to="/login" className="text-blue-400 underline">Login Here</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
