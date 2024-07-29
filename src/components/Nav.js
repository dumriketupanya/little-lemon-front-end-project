import React from "react";

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
                    <li><a href="/home">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/menu">MENU</a></li>
                    <li><a href="/reservations">RESERVATIONS</a></li>
                    <li><a href="/orderonline">ORDER ONLINE</a></li>
                    <li><a href="/login">LOGIN</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
