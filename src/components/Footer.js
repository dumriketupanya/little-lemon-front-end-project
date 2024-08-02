import React from "react";
import {Link} from "react-router-dom";

function Footer(props) {

    const outerDetailContainer = {
        height: props.height,
        backgroundColor: props.backgroundColor
    };

    const innerDetailContainer = {
        display: 'grid',
        gridTemplateRows: `repeat(${props.rowCounts}, ${props.rowHeight})`,
        rowGap: props.rowGap,
    };

    const footerImageStyle = {
        width: '161px',
        height: '279px',
        gridColumn: '3 / 5',
        gridRowStart: '4',
        borderRadius: '16px'
    };

    const doorMatHeadingStyle = {
        gridRowStart: '6',
        gridColumn: '5 / span 1',
        lineHeight: '1.2'
    };

    const contactHeadingStyle = {
        gridRowStart: '6',
        gridColumn: '7 / span 1',
    };

    const socialHeadingStyle = {
        gridRowStart: '6',
        gridColumn: '9 / span 2',
        overflow: 'visible'
    };

    const doorMatStyle = {
        listStyle: 'none',
        gridRowStart: '9',
        gridColumnStart: '5',
        lineHeight: '1.85'
    };

    const contactStyle = {
        listStyle: 'none',
        gridRowStart: '9',
        gridColumnStart: '7',
        lineHeight: '1.85',
    };

    const socialMediaStyle = {
        listStyle: 'none',
        gridRowStart: '9',
        gridColumnStart: '9',
        lineHeight: '1.85',
    };

    return (
         <footer className="outerContainer" style={outerDetailContainer} aria-label="Footer">
            <div className="innerContainer" style={innerDetailContainer} data-color="white">
                <img
                    src={`${process.env.PUBLIC_URL}/little-lemon-pic/restaurant.jpg`}
                    alt="Restaurant view"
                    style={footerImageStyle}
                />
                <h4 style={doorMatHeadingStyle} aria-label="Doormat Navigation">Doormat Navigation</h4>
                <ul style={doorMatStyle} role="navigation" aria-label="Doormat Navigation Links">
                    <li><Link to="/home" aria-label="Go to Home page">Home</Link></li>
                    <li><Link to="/about" aria-label="Go to About page">About</Link></li>
                    <li><Link to="/menu" aria-label="Go to Menu page">Menu</Link></li>
                    <li><Link to="/reservations" aria-label="Go to Reservations page">Reservations</Link></li>
                    <li><Link to="/orderonline" aria-label="Go to Order Online page">Order Online</Link></li>
                    <li><Link to="/login" aria-label="Go to Login page">Login</Link></li>
                </ul>
                <h4 style={contactHeadingStyle} aria-label="Contact Information">Contact</h4>
                <ul style={contactStyle} aria-label="Contact Information">
                    <li>Address</li>
                    <li>Phone</li>
                    <li>Email</li>
                </ul>
                <h4 style={socialHeadingStyle} aria-label="Social Media">Social Media</h4>
                <ul style={socialMediaStyle} aria-label="Social Media Links">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;