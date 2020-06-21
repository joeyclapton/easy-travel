import styled from "styled-components";
import bg from "../../assets/backgrounds/landscape_2x.jpg";

const Styles = {
    container: styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(rgba(2, 73, 89, 0.7), rgba(2, 73, 89, 0.7)),
            url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `,
    form: styled.form`
        background: #ffffff;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        box-shadow: inset 1px 2px 2px 0px rgba(206, 206, 206, 0.13),
            2px 6px 6px #b3add470;
        padding: 16px;

        h2 {
            text-align: center;
            margin: 16px 0;
            font-size: 18px;
        }
        button {
            margin: 0 16px;
            margin-top: 8px;
            padding: 12px 32px;
            border-radius: 8px;
            background: #ed9f05;
            color: #024959;
            font-weight: 700;
            text-transform: uppercase;
        }
    `,
    containerInput: styled.div`
        display: flex;
        flex-direction: column;
        margin: 8px;
        position: relative;

        label {
            margin: 6px 0;
        }
        input {
            border: 1px solid #b3add4;
            padding-left: 6px;
            border-radius: 4px;
            height: 30px;
            transition: all 0.4s;

            &:focus {
                border-color: #2ab0bf;
            }
        }

        section {
            position: absolute;
            right: 0;
        }
    `,
    inputs: styled.div`
        display: flex;
    `
};

export default Styles;
