import styled from "styled-components";

const Styles = {
    card: styled.div.attrs((props) => ({
        image: props.bg
    }))`
        padding: 12px;
        background: linear-gradient(
                4deg,
                rgba(255, 255, 255, 0.6) 0%,
                rgba(0, 0, 0, 0.6) 0%
            ),
            url(${(props) => props.image});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 50%;
        border: 2px solid #ffffff;
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        height: 150px;
        margin: 12px;
        width: 160px;
        transition: all 0.4s;

        &:hover {
            border: 2px solid #ed9f05;
        }

        h2 {
            font-size: 19px;
            color: #ffffff;
        }
    `
};

export default Styles;
