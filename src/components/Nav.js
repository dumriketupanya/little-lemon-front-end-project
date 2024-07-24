import React from "react";

function Nav() {
    return (
        <nav>
            <h1>Navigation Section</h1>
            <meta name="og:description" content="some description here"/>
            <img src={`${process.env.PUBLIC_URL}/little-lemon-pic/Logo.jpg`} width="204" height="55" alt="Little Lemon Logo"></img>
            <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/menu">MENU</a></li>
                <li><a href="/reservations">RESERVATIONS</a></li>
                <li><a href="/orderonline">ORDER ONLINE</a></li>
                <li><a href="/login">LOGIN</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
