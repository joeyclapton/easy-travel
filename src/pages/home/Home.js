import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/et-card/Card";
import Icon from "../../components/et-icon/Icon";
import ConvertCurrency from "../../components/et-convert-currency/ConvertCurrency";
import S from "./Home-style";

import planeIcon from "../../assets/icons/passagem-aerea.svg";
import techIcon from "../../assets/icons/tecnologia.svg";
import closeIcon from "../../assets/icons/close.svg";
import keyIcon from "../../assets/icons/key.svg";
import mailIcon from "../../assets/icons/mail.svg";
import logo from "../../assets/icons/logo-lettering.svg";

/**
 * Código da página home
 */

const cards = [
    {
        title: "Roteiro Easy Travel",
        button: {
            route: "/roteiro-easy-travel",
            label: "Selecionar roteiro"
        },
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        icon: planeIcon
    },
    {
        title: "Roteiro personalizado",
        button: {
            route: "/roteiro-personalizado",
            label: "Selecionar roteiro"
        },
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        icon: techIcon
    }
];

const Home = () => {
    const [showForm, changeVisibility] = useState(false);
    return (
        <S.container>
            <S.header>
                <Icon src={logo} height="35" />
                <ConvertCurrency />
                <S.menuContainer>
                    <S.menuItem onClick={() => changeVisibility(true)}>
                        Login
                    </S.menuItem>
                    <S.menuItem>
                        <Link to="/cadastro">Cadastrar</Link>
                    </S.menuItem>
                </S.menuContainer>
            </S.header>

            <S.optionsContainer>
                {cards.map((data, index) => (
                    <Card key={index} data={data} />
                ))}
            </S.optionsContainer>
            <S.formContainer show={showForm}>
                <S.form action="">
                    <Icon />
                    <header>
                        <Icon
                            action={() => changeVisibility(false)}
                            width="24"
                            height="24"
                            src={closeIcon}
                        />
                    </header>
                    <h2>Fazer Login</h2>
                    <S.inputContainer>
                        <Icon width="24" height="18" src={mailIcon} />
                        <input
                            type="email"
                            name="email"
                            id="Email"
                            placeholder="E-mail"
                        />
                    </S.inputContainer>
                    <S.inputContainer>
                        <Icon width="24" height="18" src={keyIcon} />
                        <input
                            type="password"
                            name="pwd"
                            id="Pwd"
                            placeholder="Senha"
                        />
                    </S.inputContainer>
                    <S.formFooter>
                        <button
                            type="button"
                            onClick={() => {
                                alert("Logado com sucesso!");
                                changeVisibility(false);
                            }}
                        >
                            Entrar
                        </button>
                        <p>
                            Não possui conta?
                            <a href="/cadastro">Criar conta</a>
                        </p>
                    </S.formFooter>
                </S.form>
            </S.formContainer>
        </S.container>
    );
};

export default Home;
