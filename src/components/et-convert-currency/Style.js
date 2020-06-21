import styled from "styled-components";

const Styles = {
    title: styled.p`
        color: white;
        position: absolute;
        top: 3px;
        left: 51px;
    `,
    form: styled.form`
        display: flex;
        align-items: flex-end;
        position: relative;
    `,
    inputContainer: styled.div`
        display: flex;
        flex-direction: column;

        input {
            width: 50px;
            padding: 0 4px;
            border-radius: 4px;
            border: 1px solid #ffffdd;
        }
    `,
    icon: styled.img`
        transform: rotate(90deg);
        display: inline-block;
        margin: 0 16px;
    `,
    value: styled.p`
        font-size: 18px;
        position: relative;
        top: 2px;
        color: #fff;
    `,
    select: styled.select`
        padding: 0 6px;
        border-radius: 4px;
        border: 1px solid #ffffdd;
        margin-left: 6px;
        background: #ffffff;
    `
};

export default Styles;
