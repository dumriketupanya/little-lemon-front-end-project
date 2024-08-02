import React from "react";
import HighlightFood from "./HightlightFood";
import { useNavigate } from "react-router-dom";

function Highlight(props) {

    const navigate = useNavigate();

    const outerDetailContainer = {
        height: props.height,
        backgroundColor: props.backgroundColor
    };

    const innerDetailContainer = {
        gridTemplateRows: `repeat(${props.rowCounts}, ${props.rowHeight})`,
        rowGap: props.rowGap,
    };

    const headerStyle = {
        gridColumn: '3 / span 5',
        gridRowStart: '2'
    };

    const highlightContainerStyle = {
        gridRow: '3 / span 6',
        gridColumn: '3 / span 8',
        gap: '20px',

        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(277px, 1fr))',
        justifyContent: 'space-between',
        alignItems: 'start'
    };

    const linkName = "Order the Delivery 🛒";

    const foods = [
        {
            id: 1,
            name: "Spicy Dragon Roll",
            description: "A tantalizing sushi roll filled with fresh tuna, avocado, and cucumber, topped with spicy mayo and crispy tempura flakes for an added crunch.",
            price: "$12.99",
            foodImage: `${process.env.PUBLIC_URL}/little-lemon-pic/Spicy Dragon Roll.jpg`,
            linkName: linkName,
        },
        {
            id: 2,
            name: "Thai Basil Chicken",
            description: "Succulent chicken stir-fried with fresh basil, bell peppers, and onions in a savory garlic sauce, served over a bed of jasmine rice.",
            price: "$14.99",
            foodImage: `${process.env.PUBLIC_URL}/little-lemon-pic/Thai basil chicken.jpg`,
            linkName: linkName,
        },
        {
            id: 3,
            name: "Mango Sticky Rice",
            description: "A classic Thai dessert featuring sweet sticky rice paired with ripe mango slices and drizzled with rich coconut milk.",
            price: "$7.99",
            foodImage: `${process.env.PUBLIC_URL}/little-lemon-pic/Mango sticky rice.jpg`,
            linkName: linkName,
        }
    ];

    const buttonStyle = {
        gridRowStart: '2',
        gridColumnStart: '9'
    };

    return (
        <main className="outerContainer" style={outerDetailContainer}>
            <article className="innerContainer" style={innerDetailContainer}>
                <h1 style={headerStyle} data-color="black">This weeks specials!</h1>
                <figure style={highlightContainerStyle}>
                    {foods.map(food => (
                        <HighlightFood
                            key={food.id}
                            name={food.name}
                            description={food.description}
                            price={food.price}
                            foodImage={food.foodImage}
                            linkName={food.linkName}
                        />
                    ))}
                </figure>
                <button type="button"
                    button-style="homepage"
                    style={buttonStyle}
                    onClick={() => navigate('/menu')}>
                        Orders Now!</button>
            </article>
        </main>
    )
};

export default Highlight;