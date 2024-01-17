import { login } from "@/app/store/slice/AuthSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handelLogin = () => {
    const hardcodedData = { username: "user123", password: "user@123" };
    // toast.success("Successfully logged in !");
    if (hardcodedData.username !== "" && hardcodedData.password !== "") {
      router.push("/dashboard");
    } else {
      console.log("incorrect ");
    }
  };
  return (
    <div className=" flex bg-indigo-500 h-screen ">
      <div className="m-auto bg-white w-96 p-8 rounded-md shadow">
        <h2 className="text-indigo-700 font-bold text-2xl mb-2">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="text-indigo-700 block mb-2">
              Username
            </label>
            <input
              className="border border-indigo-300 rounded-md w-full p-2 focus:outline-none focus:border-indigo-500"
              placeholder="Enter Username"
              type="text"
              required
              // name="username"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-indigo-700 block mb-2 "
            >
              Password
            </label>
            <input
              className="border border-indigo-300 w-full p-2 focus:outline-none focus:border-indigo-500 rounded-md"
              placeholder="Enter password"
              type="password"
              required
              // name="password"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-700 text-white w-full rounded-md p-2 hover:bg-indigo-800 "
            onClick={handelLogin}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
