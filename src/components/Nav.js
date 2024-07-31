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
        <nav className="outerContainer" style={outerDetailContainer} aria-label="Main navigation">
            <div className="innerContainer" style={innerDetailContainer}>
                <img src={`${process.env.PUBLIC_URL}/little-lemon-pic/Logo.jpg`}
                alt="Little Lemon Logo"
                style={logoStyle}/>
                <ul style={navStyle} role="menubar">
                <li role="none"><Link to="/home" role="menuitem" aria-current={window.location.pathname === '/home' ? 'page' : undefined}>HOME</Link></li>
                    <li role="none"><Link to="/about" role="menuitem" aria-current={window.location.pathname === '/about' ? 'page' : undefined}>ABOUT</Link></li>
                    <li role="none"><Link to="/menu" role="menuitem" aria-current={window.location.pathname === '/menu' ? 'page' : undefined}>MENU</Link></li>
                    <li role="none"><Link to="/reservations" role="menuitem" aria-current={window.location.pathname === '/reservations' ? 'page' : undefined}>RESERVATIONS</Link></li>
                    <li role="none"><Link to="/orderonline" role="menuitem" aria-current={window.location.pathname === '/orderonline' ? 'page' : undefined}>ORDER ONLINE</Link></li>
                    <li role="none"><Link to="/login" role="menuitem" aria-current={window.location.pathname === '/login' ? 'page' : undefined}>LOGIN</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
