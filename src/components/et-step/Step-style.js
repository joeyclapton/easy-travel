import styled from "styled-components";

const Styles = {
    step: styled.li.attrs((props) => ({
        background: props.isCurrent ? "#ED9F05" : "#fff",
        width: props.isLast ? "0" : "100%"
    }))`
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        margin: 8px;
        background: ${(props) => props.background};
        width: 25px;
        height: 25px;
        border-radius: 50%;
        position: relative;

        &::after {
            content: "";
            display: block;
            width: ${(props) => props.width};
            height: 2px;
            position: absolute;
            background: ${(props) => props.background};
            left: 20px;
        }
    `
};

export default Styles;
