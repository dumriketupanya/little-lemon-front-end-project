import React from "react";

function ConfirmedBooking() {
    // Define inline styles for the outer and inner containers
    const outerDetailContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "550px",
        backgroundColor: "#FFFFFF",
        minWidth: '1320px',
        margin: '0 auto',
        padding: '20px'
    };

    const innerDetailContainer = {
        display: 'grid',
        gridTemplateRows: `repeat(10, 34px)`,
        rowGap: '10px',
        width: '100%',
        maxWidth: '500px',
        backgroundColor: '#EDEFEE',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        fontSize: '40px',
        color: '#333333',
        textAlign: 'center',
        margin: '0',
        padding: '10px'
    };

    const thankYouStyle = {
        display: 'grid',
        gridRowStart: '3'
    }

    const signatureStyle = {
        display: 'grid',
        gridRowStart: '6',
        justifySelf: 'end',
        transform: 'translateX(-20px)'
    }

    return (
        <div style={outerDetailContainer}>
            <div style={innerDetailContainer}>
                <h2 style={headingStyle}>Booking confirmed</h2>
                <p style={thankYouStyle}>Thank you for your reservation! We appreciate your choice and look forward to serving you. If you have any questions or encounter any issues, please don't hesitate to contact us.</p>
                <h3 style={signatureStyle}>Little Lemon</h3>
            </div>
        </div>
    );
}

export default ConfirmedBooking;
