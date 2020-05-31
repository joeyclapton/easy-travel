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
                title: "Barcelona",
                image:
                    "https://cdn.pixabay.com/photo/2019/01/28/14/43/barcelona-3960566__340.jpg",
                action: () => {}
            },
            {
                title: "Praga",
                image:
                    "https://cdn.pixabay.com/photo/2016/11/21/14/02/prague-1845560__340.jpg",
                action: () => {}
            },
            {
                title: "Colômbia",
                image:
                    "https://cdn.pixabay.com/photo/2020/05/28/11/47/colombia-5230927_960_720.jpg",
                action: () => {}
            },
            {
                title: "Egito",
                image:
                    "https://cdn.pixabay.com/photo/2017/03/20/14/33/pyramids-2159286__340.jpg",
                action: () => {}
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
