import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import DonutChart from "./DountChart";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DashboardCard = () => {
  const data = {
    header: {
      icon: <SchoolIcon />,
      title: "Total Students",
      numStudents: 5,
    },
    body: <DonutChart />,
  };
  return (
    <div className="dashboard-card">

      <div className="dashboard-card--header">
        <div className="dashboard-card--icon">{data.header.icon}</div>
        <div className="dashboard-card--title">
            <p className="title-name">{data.header.title}</p>
            <p className="title-count">{data.header.numStudents}</p>
        </div>
      </div>

    <div className="dashboard-card--body">
        {data.body}
    </div>

    <div className="dashboard-card--footer">
        <p>More info</p>
        <ArrowForwardIcon />
    </div>
    </div>
  );
};

export default DashboardCard;
