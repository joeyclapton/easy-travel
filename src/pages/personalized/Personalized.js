import React, { useState } from "react";
import S from "./Style";
import Loading from "../../components/et-loading/Loading";

const Personalized = () => {
    const [loading, setLoading] = useState(false);
    const [packages, setPackage] = useState(false);
    const [finish, setFinish] = useState(true);
    const travels = [
        {
            title: "7 dias de Lua de Mel Em Paris",
            img:
                "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile$",
            img2:
                "https://lh3.googleusercontent.com/proxy/UR9U98RaOkqEiE-I6dHoPd2MRiMxUIbqeciLNW5qzv4RTQHtfuTU2IzK0pVXFKAMGIx3kHp2PbOEhX1WXyZKZPyLnY6MTEt35B9VP8mgSZnfRG-y9bWOVU0nLmQq62JV",
            img3:
                "https://cdn.civitatis.com/francia/paris/galeria/arco-triunfo-paris.jpg",
            img4:
                "https://pix10.agoda.net/hotelImages/280/280504/280504_19052220500074664585.jpg?s=1024x768",
            value: "R$23.599,00"
        },
        {
            title:
                "8 dias de paz e autoconhecimento na linda Chapada dos Veadeiros",
            img:
                "https://www.seumochilao.com.br/wp-content/uploads/2016/09/onde-ficar-na-chapada-dos-veadeiros-1.jpg",
            img2:
                "https://lh6.googleusercontent.com/proxy/JgNN1GLRB6roTEfpn2WE8zFe0Z3epto2m8rC-hU2vnSGZvofIcu7v2JQeXeJYtlY7D2hynvjBLA9TWYdMD__YCxQSDM2ZkA74_BLfKsaL4hr2CBby3Bxc6s4EhKWMl7OfMoBJ4FOmGQzR8QPbn3-eyqggaJ0FnYw738yY40sdeC1HT8",
            img3:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAP_aupLnbgRPi5D3-ZBsImkeukPoHRcZhfDVVoxTt4bvleLCr&usqp=CAU",
            img4:
                "https://desviantes.blob.core.windows.net/desviantes/media/adventures/items/2cc7ee9788055b20a38767457bcfca5b.jpg",
            value: "R$2.999,00"
        },
        {
            title: "Semana Santa com a família no Hopi Hari",
            img:
                "https://doity.com.br/media/doity/eventos/evento-23715-banner.png",
            img2:
                "https://www.otempo.com.br/image/contentid/policy:3.1493144:1526730294/image/image.jpg?f=3x2&q=0.6&$p$f$q=4836623",
            img3: "https://www.hopihari.com.br/images/Vurang-2.jpg",
            img4:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5_dJdrhRssxnyOG1kV3gDhYqx2oHZ0eLs_Kq3wgd7vfPtZRQ-&usqp=CAU",
            value: "R$12.500,00"
        }
    ];
    let r = Math.floor(Math.random() * 2) + 0;
    return (
        <S.container>
            <S.form
                action=""
                style={finish ? { display: "block" } : { display: "none" }}
            >
                <div>
                    <h2>Pacotes personalizados</h2>
                </div>
                <div
                    style={{
                        position: "relative",
                        display: "flex"
                    }}
                >
                    <section>
                        <h3>Cidade de saída</h3>
                        <S.containerInput>
                            <span>Cidade origem</span>
                            <input type="text" name="3 estrelas" id="" />
                        </S.containerInput>
                        <h3>Datas</h3>
                        <S.containerInput>
                            <span>Data Ida</span>
                            <input type="date" name="3 estrelas" id="" />
                        </S.containerInput>
                        <S.containerInput>
                            <span>Data Volta</span>
                            <input type="date" name="3 estrelas" id="" />
                        </S.containerInput>
                        <h3>Hotel</h3>
                        <S.containerInput>
                            <input type="radio" name="3 estrelas" id="" />
                            <span>3 estrelas</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="radio" name="3 estrelas" id="" />
                            <span>4 estrelas</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="radio" name="3 estrelas" id="" />
                            <span>5 estrelas</span>
                        </S.containerInput>
                        <h3>Atividades</h3>
                        <S.containerInput>
                            <input type="checkbox" name="3 estrelas" id="" />
                            <span>Atividade ao ar livre</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="checkbox" name="3 estrelas" id="" />
                            <span>Radical</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="checkbox" name="3 estrelas" id="" />
                            <span>Escalada</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="checkbox" name="3 estrelas" id="" />
                            <span>Excursões</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="checkbox" name="3 estrelas" id="" />
                            <span>Cruzeiros</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="checkbox" name="3 estrelas" id="" />
                            <span>Museus</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="checkbox" name="3 estrelas" id="" />
                            <span>Gastrônomico</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="checkbox" name="3 estrelas" id="" />
                            <span>Florestas</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="checkbox" name="3 estrelas" id="" />
                            <span>Safaris</span>
                        </S.containerInput>
                        <h3>Número de passageiros</h3>
                        <S.containerInput>
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                                <option value="">7</option>
                                <option value="">8</option>
                                <option value="">9</option>
                                <option value="">10</option>
                            </select>
                        </S.containerInput>
                        <h3>Motivo da viagem</h3>
                        <S.containerInput>
                            <input type="radio" name="3 estrelas" id="" />
                            <span>Férias</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="radio" name="3 estrelas" id="" />
                            <span>Lua de Mel</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="radio" name="3 estrelas" id="" />
                            <span>Data Especial</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="radio" name="3 estrelas" id="" />
                            <span>Trabalho</span>
                        </S.containerInput>
                        <h3>Transporte</h3>
                        <S.containerInput>
                            <input type="radio" name="3 estrelas" id="" />
                            <span>Carro</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="radio" name="3 estrelas" id="" />
                            <span>Avião</span>
                        </S.containerInput>
                        <S.containerInput>
                            <input type="radio" name="3 estrelas" id="" />
                            <span>Ônibus</span>
                        </S.containerInput>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setLoading(true);
                            }}
                            type="submit"
                        >
                            Buscar pacotes
                        </button>
                    </section>
                    <div
                        style={
                            loading
                                ? {
                                      position: "absolute",
                                      right: "23%",
                                      top: "99px"
                                  }
                                : {}
                        }
                    >
                        {loading ? <Loading /> : ""}
                        {loading
                            ? setTimeout(() => {
                                  setLoading(false);
                                  setPackage(true);
                              }, 5000)
                            : null}
                        <S.card
                            style={
                                !loading && packages
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                        >
                            <header>
                                <h3>Belo Horizonte -> {travels[r].title}</h3>
                            </header>
                            <article>
                                <div>
                                    <img src={travels[r].img} alt="" />
                                    <footer>
                                        <img src={travels[r].img2} alt="" />
                                        <img src={travels[r].img3} alt="" />
                                        <img src={travels[r].img4} alt="" />
                                    </footer>
                                </div>
                            </article>
                            <footer>
                                <p>{travels[r].value}</p>

                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setFinish(false);
                                    }}
                                    style={{
                                        backgroundColor: "#251a9d",
                                        color: "white"
                                    }}
                                >
                                    Compra Rápida BestBank
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href =
                                            "https://easy-travel.netlify.app/finalizar-compra";
                                    }}
                                >
                                    Compra com outro cartão
                                </button>
                            </footer>
                        </S.card>
                    </div>
                </div>
            </S.form>
            <div style={finish ? { display: "none" } : { display: "block" }}>
                <div className="card">
                    <div className="bank-name" title="BestBank">
                        BestBank
                    </div>
                    <div className="chip">
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="vertical top"></div>
                        <div className="vertical bottom"></div>
                    </div>
                    <div className="data">
                        <div className="pan" title="4123 4567 8910 1112">
                            4123 4567 8910 1112
                        </div>
                        <div className="first-digits">4123</div>
                        <div className="exp-date-wrapper">
                            <div className="left-label">EXPIRES END</div>
                            <div className="exp-date">
                                <div className="upper-labels">MONTH/YEAR</div>
                                <div className="date" title="01/17">
                                    01/17
                                </div>
                            </div>
                        </div>
                        <div className="name-on-card" title="John Doe">
                            Joey C M B Santos
                        </div>
                    </div>
                    <div className="lines-down"></div>
                    <div className="lines-up"></div>
                </div>
                <button
                    className="x"
                    onClick={(e) => {
                        e.preventDefault();
                        alert(
                            "Compra realizada com sucesso, Enviaremos um e-mail com mas detalhes sobre a viagem :)"
                        );
                        window.location.href =
                            "https://easy-travel.netlify.app/";
                    }}
                >
                    Comprar
                </button>
            </div>
        </S.container>
    );
};

export default Personalized;
