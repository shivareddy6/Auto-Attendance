import { Grid } from '@mui/material';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar';
import Sidenav from './components/SideBar';

function App() {
  return (
    <div className="app">
      <div className="side-bar-container">
        <Sidenav />
      </div>
      
      <div className="main-container">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
