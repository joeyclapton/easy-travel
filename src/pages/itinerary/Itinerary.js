import React, { useState } from "react";

import CardItinerary from "../../components/et-card-itinerary/CardItinerary";
import Steps from "../../components/et-steps/Steps";
import CardTravel from "../../components/et-card-travel/Card-travel";
import Loading from "../../components/et-loading/Loading";
import icon from "./whatsapp.png";
import S from "./Itinerary-style";

/**
 * Código da página de roteiros easy travel
 */

const steps = [0, 1, 2, 3, 4];
const data = [];
const cards = {
    "step-1": {
        cards: [
            {
                title: "Solo",
                image:
                    "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874__340.jpg",
                action: () => {}
            },
            {
                title: "Com amigos",
                image:
                    "https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915__340.jpg",
                action: () => {}
            },
            {
                title: "Família",
                image:
                    "https://cdn.pixabay.com/photo/2017/10/03/01/12/family-2811003__340.jpg",
                action: () => {}
            },
            {
                title: "Casal",
                image:
                    "https://cdn.pixabay.com/photo/2017/06/20/22/14/men-2425121__340.jpg",
                action: () => {}
            }
        ]
    },
    "step-2": {
        cards: [
            {
                title: "Férias",
                image:
                    "https://cdn.pixabay.com/photo/2016/09/07/11/37/tropical-1651423__340.jpg",
                action: () => {}
            },
            {
                title: "Lua de mel",
                image:
                    "https://cdn.pixabay.com/photo/2017/09/08/15/09/luggage-2729013__340.jpg",
                action: () => {}
            },
            {
                title: "Negócios",
                image:
                    "https://cdn.pixabay.com/photo/2016/11/19/21/01/analysis-1841158__340.jpg",
                action: () => {}
            },
            {
                title: "Data especial",
                image:
                    "https://cdn.pixabay.com/photo/2017/11/10/22/44/christmas-2937873__340.jpg",
                action: () => {}
            }
        ]
    },
    final: {
        cards: [
            {
                title: "Nova York ",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAv_-U8oySRogKl_hxbrch9H_U98ox3LL1BkHZ0To45DMr-66x&usqp=CAU",
                action: () =>
                    (window.location =
                        "https://easy-travel.netlify.app/finalizar-compra"),
                desc: "12 dias com amigos em Nova York"
            },
            {
                title: "Belo Horizonte",
                image:
                    "https://lh3.googleusercontent.com/proxy/A6kcmOhPmqsDfWQcSEXJUoThF6k5dQwRIRtVz9EquwaE_cQmkKAlCRdZqdz1994rRoN0Yso6_5BcZ7I3DLiSETZNm0z86JgxO_3r1U-aDMwmlYJAdgmuf_GIU5ZHZZkEcq9i7WY81YATT79u8lAjnq4ECYiwC-VNDJ75bf0ZoY3W6GLuxw0oj03mokdq3LJxPX6Xi-BP9R1BepLD86w8F7BkN_rGqdzPAfCpZao",
                action: () => {
                    window.location =
                        "https://easy-travel.netlify.app/finalizar-compra";
                },
                desc: "8 dias na capital mineira (BH) "
            },
            {
                title: "Porto Seguro",
                image:
                    "https://www.temporadalivre.com/blog-media/posts/cover/10170/size_800_onde-se-hospedar-em-porto-seguro-9791a34b.jpg",
                action: () => {
                    window.location =
                        "https://easy-travel.netlify.app/finalizar-compra";
                },
                desc:
                    "10 dias de praia e festas em Porto Seguro, Arraial d'Ajuda e Trancoso"
            },
            {
                title: "Chapada dos veadeiros",
                image:
                    "https://www.seumochilao.com.br/wp-content/uploads/2016/09/onde-ficar-na-chapada-dos-veadeiros-1.jpg",
                action: () => {
                    window.location =
                        "https://easy-travel.netlify.app/finalizar-compra";
                },
                desc:
                    "8  dias de paz e autoconhecimento na linda Chapada dos Veadeiros"
            }
        ]
    }
};

const shareWhatsapp = (message, url) => {
    window.open(
        `https://api.whatsapp.com/send?text=${message}%0A%0A${encodeURIComponent(
            url
        )}`
    );
};

const Itinerary = () => {
    const [currentStep, setStep] = useState(0);
    const [dateGone, setDateGone] = useState("");
    const [dateBack, setDateBack] = useState("");
    const [city, setCity] = useState("");
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <S.container>
            <S.wrapper>
                <S.title>Roteiro Easy Travel</S.title>
                <section>
                    <Steps total={steps} current={currentStep} />
                </section>
                <S.step isVisible={currentStep === 0}>
                    <S.form>
                        <section>
                            <div>
                                <label htmlFor="">Data ida </label>
                                <input
                                    type="date"
                                    onChange={(e) =>
                                        setDateGone(e.target.value)
                                    }
                                    name=""
                                    id=""
                                />
                            </div>
                            <div>
                                <label htmlFor="">Data volta</label>
                                <input
                                    type="date"
                                    onChange={(e) =>
                                        setDateBack(e.target.value)
                                    }
                                    name=""
                                    id=""
                                />
                            </div>
                            <div>
                                <label htmlFor="">Cidade origem:</label>
                                <input
                                    onChange={(e) => setCity(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <button
                                onClick={() => {
                                    if (dateGone && dateBack && city) {
                                        setStep(currentStep + 1);
                                        data.push({
                                            dateGone: dateGone,
                                            dateBack: dateBack,
                                            city: city
                                        });
                                    }
                                }}
                                type="button"
                            >
                                Próximo
                            </button>
                        </section>
                    </S.form>
                </S.step>
                <S.step isVisible={currentStep === 1}>
                    <h2>Escolha o tipo de viagem</h2>
                    <S.containerCard>
                        {cards["step-1"].cards.map((item) => {
                            return (
                                <CardTravel
                                    title={item.title}
                                    image={item.image}
                                    action={() => {
                                        setType(item.title);
                                        data.push({
                                            type: item.title
                                        });
                                        setStep(currentStep + 1);
                                    }}
                                />
                            );
                        })}
                    </S.containerCard>
                </S.step>
                <S.step isVisible={currentStep === 2}>
                    <h2>Escolha o motivo da viagem</h2>
                    <S.containerCard>
                        {cards["step-2"].cards.map((item) => {
                            return (
                                <CardTravel
                                    title={item.title}
                                    image={item.image}
                                    action={() => {
                                        setType(item.title);
                                        data.push({
                                            reason: item.title
                                        });
                                        setStep(currentStep + 1);
                                        setLoading(true);
                                    }}
                                />
                            );
                        })}
                    </S.containerCard>
                </S.step>
                <S.step isVisible={currentStep === 3}>
                    {loading ? <Loading /> : ""}
                    {currentStep === 3
                        ? setTimeout(() => {
                              setStep(currentStep + 1);
                              setLoading(false);
                          }, 5000)
                        : null}
                </S.step>
                <S.step isVisible={currentStep === 4}>
                    <h2>Roteiros encontrados 🥳🎉</h2>
                    <S.containerCard>
                        {cards["final"].cards.map((item) => {
                            const message = `Venha comigo nesta incrível viagem para: ${item.title}`;
                            return (
                                <S.wrapperCard>
                                    <CardTravel
                                        title={item.title}
                                        image={item.image}
                                        action={() => {
                                            setType(item.title);
                                            data.push({
                                                reason: item.title
                                            });
                                            setStep(currentStep + 1);
                                            setLoading(true);
                                        }}
                                        desc={item.desc}
                                    />
                                    <img
                                        onClick={() =>
                                            shareWhatsapp(
                                                message,
                                                window.location.href
                                            )
                                        }
                                        src={icon}
                                        width="24"
                                        height="24"
                                        alt="Compartilhar viagem no Whatsapp"
                                    />
                                </S.wrapperCard>
                            );
                        })}
                    </S.containerCard>
                    <S.back>
                        <h3>Não gostou dos destinos? 😔</h3>
                        <button
                            onClick={() => {
                                setStep(0);
                                setDateBack("");
                                setDateGone("");
                                setCity("");
                            }}
                        >
                            Refazer roteiro
                        </button>
                    </S.back>
                </S.step>
            </S.wrapper>
        </S.container>
    );
};

export default Itinerary;
