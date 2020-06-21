import React, { useState, useEffect } from "react";
import api from "../../configs/api";
import icon from "./icon.png";
import arrow from "./arrow.png";
import Icon from "../et-icon/Icon";
import S from "./Style";

const ConvertCurrency = () => {
    const base = "BRL";

    const [to, setTo] = useState("");
    const [amount, setAmount] = useState(1);
    const [response, setResponse] = useState({});
    const [countries, setCountries] = useState([]);

    const getInformation = () => setResponse(response);

    const setValue = (event) => {
        setAmount(event.target.value);
    };

    return (
        <S.form action="#">
            <S.title>Conversor de Moedas</S.title>
            <S.inputContainer>
                <Icon src={icon} width="24" height="24" />
                <input
                    id={base}
                    value={amount}
                    onChange={setValue}
                    type="number"
                />
            </S.inputContainer>
            <S.icon src={arrow} width="16" height="16" />
            <S.value>${(amount / 5.31).toFixed(2)}</S.value>
            <S.select name="" id="">
                <option value="USD">DÓLAR</option>
            </S.select>
        </S.form>
    );
};

export default ConvertCurrency;
