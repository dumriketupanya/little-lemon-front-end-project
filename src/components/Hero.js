import React from "react";
import { useNavigate } from "react-router-dom";

function Hero(props) {

    const navigate = useNavigate();

    const outerDetailContainer = {
        height: props.height,
        backgroundColor: props.backgroundColor,
    };

    const innerDetailContainer = {
        gridTemplateRows: `repeat(${props.rowCounts}, ${props.rowHeight})`,
        rowGap: props.rowGap,
    };

    const headerStyle = {
        gridColumn: '3 / span 4',
        gridRowStart: '4',
        whiteSpace: 'nowrap',
    };

    const subHeaderStyle = {
        gridColumn: '3 / span 4',
        gridRowStart: '6',
        whiteSpace: 'nowrap',
        overflow: 'visible',
        transform: 'translateY(15px)',
    };

    const descriptionStyle = {
        gridColumn: '3 / span 4',
        gridRowStart: '9',
        overflow: 'visible',
        transform: 'translateY(15px)',
    };

    const picStyle = {
        width: '383px',
        height: '429px',
        borderRadius: '16px',
        gridColumn: '8 /  span 4',
        transform: 'translateX(-70px)',
        gridRowStart: '3',
    };

    const buttonStyle = {
        gridRowStart: '17',
        gridColumnStart: '3'
    };

    return (
        <header className="outerContainer" style={outerDetailContainer}>
            <div className="innerContainer" style={innerDetailContainer}>
                <h1 style={headerStyle} data-color="yellow">Little Lemon</h1>
                <h2 style={subHeaderStyle} data-color="white">Thailand</h2>
                <article style={descriptionStyle} data-color="white">
                Savor the rich flavors of our restaurant, where traditional Asian cuisine meets culinary artistry. Each dish features fresh ingredients and authentic recipes. Join us for a delightful and unforgettable dining experience.
                </article>
                <img src={`${process.env.PUBLIC_URL}/little-lemon-pic/Main.jpg`}
                alt="Restaurant"
                style={picStyle}></img>
                <button type="button"
                    button-style="homepage"
                    style={buttonStyle}
                    onClick={() => navigate('/reservations')}>
                        Reserve a Table</button>
            </div>
        </header>
    )
};

export default Hero;