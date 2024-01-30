import React from "react";
// import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const optionTerrenos = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const botMessage = createChatBotMessage("Estas son las zonas en las que se encuentran actualmente nuestro lotes:", {
            widget: "loteosLinks",
        });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
    const moreTerrenos = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const botMessage = createChatBotMessage("Contamos con terrenos disponibles en las siguientes zonas", {
            widget: "loteosLinks",
        });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const formasDePago = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const textInnerHtml = (
            <ul style={{ marginLeft: "20px" }}>
                <li>
                    Plan D: Con esta herramienta financiera podés abonar el 50% del valor del lote y comenzar a disfrutarlo de forma
                    inmediata. ¡Vos decidís cómo y cuándo pagar el resto!
                </li>
            </ul>
        );

        const textInnerHtml2 = (
            <>
                <ul style={{ marginLeft: "20px" }}>
                    <li>
                        Financiación personalizada: En cada caso particular se acuerda el anticipo, la cantidad de cuotas y el valor de las
                        mismas con uno de nuestros respresentantes de venta.
                    </li>
                </ul>
            </>
        );

        const botMessage = createChatBotMessage("Contamos con las siguientes opciones:");

        // const botMessage = createChatBotMessage(
        //     "Contamos con un método de financiación personalizado en donde se acuerda el anticipo, la cantidad de cuotas y el valor de las mismas con uno de nuestros representantes de venta."
        // );

        const botMessage2 = createChatBotMessage(textInnerHtml2, { delay: 1000 });
        const botMessage3 = createChatBotMessage(textInnerHtml, { delay: 5500, widget: "optionReturn" });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage, botMessage2, botMessage3],
        }));
    };

    const contacto = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const linkToWhatsapp = (
            <>
                Podés contactarte con nosotros escribiéndonos un Whatsapp al
                <span>
                    <a
                        style={{ display: "flex", alignItems: "center", color: "blue" }}
                        href='https://bit.ly/3Z7pApP'
                        target='_blank'
                        rel='noreferrer'
                    >
                        221-5079256
                        <svg width='15px' height='15px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g id='Interface / External_Link'>
                                <path
                                    id='Vector'
                                    d='M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11'
                                    stroke='blue'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </g>
                        </svg>
                    </a>
                </span>
            </>
        );

        const botMessage = createChatBotMessage(linkToWhatsapp, { widget: "optionReturn" });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const forest = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const chatbotMessage = (
            <>
                Es una herramienta de inversión con la que podés hacer crecer tu capital de forma rápida y segura invirtiendo en lotes. Hay
                dos modalidades de renta:
            </>
        );

        const botMessage = createChatBotMessage(chatbotMessage);

        const botMessage2 = createChatBotMessage(
            <>
                <b>Renta Fija</b>: Invertís en el lote que querés y al cabo 12 de meses te abonamos el capital invertido más un 15% en
                concepto de intereses, en dólares.
                <br />
                <br />
                <b>Renta Mixta</b>: Comprás un terreno y lo ponés en venta al valor que quieras por 12 meses. En el caso que no puedas
                comercializarlo en ese plazo, te abonamos el capital invertido más un 9% en concepto de intereses, en dólares.
            </>,
            { delay: 4000 }
        );

        const botMessage3 = createChatBotMessage(
            <>
                <b>¿Como funciona?</b>
                <br />
                <br />
                <ol style={{ marginLeft: "16px" }}>
                    <li>Elegís el terreno en el que querés invertir</li>
                    <li>Seleccionás una opción de rentabilidad</li>
                    <li>Realizás el boleto compra-venta frente al escribano público</li>
                    <li>Al cabo de 12 meses podrás elegir entre:</li>
                    <span>
                        - Conservar el terreno
                        <br />- Obtener el total abonado con el % de ganancia previamente pactado
                    </span>
                </ol>
            </>,
            { widget: "optionReturn", delay: 17000 }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage, botMessage2, botMessage3],
        }));
    };

    const detailTerreno = (e, id) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const botMessage2 = createChatBotMessage(
            <>
                <ul style={{ paddingLeft: "15px" }}>
                    <li>Calles con tosca y calcáreo</li>
                    <li>Luz aérea</li>
                    <li>Alambrado de 7 hilos</li>
                    <li>Tranquera de acceso</li>
                </ul>
            </>,
            { widget: "OptionReturnTerrenos", delay: 4700 }
        );

        if (id === 1) {
            const desarrollo = (
                <>
                    <span>
                        El barrio privado Garden se encuentra en la localidad de Abasto sobre la Ruta Provincial n° 36, a sólo 30 minutos de
                        la ciudad de La Plata. <br /> Los lotes miden desde 252m² hasta 420m² y contarán con los siguientes servicios:
                    </span>
                </>
            );
            const botMessage = createChatBotMessage(desarrollo);

            const botMessageServices = createChatBotMessage(
                <>
                    <ul style={{ paddingLeft: "15px" }}>
                        <li>Alumbrado led</li>
                        <li>Portón de acceso</li>
                        <li>Cámaras de vigilancia</li>
                        <li>Garita de seguridad las 24hs</li>
                        <li>Área verde recreativa para disfrutar en la familia</li>
                    </ul>
                </>,
                { widget: "OptionReturnTerrenos", delay: 4700 }
            );

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, botMessageServices],
            }));
        }
        if (id === 2) {
            const botMessage = createChatBotMessage(
                <>
                    <span>
                        El barrio semi-cerrado de Sophenia se encuentra ubicado en Arana. Una zona de quintas a tan sólo 30 minutos del
                        centro de La Plata. <br /> El mismo consta de lotes que van desde 250m² hasta 304m², y contarán con los siguientes
                        servicios:
                    </span>
                    <br />
                </>
            );
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, botMessage2],
            }));
        }
        if (id === 3) {
            const botMessage = createChatBotMessage(
                <>
                    <span>
                        San Julián es un barrio abierto, ubicado en la localidad de Arturo Seguí, cerca de la Ruta Provincial n° 2. Está a
                        sólo 15 minutos de Estancia Chica y a 35 minutos del centro de La Plata. Este desarrollo cuenta con 180 lotes que
                        miden desde 240m² hasta 375m², y contarán con los siguientes servicios:
                    </span>
                    <br />
                </>
            );

            const botMessageServices = createChatBotMessage(
                <>
                    <ul style={{ paddingLeft: "15px" }}>
                        <li>Luz aérea</li>
                        <li>Calles con tosca y calcáreo</li>
                    </ul>
                </>,
                { widget: "OptionReturnTerrenos", delay: 4700 }
            );

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, botMessageServices],
            }));
        }
        if (id === 4) {
            const desarrollo2 = createChatBotMessage(
                <>
                    <ul style={{ paddingLeft: "15px" }}>
                        <li>Luz aérea</li>
                        <li>Cerco perimetral</li>
                        <li>Portón de ingreso</li>
                        <li>Calles de tosca y calcáreo</li>
                    </ul>
                </>,
                { widget: "OptionReturnTerrenos", delay: 4200 }
            );
            const botMessage = createChatBotMessage(
                <>
                    <span>
                        El barrio semi-cerrado La Escondida se encuentra ubicado en la localidad de Los Hornos, a 20 minutos de la ciudad de
                        La Plata. El desarrollo consta de 302 lotes con medidas que van desde los 252m² hasta los 616m². Los servicios con
                        los que cuenta este loteo son:
                    </span>
                    <br />
                </>
            );
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, desarrollo2],
            }));
        }
        if (id === 5) {
            const desarrollo2 = createChatBotMessage(
                <>
                    <ul style={{ paddingLeft: "15px" }}>
                        <li>Luz aérea</li>
                        <li>Cerco perimetral</li>
                        <li>Tranquera de acceso</li>
                        <li>Calles de tosca y calcáreo</li>
                    </ul>
                </>,
                { widget: "OptionReturnTerrenos", delay: 4200 }
            );

            const botMessage = createChatBotMessage(
                <>
                    <span>
                        El desarrollo La Soñada se encuentra en la localidad de Alegre, en el partido de General Paz, a 15 minutos de
                        Ranchos y a 1 hora de la ciudad de La Plata. Este desarrollo consta de 73 lotes de 800m².
                        <br />
                        <br />
                        Se trata de un barrio semi-cerrado que contará con:
                    </span>
                    <br />
                </>
            );
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, desarrollo2],
            }));
        }
        if (id === 6) {
            const botMessage = createChatBotMessage(
                <>
                    <span>Próximamente lotes disponibles en Mendoza.</span>
                    <br />
                </>,
                { widget: "OptionReturnTerrenos" }
            );
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        }
    };

    const returnMenu = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";
        const botMessage = createChatBotMessage("¿Te puedo ayudar en algo más?", { widget: "loteosOptions" });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const returnMenuTerrenos = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";
        const botMessage = createChatBotMessage("¿Te puedo ayudar en algo más?", { widget: "detailTerrenos" });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const noAnswer = () => {
        const botMessage = createChatBotMessage("Lo siento, no tengo esa información.");

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        optionTerrenos,
                        formasDePago,
                        contacto,
                        noAnswer,
                        detailTerreno,
                        returnMenu,
                        returnMenuTerrenos,
                        forest,
                        moreTerrenos,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
