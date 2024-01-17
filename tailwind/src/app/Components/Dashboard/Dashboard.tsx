import { logout } from "@/app/store/slice/AuthSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logout());
    router.push("/");
  };
  return (
    <div>
      <div className="h-16 bg-indigo-500 text-white text-xl flex justify-around items-center">
        <h3>User Dashboard</h3>
        <button
          className="bg-slate-50 hover:bg-slate-200 text-indigo-500 font-bold py-2 px-4 rounded text-sm"
          onClick={handelLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
