import styled from "styled-components";
import dictionary from "../../styles/style-dictionary";

const Styles = {
    container: styled.section`
        background-color: rgba(237, 237, 237, 0.6);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        position: relative;
        margin: 0 12px;
        margin-top: 38px;
        transition: all 0.4s;
    `,
    title: styled.h2`
        color: #ffffff;
        font-size: 1.6rem;
    `,
    description: styled.p`
        color: #ffffff;
        margin: 16px 0;
    `,
    button: styled.button`
        background: linear-gradient(
                180deg,
                rgba(245, 204, 112, 0.468) 21.35%,
                rgba(255, 255, 255, 0) 100%
            ),
            #ed9f05;
        padding: 8px 16px;
        border-radius: 16px;

        span {
            color: #024959;
            font-size: 14px;
        }
    `,
    icon: styled.div`
        position: absolute;
        right: -5px;
        top: -30px;
    `,
};

export default Styles;
