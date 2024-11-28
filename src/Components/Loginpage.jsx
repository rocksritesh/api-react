import axios from "axios";
import React, { useState } from "react";

const Loginpage = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const handlestate = () => {
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        alert("Login successful");
        console.log("Login successful", res);
      })
      .catch((err) => {
        alert("Login failed");
        console.log("Login failed", err);
      });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-sky-200 space-y-2 p-5 rounded-md shadow-md w-80 h-60">
        <p className="bg-white rounded-md shadow-md text-center">Login Page</p>

        <div>
          <p>Email</p>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className="border rounded-md shadow-md w-full p-2"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            className="border rounded-md shadow-md w-full p-2"
          />
        </div>
        <button
          onClick={handlestate}
          className="bg-blue-600 px-4 py-2 rounded-md shadow-md text-white w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Loginpage;
