import React, { useState } from 'react'
import Wrapper from '../components/Wrapper'
import FormInput from '../UI/FormInput'
import Button from '../UI/Button'
import axios from 'axios'

function EditProfile() {
    const [basicDetailUpdate, setBasicDetailUpdate] = useState(false)
    const [imagesUpdate, setImagesUpdate] = useState(false)
    const [changePassword, setChangePassword] = useState(true)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState()
    const [coverImage, setCoverImage] = useState()
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const basicDetailHandler = () => {
        setBasicDetailUpdate(true)
        setImagesUpdate(false)
        setChangePassword(false)
    }
    const imagesUpdateHandler = () => {
        setBasicDetailUpdate(false)
        setImagesUpdate(true)
        setChangePassword(false)
    }
    const changePasswordHandler = () => {
        setBasicDetailUpdate(false)
        setImagesUpdate(false)
        setChangePassword(true)
    }

    const onChangeName = (name, value) => {
        setName(value)
    }
    const onChangeEmail = (name, value) => {
        setEmail(value)
    }

    const updateAccountDetailsServer = "http://localhost:8000/api/v1/users/update-account"

    const accessToken = localStorage.getItem("accessToken")

    const updateBasicDetailsHandler = async(e) => {
        e.preventDefault()

        try {
            const response = await axios.patch(updateAccountDetailsServer, {
                fullName: name,
                email 
            },{
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })

            console.log(response);
  
            if(response.data.statusCode === 200) {
                console.log("Basic Details Updated Successfully");
            }
        } catch (error) {
            console.log("Error while updating basic details. ", error)
        }
    }

    const onChangeAvatar = (name, value) => {
        setAvatar(value)
    }
    const onChangeCoverImage = (name, value) => {
        setCoverImage(value)
    }

    const updateAvatarServer = "http://localhost:8000/api/v1/users/avatar"
    const updateCoverImageServer = "http://localhost:8000/api/v1/users/cover-image"

    const updateImagesHandler = async (e) => {
        e.preventDefault()

        const avatarFormData = new FormData()
        avatarFormData.append('avatar', avatar)

        const coverImageFormData = new FormData()
        coverImageFormData.append('coverImage', coverImage)

        try {
            let avatarResponse, coverImageResponse
            if (avatar) {
                avatarResponse = await axios.patch(updateAvatarServer, avatarFormData,{
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })
            }
            if (coverImage) {
                coverImageResponse = await axios.patch(updateCoverImageServer, coverImageFormData,{
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })
            }

            console.log("avatarResponse: ", avatarResponse)
            console.log("coverImageResponse: ", coverImageResponse)

            if(avatarResponse.data.statusCode === 200) {
                console.log("Avatar Updated Successfully");
            }
            if(coverImageResponse.data.statusCode === 200) {
                console.log("Cover Image Updated Successfully");
            }
        } catch (error) {
            console.log("Error while updating avatar and coverImage. ", error)
        }
    }

    const onChangeOldPassword = (name, value) => {
        setOldPassword(value)
    }
    const onChangeNewPassword = (name, value) => {
        setNewPassword(value)
    }

    const updatePasswordServer = "http://localhost:8000/api/v1/users/change-password"

    const updatePasswordHandler = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(updatePasswordServer, {
                oldPassword,
                newPassword
            },{
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })

            console.log("response: ", response)

            if(response.data.statusCode === 200) {
                console.log("Password Updated Successfully");
            }
        } catch (error) {
            console.log("Error while updating password. ", error)
        }
    }


  return (
    <Wrapper>
        <h1 className='text-center text-white underline font-bold text-3xl my-3'>Edit Your Profile</h1>

        <div className="flex justify-around text-center mx-3 font-bold">
            <button 
            className={`${basicDetailUpdate ? 'bg-white' : 'text-white'} border w-full py-2 mx-1 cursor-pointer hover:underline`}
            onClick={basicDetailHandler}
            >
                Basic Detail
            </button>

            <button
            className={`${imagesUpdate ? 'bg-white' : 'text-white'} border w-full py-2 mx-1 cursor-pointer hover:underline`}
            onClick={imagesUpdateHandler}
            >
                Avatar & Cover Image
            </button>
            
            <button
            className={`${changePassword ? 'bg-white' : 'text-white'} border w-full py-2 mx-1 cursor-pointer hover:underline`}
            onClick={changePasswordHandler}
            >
                Change Password
            </button>    
        </div>

        {basicDetailUpdate && (
            <>
            <div className='flex justify-around mx-3 p-8'>
                <FormInput 
                label="Name"
                placeholder="Full Name Here..."
                type="text"
                onChange={onChangeName}
                
                />

                <FormInput 
                label="Email"
                placeholder="Email Here..."
                type="text"
                onChange={onChangeEmail}
                />          
            </div>
            <div className='text-center'>
                <Button title="Update Basic Details" onClick={updateBasicDetailsHandler} />
            </div>
            </>
        )}

        {imagesUpdate && (
            <>
                <div className='flex justify-around mx-3 p-8'>
                    <FormInput 
                    label="Avatar"
                    type="file"
                    onChange={onChangeAvatar}
                    />

                    <FormInput 
                    label="Cover Image"
                    type="file"
                    onChange={onChangeCoverImage}
                    />          
                </div>
                <div className='text-center'>
                    <Button title="Update Images" onClick={updateImagesHandler} />
                </div>
            </>
        )}

        {changePassword && (
            <>
                <div className='flex justify-around mx-3 p-8'>
                    <FormInput 
                    label="Old Password"
                    placeholder="Old Password Here...."
                    type="text"
                    onChange={onChangeOldPassword}
                    />

                    <FormInput 
                    label="New Password"
                    placeholder="New Password Here...."
                    type="text"
                    onChange={onChangeNewPassword}
                    />          
                </div>
                <div className='text-center'>
                    <Button title="Update Password" onClick={updatePasswordHandler} />
                </div>
            </>
        )}
    </Wrapper>
  )
}

export default EditProfile