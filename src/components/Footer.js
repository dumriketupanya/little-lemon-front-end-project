import React from "react";

function Footer(props) {
    return (
        <footer>
            <img src={`${process.env.PUBLIC_URL}/little-lemon-pic/restaurant.jpg`} width="185" height="322" alt="restaurant"></img>
            <h2>Doormat Navigation</h2>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderonline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <h2>Contact</h2>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </footer>
    )
};

export default Footer;