"use client";
import MasterComponent from "./Components/MasterComponent";
import { Provider } from "react-redux";
import { store } from "./store/slice/store";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <MasterComponent />
    </Provider>
  );
}
