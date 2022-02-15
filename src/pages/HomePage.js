import React, { useState } from "react";
import { Header } from "ui/Header";
import Sidebar from '../ui/Sidebar';

const HomePage = () => {
  const [isToggledSideBar , setIsToggledSideBar ] = useState(true);
  return (
    <div>
      <Header  onClickMenu = {() => setIsToggledSideBar((isToggled) => !isToggled)} />
      <Sidebar toggledSideBar = {isToggledSideBar} />
    </div>
  );
};
export default HomePage;
