import React from 'react'
import DashboardCard from './DashboardCard';

const Dashboard = () => {
    return ( 
        <div className='dashboard'>
            <h2 className='dashboard--name'>Dashboard</h2>
            <p className='dashboard--welcome'>Welcome to Auto Attendance System</p>
            <div className='all-dashboard--cards'>
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
            </div>
        </div>
     );
}
 
export default Dashboard;