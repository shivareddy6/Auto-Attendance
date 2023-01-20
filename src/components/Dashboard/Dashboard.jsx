import React from "react";
import DashboardCard from "./DashboardCard";
import SchoolIcon from "@mui/icons-material/School";
import DonutChart from "./DountChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faUserPen,
  faStar,
  faAtom,
  faFlaskVial,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import ApexChart from "./DashboardGraph";
import { Card, CardContent } from "@mui/material";
import { padding } from "@mui/system";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard--name">Dashboard</h2>
      <p className="dashboard--welcome">Welcome to Auto Attendance System</p>
      <div className="all-dashboard--cards">
        <DashboardCard
          header={{
            icon: <FontAwesomeIcon icon={faGraduationCap} />,
            title: "Total Students",
            text: 5,
          }}
          body={
            <FontAwesomeIcon
              icon={faUser}
              style={{ width: "100%", minHeight: "80%" }}
            />
          }
        />

        <DashboardCard
          header={{
            icon: <FontAwesomeIcon icon={faUserPen} />,
            title: "Total Attendance",
            text: "20/10",
          }}
          body={<DonutChart present={20} absent={10} />}
        />

        <DashboardCard
          header={{
            icon: <FontAwesomeIcon icon={faStar} />,
            title: "Class Average",
            text: "82%",
          }}
          body={<DonutChart present={82} absent={18} />}
        />

        <DashboardCard
          header={{
            icon: <FontAwesomeIcon icon={faFlaskVial} />,
            title: "Total Subjects",
            text: "2",
          }}
          body={
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ width: "100%", minHeight: "80%" }}
            />
          }
        />
      </div>

      <div
        style={{
        
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "30px",
        }}
      >
        <Card variant="outlined" sx={{ minWidth: 275 }} className="dashboard--graph">
          <CardContent>
            <p className="dashboard--graph--text">Monthly Report</p>
            <ApexChart className="dashboard--apexchart" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
