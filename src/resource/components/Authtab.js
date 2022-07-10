import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {
    Link
} from "react-router-dom";
import Icon from '@mdi/react'
import { mdiMonitorDashboard } from '@mdi/js';
import { mdiRouterWirelessSettings } from '@mdi/js';
import { mdiSprout } from '@mdi/js';
import { mdiAccountBox } from '@mdi/js';
import '../../assets/css/tab-active.css';


function Authtab() {
  return (
    <React.Fragment>
    <Nav className="navbar navbar-expand-lg px-0 mx-4 border-radius-xl mt-3 fixed-bottom" id="navbarBlur" navbar-scroll="true" style={{ backgroundColor : '#fff' }}>
        <div className="container-fluid py-1 px-3">
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <ul className="navbar-nav nav-justified w-100">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link" id="dashboard">
                            <Icon path={mdiMonitorDashboard} size={1} />
                            <br/>
                            Dashboard
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/device" className="nav-link" id="device">
                            <Icon path={mdiRouterWirelessSettings} size={1} />
                            <br/>
                            Perangkat
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/farm" className="nav-link" id="farm">
                            <Icon path={mdiSprout} size={1} />
                            <br/>
                            Kebun
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/profile" className="nav-link" id="profile">
                            <Icon path={mdiAccountBox} size={1} />
                            <br/>
                            Akun
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </Nav>

    {/* Mobile Nav */}
    <Nav className="navbar navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none" style={{ backgroundColor : '#fff' }}>
        <ul className="navbar-nav nav-justified w-100">
        <li className="nav-item">
            <Link to="/dashboard" className="nav-link" id="dashboard">
                <Icon path={mdiMonitorDashboard} size={1} />
                    <br/>
                    Dashboard
                </Link>
            </li>
            
            <li className="nav-item">
                <Link to="/device" className="nav-link" id="device">
                    <Icon path={mdiRouterWirelessSettings} size={1} />
                    <br/>
                    Perangkat
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/farm" className="nav-link" id="farm">
                    <Icon path={mdiSprout} size={1} />
                    <br/>
                    Kebun
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/profile" className="nav-link" id="profile">
                    <Icon path={mdiAccountBox} size={1} />
                    <br/>
                    Akun
                </Link>
            </li>
        </ul>
    </Nav>
    </React.Fragment>
  );
}

export default Authtab;
