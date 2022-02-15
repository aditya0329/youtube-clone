import React, { useState } from "react";
import { Header } from "ui/Header";
import MediaSlider from "ui/MediaSlider";
import Sidebar from '../ui/Sidebar';

const HomePage = () => {
  const [isToggledSideBar , setIsToggledSideBar ] = useState(true);
  return (
    <div>
      <Header  onClickMenu = {() => setIsToggledSideBar((isToggled) => !isToggled)} />
      <Sidebar toggledSideBar = {isToggledSideBar} />
      <MediaSlider 
        mediaType="TV"
        title="youtube"
        path="/discover/tv"
        params={{with_networks: 213}}
      />
    </div>
  );
};
export default HomePage;
