import React from "react";

function Reviewer(props) {

    const reviewContainer = {
        width: '200px',
        height: '270px',
        borderRadius: '16px',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 15.5px)',
        gridTemplateRows: 'repeat(10, 18.5px)',
        gap: '5px',
        backgroundColor: '#EDEFEE',

        // Dummy font
        fontFamily: "karla, sans-serif",
        Color: '#333333',
        lineHeight: '1.15',
        fontSize: '12px'
    }

    const scoreStyle = {
        gridColumn: '2 / span 3',
        gridRowStart: '2',
        alignSelf: 'center',
        justifySelf: 'center'
    }

    const imageStyle = {
        gridColumn: '2 / span 3',
        gridRow: '3 / span 3',
        width: '62px',
        height: '70px',
        borderRadius: '5px'
    }

    const nameStyle = {
        gridColumn: '6 / span 5',
        gridRowStart: '4'
    }

    const reviewStyle = {
        gridColumn: '2 / span 8',
        gridRowStart: '6',
        marginTop: '8px',
        fontSize: '12px'
    }

    return (
        <figure style={reviewContainer} data-color="black">
            <h3 style={scoreStyle}>{props.score}</h3>
                <img src={props.imageSource} alt={`${props.name}'s review`}
                    style={imageStyle}/>
            <h5 style={nameStyle}>{props.name}</h5>
                <p style={reviewStyle}>{props.review}</p>
        </figure>
    );
}

export default Reviewer;