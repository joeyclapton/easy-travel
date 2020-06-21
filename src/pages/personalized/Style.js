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
        width: 100%;
    `,
    form: styled.form`
        background: #ffffff;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        box-shadow: inset 1px 2px 2px 0px rgba(206, 206, 206, 0.13),
            2px 6px 6px #b3add470;
        padding: 16px;
        width: 80%;
        h2 {
            text-align: center;
            font-size: 16px;
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
        section {
            border-right: 2px solid #ed9f05;
            padding: 0 32px;
            width: fit-content;
        }
    `,
    containerInput: styled.div`
        display: flex;
        margin: 8px;
        align-items: center;

        span {
            margin: 0px 6px;
        }
        input {
            border: 1px solid #b3add4;
            padding-left: 8px;
            border-radius: 4px;
            transition: all 0.4s;

            &:focus {
                border-color: #2ab0bf;
            }
        }
    `,
    inputs: styled.div`
        display: flex;
    `,
    card: styled.div`
        margin-left: 32px;
        header {
            h3 {
                font-size: 16px;
                font-weight: 600;
                margin: 16px 0;
            }
        }

        article {
            div {
                img {
                    border-radius: 8px;
                    width: 500px;
                }
            }
            footer {
                width: 500px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: calc((500px / 3) - 10px);
                    margin: 8px;
                    border-radius: 8px;
                    height: 96px;
                }
            }
        }

        footer {
            display: flex;
            justify-content: space-between;
            p {
                font-size: 16px;
            }
        }
    `
};

export default Styles;
