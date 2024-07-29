import React from "react";

function Footer(props) {

    const outerDetailContainer = {
        height: props.height,
        backgroundColor: props.backgroundColor
    };

    const innerDetailContainer = {
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
        <footer className="outerContainer" style={outerDetailContainer}>
            <div className="innerContainer" style={innerDetailContainer} data-color="white">
            <img src={`${process.env.PUBLIC_URL}/little-lemon-pic/restaurant.jpg`}
                alt="restaurant" style={footerImageStyle}></img>
                <h4 style={doorMatHeadingStyle}>Doormat Navigation</h4>
                    <ul style={doorMatStyle}>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/orderonline">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                <h4 style={contactHeadingStyle}>Contact</h4>
                    <ul style={contactStyle}>
                        <li>Address</li>
                        <li>Phone</li>
                        <li>Email</li>
                    </ul>
                <h4 style={socialHeadingStyle}>Social Media</h4>
                    <ul style={socialMediaStyle}>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
            </div>
        </footer>
    )
};

export default Footer;