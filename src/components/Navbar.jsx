import React from 'react'
import FormInput from '../UI/FormInput'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()

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
        navigate("/")
      }
    } catch (error) {
      console.log("catch error");
      console.log(error);
    }
  };

  return (
    <>
        <div className='flex justify-between items-center pt-1 pb-3'>
            <div></div>
            <div>
                <FormInput type="search" placeholder="Search..." onChange="" />
            </div> 
            <div className='mr-16'> 
                <Button title="Logout" onClick={logoutHandler} />
            </div>
        </div>
    </>
  )
}

export default Navbar