import styled from "styled-components";

const Styles = {
    container: styled.section`
        height: 100vh;
    `,
    containerInput: styled.div`
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
    `,
};

export default Styles;
