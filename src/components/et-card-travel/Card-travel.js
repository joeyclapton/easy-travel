import React from "react";

import S from "./Card-travel-style";

/**
 * Componente responsável pelos cards de viagens
 * Attrs - {Object}
 */
const CardTravel = ({ title, image, action }) => {
    return (
        <S.card bg={image} onClick={() => action()}>
            <h2>{title}</h2>
        </S.card>
    );
};

export default CardTravel;
