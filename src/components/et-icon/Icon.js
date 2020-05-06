import React from "react";

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
