import React from "react";

import S from "./Card-travel-style";

/**
 * Componente responsável pelos cards de viagens
 * Attrs - {Object}
 */
const CardTravel = ({ title, image, action, desc }) => {
    return (
        <>
            <S.card bg={image} onClick={() => action()}>
                <h2>{title}</h2>
            </S.card>
            <p style={{ position: "relative", top: "20px" }}>{desc}</p>
        </>
    );
};

export default CardTravel;
