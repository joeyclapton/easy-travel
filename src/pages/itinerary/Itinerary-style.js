import styled from "styled-components";
import bg from "../../assets/backgrounds/maldives-3220702_960_720.webp";

const Styles = {
    container: styled.section`
        background: linear-gradient(rgba(2, 73, 89, 0.7), rgba(2, 73, 89, 0.7)),
            url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
    `,
    wrapper: styled.section`
        height: 60vh;
        width: 800px;
        padding: 12px;
        background: rgba(237, 237, 237, 0.6);
        border-radius: 8px;
    `,
    step: styled.div.attrs((props) => ({
        visible: props.isVisible ? "block" : "none"
    }))`
        height: calc(100% - 41px - 8px - 30px - 24px);
        display: ${(props) => props.visible};

        h2 {
            text-align: center;
            font-size: 18px;
        }
    `,
    title: styled.h2`
        text-align: center;
        font-size: 22px;
        color: #ffffff;
    `,
    form: styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100% - 41px - 8px - 30px - 24px);
        section {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-top: 48px;

            div {
                display: flex;
                flex-direction: column;
                margin: 8px 0;

                label {
                    margin: 6px 0;
                }
                input {
                    padding: 6px;
                    border-radius: 6px;
                    border: 1px solid #2ab0bf;
                    width: 220px;
                }
            }
            button {
                padding: 8px 24px;
                border-radius: 20px;
                text-transform: uppercase;
                background: #2ab0bf;
                color: #ffffff;
                margin-top: 16px;
                width: fit-content;
            }
        }
    `,
    containerCard: styled.div`
        display: flex;
        justify-content: center;
        margin: 32px 0;
    `,
    wrapperCard: styled.div`
        position: relative;

        img {
            cursor: pointer;
            right: 32px;
            position: absolute;
            bottom: 20px;
        }
    `,
    back: styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            font-size: 16px;
        }

        button {
            padding: 8px 24px;
            border-radius: 20px;
            text-transform: uppercase;
            background: #2ab0bf;
            color: #ffffff;
            margin-top: 16px;
            width: fit-content;
        }
    `
};

export default Styles;
