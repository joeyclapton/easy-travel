import React from "react";
import { Link } from "react-router-dom";

import S from "./Card-style";
import Icon from "../et-icon/Icon";

/**
 * Componente responsável pelos cards
 * Attrs - {Object}
 */
const Card = ({ data }) => {
    const {
        title,
        description,
        icon,
        button: { route, label, disabled }
    } = data;

    return (
        <S.container>
            <S.icon>
                <Icon width="48" height="48" src={icon} />
            </S.icon>
            <header>
                <S.title>{title}</S.title>
            </header>
            <div>
                <S.description>{description}</S.description>
            </div>
            <Link to={route}>
                <S.button disabled={disabled}>
                    <span>{label}</span>
                </S.button>
            </Link>
        </S.container>
    );
};

export default Card;
