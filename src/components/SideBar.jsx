import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function Sidenav() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  const navData = [
    {
      id: 0,
      icon: <HomeIcon />,
      text: "Home",
      link: "/",
    },
    {
      id: 1,
      icon: <TravelExploreIcon />,
      text: "Explore",
      link: "explore",
    },
    {
      id: 2,
      icon: <BarChartIcon />,
      text: "Statistics",
      link: "statistics",
    },
    {
      id: 3,
      icon: <SettingsIcon />,
      text: "Settings",
      link: "settings",
    },
  ];
  return (
    <div className={open ? "sidenav" : "sidenavClosed"}>
    <h3 className={`logo--name ${open ? "logo--open" : "logo-close"}`}>{open ? "NETRA" : "N"}</h3>
      <button className={"menuBtn"} onClick={toggleOpen}>
        {open ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </button>
      {navData.map((item) => {
        return (
          <NavLink key={item.id} className={"sideitem"} to={item.link}>
            {item.icon}
            <span className={"linkText"}>{item.text}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
