import React from "react";

const CardItinerary = ({ title, description, backgroundSrc, action }) => {
    return (
        <section onClick={(event) => action(event)}>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    );
};

export default CardItinerary;
