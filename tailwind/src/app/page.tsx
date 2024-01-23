"use client";
import MasterComponent from "./Components/MasterComponent";
import { Provider } from "react-redux";
import { store } from "./store/slice/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <Provider store={store}>
      <MasterComponent />
    </Provider>
  );
}
