import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {
    Link
} from "react-router-dom";
import Icon from '@mdi/react'
import { mdiHome } from '@mdi/js';
import { mdiSprout } from '@mdi/js';
import { mdiInformation } from '@mdi/js';
import { mdiAccountBox } from '@mdi/js';
import '../../assets/css/tab-active.css';


function Fronttab() {
  return (
    <React.Fragment>
    <Nav className="navbar bg-navbar-theme navbar-expand-lg px-0 mx-4 border-radius-xl mt-3 fixed-bottom" id="navbarBlur" navbar-scroll="true">
        <div className="container-fluid py-1 px-3">
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <ul className="navbar-nav nav-justified w-100">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" id="home">
                            <Icon path={mdiHome} size={1} />
                            <br/>
                            Beranda
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/product" className="nav-link" id="product">
                            <Icon path={mdiSprout} size={1} />
                            <br/>
                            Produk
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about" className="nav-link" id="about">
                            <Icon path={mdiInformation} size={1} />
                            <br/>
                            Tentang Kami
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/login" className="nav-link" id="login">
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
    <Nav className="navbar navbar-light navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none">
        <ul className="navbar-nav nav-justified w-100">
        <li className="nav-item">
            <Link to="/" className="nav-link" id="home">
                <Icon path={mdiHome} size={1} />
                    <br/>
                    Home
                </Link>
            </li>
            
            <li className="nav-item">
                <Link to="/product" className="nav-link" id="product">
                    <Icon path={mdiSprout} size={1} />
                    <br/>
                    Product
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/about" className="nav-link" id="about">
                    <Icon path={mdiInformation} size={1} />
                    <br/>
                    About
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/login" className="nav-link" id="login">
                    <Icon path={mdiAccountBox} size={1} />
                    <br/>
                    Account
                </Link>
            </li>
        </ul>
    </Nav>
    </React.Fragment>
  );
}

export default Fronttab;
