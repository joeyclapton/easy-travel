import React from "react";

import Step from "../et-step/Step";

import S from "./Steps-styles";

const Steps = ({ total, current }) => {
    return (
        <S.container>
            {total.map((item, index) => {
                return (
                    <Step
                        key={item + index}
                        value={index}
                        total={total.length}
                        current={current}
                    />
                );
            })}
        </S.container>
    );
};

export default Steps;
