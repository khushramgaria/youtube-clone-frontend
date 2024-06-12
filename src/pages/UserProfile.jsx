import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserProfile() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [avatar, setAvatar] = useState("")
    const [coverImage, setCoverImage] = useState("")

    const getCurrentUserServer = "http://localhost:8000/api/v1/users/current-user";

    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        const fetchCurrentUser = async () => {
            if (accessToken) {
                try {
                    const response = await axios.get(getCurrentUserServer, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
    
                    console.log("response: ", response);
                    setName(response.data.data.fullName)
                    setUsername(response.data.data.username)
                    setAvatar(response.data.data.avatar)
                    setCoverImage(response.data.data.coverImage)
                } catch (error) {
                    console.log("Error while fetching data. ", error);
                }
            }
        };
    
        fetchCurrentUser();
    }, [accessToken])

    return (
        <Wrapper>
            <div>
                <img src={coverImage} className="w-full h-48 object-cover" />
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex items-center gap-4 p-4">
                <div>
                    <img src={avatar} className="w-32 h-32 object-contain" />
                </div>
                <div className="text-white">
                    <p className="font-bold text-2xl">{name}</p>
                    <p>{username}</p>
                    <p>00 Subscribers . 00 Subscribed</p>
                </div>
                </div>
                <div className="mr-16">
                <Button title="Edit Profile" onClick={() => navigate("/editprofile")} />
                </div>
            </div>
            <div className="flex justify-around text-center mx-3 font-bold">
                <h5 className="bg-white w-full py-2 mx-1 cursor-pointer hover:underline">
                Videos
                </h5>
                <h5 className="bg-white w-full py-2 mx-1 cursor-pointer hover:underline">
                Playlists
                </h5>
                <h5 className="bg-white w-full py-2 mx-1 cursor-pointer hover:underline">
                Tweets
                </h5>
                <h5 className="bg-white w-full py-2 mx-1 cursor-pointer hover:underline">
                Following
                </h5>
            </div>
        </Wrapper>
  );
}

export default UserProfile;
