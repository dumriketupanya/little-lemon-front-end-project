import React from "react";

function About(props) {

    const outerDetailContainer = {
        height: props.height,
        backgroundColor: props.backgroundColor
    };

    const innerDetailContainer = {
        gridTemplateRows: `repeat(${props.rowCounts}, ${props.rowHeight})`,
        rowGap: props.rowGap,
    };

    const headerStyle = {
        gridColumn: '3 / span 4',
        gridRowStart: '4'
    };

    const subHeaderStyle = {
        gridColumn: '3 / span 2',
        gridRowStart: '5',
        transform: 'translateY(20px)'
    };

    const aboutStyle = {
        gridColumn: '3 / span 4',
        gridRowStart: '8',
        marginRight: '40px'
    };

    const imgFounderFirstStyle = {
        width: 'auto',
        height: '341px',
        gridColumn: '7 / span 3',
        gridRowStart: '5',
        borderRadius: '16px'
    }

    const imgFounderSecondStyle = {
        width: 'auto',
        height: '341px',
        gridColumn: '9 / span 3',
        gridRowStart: '3',
        transform: 'translateX(-40px)',
        borderRadius: '16px'
    }

    return (
        <section className="outerContainer" style={outerDetailContainer}>
            <div className="innerContainer"  style={innerDetailContainer} data-color="black">
            <h1 style={headerStyle}>Little Lemon</h1>
                <h2 style={subHeaderStyle}>Thailand</h2>
                <p style={aboutStyle}>
                Mario and Adrian, founders of Little Lemon, blend Mario's traditional Thai cooking expertise with Adrian's hospitality skills. Their menu features classic Thai dishes with modern twists, and they host cultural events and cooking classes, making Little Lemon a top destination for Thai cuisine lovers.
                </p>
                <img src={`${process.env.PUBLIC_URL}/little-lemon-pic/Mario and Adrian B.jpg`}
                    alt="Founder1"
                    style={imgFounderFirstStyle}/>
                <img src={`${process.env.PUBLIC_URL}/little-lemon-pic/Mario and Adrian A.jpg`}
                    alt="Founder2"
                    style={imgFounderSecondStyle}/>
            </div>
        </section>
    )
};

export default About;