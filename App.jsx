import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectTab, setSelectTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="flex">
        <SideBar selectTab={selectTab} setSelectTab={setSelectTab} />
        <div className="w-full">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
