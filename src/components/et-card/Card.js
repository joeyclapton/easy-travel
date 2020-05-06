import React from "react";
import S from "./Card-style";
import Icon from "../et-icon/Icon";

const Card = ({ data }) => {
    const {
        title,
        description,
        icon,
        button: { action, label },
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
            <S.button onClick={action}>
                <span>{label}</span>
            </S.button>
        </S.container>
    );
};

export default Card;
