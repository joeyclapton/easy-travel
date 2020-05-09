import React from "react";
import S from "./Register-style";
const Register = () => {
    return (
        <S.container>
            <S.form action="">
                <div>
                    <h2>Crie sua conta com a Easy Travel</h2>
                </div>
                <S.inputs>
                    <S.containerInput style={{ width: "80%" }}>
                        <label htmlFor="name">Nome Completo</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Nome Completo"
                        />
                    </S.containerInput>
                    <S.containerInput>
                        <label htmlFor="datanasc">Data Nascimento</label>
                        <input
                            id="datanasc"
                            type="date"
                            placeholder="Data Nascimento"
                        />
                    </S.containerInput>
                </S.inputs>
                <S.inputs>
                    <S.containerInput>
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="number" placeholder="CPF" />
                    </S.containerInput>
                    <S.containerInput>
                        <label htmlFor="rg">RG</label>
                        <input id="rg" type="text" placeholder="RG" />
                    </S.containerInput>
                    <S.containerInput>
                        <label htmlFor="oe">Orgão expedidor</label>
                        <input
                            id="oe"
                            type="text"
                            placeholder="Orgão expedidor"
                        />
                    </S.containerInput>
                    <S.containerInput>
                        <label htmlFor="uf">UF de emissão</label>
                        <input
                            id="uf"
                            type="text"
                            placeholder="UF de emissão"
                        />
                    </S.containerInput>
                </S.inputs>
                <S.inputs>
                    <S.containerInput>
                        <label htmlFor="CEP">CEP</label>
                        <input
                            id="CEP"
                            type="text"
                            placeholder="Nome Completo"
                        />
                    </S.containerInput>
                    <S.containerInput style={{ width: "80%" }}>
                        <label htmlFor="Endereço">Endereço</label>
                        <input
                            id="Endereço"
                            type="text"
                            placeholder="Nome Completo"
                        />
                    </S.containerInput>
                </S.inputs>
                <S.inputs>
                    <S.containerInput style={{ width: "50%" }}>
                        <label htmlFor="Email">Email</label>
                        <input id="Email" type="email" placeholder="Email" />
                    </S.containerInput>
                    <S.containerInput style={{ width: "50%" }}>
                        <label htmlFor="Telefone">Telefone</label>
                        <input
                            id="Telefone"
                            type="text"
                            placeholder="Telefone"
                        />
                    </S.containerInput>
                </S.inputs>
                <S.inputs>
                    <S.containerInput style={{ width: "50%" }}>
                        <label htmlFor="Senha">Senha</label>
                        <input id="Senha" type="password" placeholder="Senha" />
                    </S.containerInput>
                    <S.containerInput style={{ width: "50%" }}>
                        <label htmlFor="rpeat">Repetir senha</label>
                        <input
                            id="rpeat"
                            type="text"
                            placeholder="Repetir senha"
                        />
                    </S.containerInput>
                </S.inputs>
                <button onClick={(e) => e.preventDefault()} type="submit">
                    Cadastrar
                </button>
            </S.form>
        </S.container>
    );
};
export default Register;
