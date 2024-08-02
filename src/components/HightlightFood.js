import React from "react";

function HighlightFood(props) {

    const foodHighlightContainer = {
        height: '466px',
        display: 'grid',
        gridTemplateRows: 'repeat(20, 23px)',
        gridTemplateColumns: 'repeat(12, 23px)',
        borderRadius: '16px',
        backgroundColor: '#EDEFEE',

        // Dummy font
        fontFamily: "karla, sans-serif",
        Color: '#333333',
        lineHeight: '1.15',
        fontSize: '12px'
    };

    const nameStyle = {
        gridColumn: '2 / span 7',
        gridRowStart: '11',
        alignSelf: 'center'
    };

    const priceStyle = {
        gridColumn: '9 / span 3',
        gridRowStart: '11',
        justifySelf: 'end',
        alignSelf: 'center',
        fontWeight: '900'
    };

    const descriptionStyle = {
        gridColumn: '2 / span 10',
        gridRow: '13 / span 6',
    };

    const linkName = {
        gridColumn: '2 / span 10',
        gridRowStart: '20'
    };

    const imageStyle = {
        width: '277px',
        height: '200px',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
    }

    return (
        <figure style={foodHighlightContainer}>
            <img src={props.foodImage} alt={`${props.name}'s review`}
             style={imageStyle}/>
            <h3 style={nameStyle} data-color="black">{props.name}</h3>
                <p style={priceStyle} data-color="oldRose">{props.price}</p>
                <p style={descriptionStyle} data-color="black">{props.description}</p>
            <h5 style={linkName} data-color="black">{props.linkName}</h5>
        </figure>
    );
};

export default HighlightFood;