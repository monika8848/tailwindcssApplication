import { login } from "@/app/store/slice/AuthSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  const handlePasswordVisible = (e: React.MouseEvent) => {
    e.preventDefault();
    setPasswordHidden(!passwordHidden);
  };

  const handelLogin = () => {
    if (username === "user" && password === "user@123") {
      console.log("correct ");
      dispatch(login());
      toast.success("logged in succesfully");
      setTimeout(() => {
        router.push("/dashboard");
      }, 5000);
    } else {
      console.log("incorrect ");
      toast.error("Incorrect credentials");
    }
  };
  return (
    <div className=" flex bg-indigo-500 h-screen ">
      <div className="m-auto bg-white w-96 p-8 rounded-md shadow">
        <h2 className="text-indigo-700 font-bold text-2xl mb-2">Login</h2>
        <div className="mb-4">
          <label className="text-indigo-700 block mb-2">Username</label>
          <input
            className="border border-indigo-300 rounded-md w-full p-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter Username"
            type="text"
            required
            name="username"
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-indigo-700 block mb-2 ">Password</label>
          <input
            className="border border-indigo-300 w-full p-2 focus:outline-none focus:border-indigo-500 rounded-md"
            placeholder="Enter password"
            type={passwordHidden ? "password" : "text"}
            required
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            name="password"
          />
          <button
            onClick={(e: React.MouseEvent) => handlePasswordVisible(e)}
            className="absolute top-10 right-1.5 icon-position "
          >
            {passwordHidden ? (
              <i className="fas fa-eye"></i>
            ) : (
              <i className="fas fa-eye-slash"></i>
            )}
          </button>
        </div>
        <button
          type="submit"
          className="bg-indigo-700 text-white w-full rounded-md p-2 hover:bg-indigo-800 "
          onClick={handelLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
