import React, { useState } from "react";
import S from "./Home-style";
import Icon from "../../components/et-icon/Icon";
import svgType from "./logo-mastercard-mobile.svg";

const Buy = () => {
    const [number, setNumber] = useState(0);

    const setDisplay = (event) => {
        setNumber(event.target.value);
    };

    return (
        <S.container>
            <S.form action="">
                <div>
                    <h2>Finalizar compra do pacote</h2>
                </div>
                <S.inputs>
                    <S.containerInput style={{ width: "100%" }}>
                        <label htmlFor="name">Nome Completo</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Nome Completo"
                        />
                    </S.containerInput>
                </S.inputs>
                <S.inputs>
                    <S.containerInput>
                        <label htmlFor="CEP">Número cartão</label>

                        <section
                            style={
                                number.length >= 5
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                        >
                            <Icon width="36" height="24" src={svgType} />
                        </section>
                        <input
                            id="CEP"
                            type="text"
                            placeholder="Número  cartão"
                            onChange={setDisplay}
                        />
                    </S.containerInput>
                    <S.containerInput style={{ width: "80%" }}>
                        <label htmlFor="Endereço">Data de vencimento</label>
                        <input
                            id="Endereço"
                            type="date"
                            placeholder="Data de vencimento"
                        />
                    </S.containerInput>
                    <S.containerInput>
                        <label htmlFor="CEP">CVV</label>
                        <input id="CEP" type="text" placeholder="CVV" />
                    </S.containerInput>
                </S.inputs>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        alert(
                            "Compra realizada com sucesso, Enviaremos um e-mail com mas detalhes sobre a viagem :)"
                        );
                        window.location.href =
                            "https://easy-travel.netlify.app/";
                    }}
                    type="submit"
                >
                    Finalizar Compra
                </button>
            </S.form>
        </S.container>
    );
};

export default Buy;
