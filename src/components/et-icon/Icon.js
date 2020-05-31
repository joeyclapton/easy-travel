import React from "react";

/**
 * Componente que é um ícone
 * Attrs - {Object}
 */
const Icon = ({ src, alt, width, height, action }) => {
    return (
        <img
            alt={alt}
            src={src}
            width={width}
            height={height}
            onClick={action}
        />
    );
};

export default Icon;
