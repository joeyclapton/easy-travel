import React from "react";

import S from "./Step-style";

const Step = ({ value, total, current }) => {
    const last = value + 1 === total;
    const isCurrent = value === current;
    // const under = current - value - 1;
    return (
        <S.step isCurrent={isCurrent} isLast={last}>
            <span>{value}</span>
        </S.step>
    );
};

export default Step;
