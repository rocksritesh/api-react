import axios from "axios";
import React, { useState } from "react";

const Profile = () => {
  const [userdata, setuserdata] = useState();
  const getprofiledata = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const header = {
      headers: { Authorization: `Bearer ${token}` },
    };
    // console.log("ritesh", header);
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)

      .then((res) => {
        setuserdata(res.data);
        console.log("profile data", res);
      })
      .catch((err) => {
        alert("you are not login");
        console.log("error", err);
      });
  };

  const handlelogout = () => {
    setuserdata();
    localStorage.removeItem("token");
    alert("log out succesful");
  };

  return (
    <div>
      <button
        className="bg-sky-200 space-y-2 p-5 rounded-md shadow-md m-10 "
        onClick={getprofiledata}
      >
        get profile{" "}
      </button>
      <button
        className="bg-red-600 space-y-2 p-5 rounded-md shadow-md m-10 "
        onClick={handlelogout}
      >
        Log out{" "}
      </button>
      {userdata && (
        <div>
          <p>NAME: {userdata?.name || "N/A"}</p>
          <p>EMAIL: {userdata?.email || "N/A"}</p>
          <p>ROLE: {userdata?.role || "N/A"}</p>
          <img
            className="rounded-full h-20 w-20"
            src={userdata?.avatar}
            alt="Avatar"
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
