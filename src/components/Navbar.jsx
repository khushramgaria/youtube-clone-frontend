import React from 'react'
import FormInput from '../UI/FormInput'
import Button from '../UI/Button'
import { useNavigate, useLocation } from 'react-router-dom';
import profile from "../assets/profile-img.png"
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response);

      if (response.data.statusCode === 200) {
        localStorage.clear();
        console.log("User Logout Successfully");
        navigate("/login")
      }
    } catch (error) {
      console.log("catch error");
      console.log(error);
    }
  };

  return (
    <>
        <div className='flex justify-between items-center pt-2 pb-3 border-b'>
            <div></div>
            <div>
                <FormInput type="search" placeholder="Search..." onChange="" />
            </div> 
            <div className='mr-8 flex items-center gap-4'> 
                <AiOutlineVideoCameraAdd className='text-white text-3xl cursor-pointer hover:text-red-700' />
                {location.pathname === "/home" ? (
                  <Link to="/userprofile">
                    <img src={profile} className='w-10 cursor-pointer' />
                  </Link>
                ) : (
                  <Button title="Logout" onClick={logoutHandler} />
                )}
            </div>
        </div>
    </>
  )
}

export default Navbar