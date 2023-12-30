import React from 'react';
import Nav from '../Component/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;