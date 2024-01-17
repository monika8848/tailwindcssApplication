"use client";
import MasterComponent from "./Components/MasterComponent";
import { Provider } from "react-redux";
import { store } from "./store/slice/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <MasterComponent />
      <ToastContainer />
    </Provider>
  );
}
