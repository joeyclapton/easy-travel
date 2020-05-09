import React from "react";
import S from "./Register-style";
const Register = () => {
    return (
        <S.container>
            <form action="">
                <S.containerInput>
                    <label htmlFor="name">Nome Completo</label>
                    <input id="name" type="text" placeholder="Nome Completo" />
                </S.containerInput>
                <S.containerInput>
                    <label htmlFor="name">Data Nascimento</label>
                    <input id="name" type="date" placeholder="Nome Completo" />
                </S.containerInput>
                <S.containerInput>
                    <label htmlFor="name">CPF</label>
                    <input
                        id="name"
                        type="number"
                        placeholder="Nome Completo"
                    />
                </S.containerInput>
                <S.containerInput>
                    <label htmlFor="name">Orgão expedidor</label>
                    <input id="name" type="text" placeholder="Nome Completo" />
                </S.containerInput>
                <S.containerInput>
                    <label htmlFor="name">Nome Completo</label>
                    <input id="name" type="text" placeholder="Nome Completo" />
                </S.containerInput>
                <S.containerInput>
                    <label htmlFor="name">Nome Completo</label>
                    <input id="name" type="text" placeholder="Nome Completo" />
                </S.containerInput>
                <S.containerInput>
                    <label htmlFor="name">Nome Completo</label>
                    <input id="name" type="text" placeholder="Nome Completo" />
                </S.containerInput>
                <S.containerInput>
                    <label htmlFor="name">Nome Completo</label>
                    <input id="name" type="text" placeholder="Nome Completo" />
                </S.containerInput>
            </form>
        </S.container>
    );
};
export default Register;
