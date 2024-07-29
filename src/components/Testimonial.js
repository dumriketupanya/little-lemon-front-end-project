import React from "react";
import Reviewer from "./Reviewer";

function Testimonial(props) {

    const outerDetailContainer = {
        height: props.height,
        backgroundColor: props.backgroundColor
    };

    const innerDetailContainer = {
        gridTemplateRows: `repeat(${props.rowCounts}, ${props.rowHeight})`,
        rowGap: props.rowGap,
    };

    const headerStyle = {
        gridColumn: '6 / span 2',
        gridRowStart: '2',
        justifySelf: 'center',
        alignSelf: 'center'
    }

    const reviewerContainerStyle = {
        gridRow: '3 / span 3',
        gridColumn: '3 / span 8',

        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        justifyContent: 'space-between',
        alignItems: 'start'
    }

    const reviewers = [
        {
            id: 1, score: '4.9/5.0', name: 'Emma J.'
            ,review: 'Little Lemon offers outstanding Thai flavors and impeccable service in a warm, inviting atmosphere. A must-visit for authentic Thai cuisine!'
            ,imageSource: `${process.env.PUBLIC_URL}/little-lemon-pic/Emma.jpg`
        },
        {
            id: 2, score: '4.8/5.0', name: 'Alex R.'
            ,review: "Little Lemon stands out with its fresh, flavorful dishes and excellent service. The Pad Thai is the best I've ever had!"
            ,imageSource: `${process.env.PUBLIC_URL}/little-lemon-pic/Alex.jpg`
        },
        {
            id: 3, score: '4.7/5.0', name: 'Sarah L.'
            ,review: "Little Lemon delivers flavorful, beautifully presented Thai dishes in a cozy setting. Highly recommended for both casual and special occasions!"
            ,imageSource: `${process.env.PUBLIC_URL}/little-lemon-pic/Sarah.jpg`
        },
        {
            id: 4, score: '4.8/5.0', name: 'Michael B.'
            ,review: "Exceptional Thai food and attentive service at Little Lemon. A top choice for delicious and authentic cuisine!"
            ,imageSource: `${process.env.PUBLIC_URL}/little-lemon-pic/Michael.jpg`
        }];

    return (
        <section className="outerContainer" style={outerDetailContainer}>
            <article className="innerContainer" style={innerDetailContainer}>
                <h2 style={headerStyle} data-color="yellow">Testimonials</h2>
                <section style={reviewerContainerStyle}>
                    {reviewers.map(reviewer => (
                        <Reviewer
                            key={reviewer.id}
                            score={reviewer.score}
                            imageSource={reviewer.imageSource}
                            name={reviewer.name}
                            review={reviewer.review}
                        />
                    ))}
                </section>
            </article>
        </section>
    )
};

export default Testimonial;