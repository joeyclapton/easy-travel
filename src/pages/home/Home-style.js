import styled from "styled-components";
import bg from "../../assets/backgrounds/landscape_2x.jpg";
import bgForm from "../../assets/backgrounds/landscape_1x.png";

const Styles = {
    container: styled.section`
        background: linear-gradient(rgba(2, 73, 89, 0.7), rgba(2, 73, 89, 0.7)),
            url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        width: 100%;
    `,
    header: styled.section`
        display: flex;
        padding: 16px;
        justify-content: space-around;
        align-items: center;
    `,
    optionsContainer: styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        height: calc(100vh - 67px);

        section {
            max-width: 450px;
        }

        @media screen and (min-width: 768px) {
            flex-direction: row;
        }
    `,
    menuContainer: styled.ul`
        display: flex;
    `,
    menuItem: styled.li`
        cursor: pointer;
        margin: 0 8px;
        list-style: none;
        color: #ffffff;
        font-size: 1.6rem;
        font-weight: 600;
    `,
    formContainer: styled.div.attrs((props) => ({
        display: props.show ? "flex" : "none",
    }))`
        display: ${(props) => props.display};
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        @media screen and (min-width: 768px) {
            background: rgba(255, 255, 255, 0.8);
            justify-content: center;
            align-items: center;
        }
    `,
    form: styled.form`
        background: #fff;
        padding: 16px;
        background: linear-gradient(rgba(2, 73, 89, 0.7), rgba(2, 73, 89, 0.7)),
            url(${bgForm});
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;

        header {
            display: flex;
            justify-content: flex-end;

            img {
                cursor: pointer;
            }
        }

        h2 {
            color: #ffffff;
            font-size: 2.4rem;
            font-weight: 500;
            text-align: center;
            margin: 32px 0;
        }

        @media screen and (max-width: 768px) {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        @media screen and (min-width: 768px) {
            border-radius: 12px;
            width: 420px;
        }
    `,
    inputContainer: styled.div`
        position: relative;

        input {
            background-color: transparent;
            border: 0;
            color: #ffffff;
            border-bottom: 1px solid #ffffff;
            padding-left: 36px;
            padding-bottom: 8px;
            width: 100%;
            margin: 16px 0;

            &::placeholder {
                color: #ffffff;
            }
        }

        img {
            position: absolute;
            bottom: 22px;
        }
    `,
    formFooter: styled.footer`
        button {
            width: 100%;
            background: #ed9f05;
            border-radius: 8px;
            padding: 12px;
            color: #024959;
            font-weight: 600;
            margin: 16px 0;
        }
        p {
            color: #ffffff;
            font-weight: 600;
            text-align: center;

            a {
                color: #ed9f05;
                margin-left: 4px;
            }
        }
    `,
};

export default Styles;
