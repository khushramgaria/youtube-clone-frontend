import React from "react";
import cvrimg from "../assets/White Minimalist Corporate Personal Profile LinkedIn Banner.png";
import avatarimg from "../assets/profile-img.png";
import Button from "../UI/Button";
import Wrapper from "../components/Wrapper";

function UserProfile() {
  return (
    <Wrapper>
      <div>
        <img src={cvrimg} className="w-full h-48 object-cover" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-4 p-4">
          <div>
            <img src={avatarimg} className="w-32 h-32 object-contain" />
          </div>
          <div className="text-white">
            <p className="font-bold text-2xl">Name</p>
            <p>Username</p>
            <p>00 Subscribers . 00 Subscribed</p>
          </div>
        </div>
        <div className="mr-16">
          <Button title="Edit Profile" onClick="" />
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
