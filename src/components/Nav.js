import React from "react";
import {Link} from "react-router-dom";

function Nav(props) {

    const outerDetailContainer = {
        height: props.height,
        backgroundColor: props.backgroundColor,

        display: 'flex',
        alignItems: 'center'
    };

    const innerDetailContainer = {
        alignItems: 'center',
    };

    const logoStyle = {
        width: "204px",
        height: "55px",
        gridColumn: '3 / span 2',
        alignSelf: 'center',
    }

    const navStyle = {
        display: 'flex',
        listStyle: 'none',
        gridColumn: '5 / 11',
        marginLeft: '30px',
        justifyContent: 'space-between',

        fontSize: '20px',
        fontFamily: 'Karla, sans-serif',
        textDecoration: 'none'
    }

    return (
        <nav className="outerContainer" style={outerDetailContainer}>
            <div className="innerContainer" style={innerDetailContainer}>
                <img src={`${process.env.PUBLIC_URL}/little-lemon-pic/Logo.jpg`}
                alt="Little Lemon Logo"
                style={logoStyle}/>
                <ul style={navStyle}>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/menu">MENU</Link></li>
                    <li><Link to="/reservations">RESERVATIONS</Link></li>
                    <li><Link to="/orderonline">ORDER ONLINE</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
