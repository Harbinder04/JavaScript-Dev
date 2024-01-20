import { useState } from "react";
import profileImg from "./Images/profileimg.jpg";
import coverPic from "./Images/banner.png"

function App() {
  // If we have db then we get link of the image by DB.
  const [profilePic, setProfilePic] = useState(profileImg);  
  const [converPic, setCoverPic] = useState(coverPic);
  return (
    <>
      <div className="min-h-screen min-w-screen bg-[#F1F1F1] flex flex-col">
        <div className="mb-10 p-0 h-60 w-full">
          <div className="h-44 w-full m-0 flex flex-wrap">
            <img src={converPic} alt="Cover Image" className="w-full h-full" />
          </div>
          <div className="relative w-full h-0.5">
            <img
              src={profilePic}
              alt="Profile Image"
              className="h-36 w-36 absolute left-1/2 -translate-x-[280px] -translate-y-1/2 border-2 border-[#F1F1F1] rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center m-0 pb-8 font-medium border-b-solid border-b-[2px] border-gray-400">
          <span>Harbinder Singh</span>
          <span className="text-gray-500">Himachal Pradesh</span>
        </div>
        <div className="flex justify-between my-8 mx-16">
          <div className="flex flex-col items-center first-line:m-0 p-0">
            <span>80K</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col items-center first-line:m-0 p-0">
            <span>803K</span>
            <span>Likes</span>
          </div>
          <div className="flex flex-col items-center first-line:m-0 p-0">
            <span>1K</span>
            <span>Photos</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
