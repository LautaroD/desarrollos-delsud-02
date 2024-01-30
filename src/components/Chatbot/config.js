import LinkList from "./actions/LinkList";
import style from "./assets/config.module.scss";
import OptionSaludo from "./actions/OptionSaludo";
import OptionReturn from "./actions/OptionReturn";
import DetailTerrenos from "./actions/DetailTerrenos";
import OptionSocialNetworks from "./actions/OptionSocialNetwork";
import OptionReturnTerrenos from "./actions/OptionReturnTerrenos";

import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";

const welcomeText = <>Hola, soy Cerquito 🐰 la mascota de Desarrollos Delsud ¿Cómo puedo ayudarte?</>;

const config = (onClick, open) => {
    return {
        initialMessages: [
            createChatBotMessage(welcomeText, {
                widget: "loteosOptions",
            }),
        ],
        customComponents: {
            header: () => (
                <div className={style.header}>
                    <p onClick={onClick}>Chateá con Cerquito</p>
                    <div onClick={onClick} style={{ cursor: "pointer" }}>
                        {!open ? (
                            <svg xmlns='http://www.w3.org/2000/svg' width='15' height='18' viewBox='0 0 15 18' fill='none'>
                                <path
                                    d='M7.5 17V1M7.5 1L1 7.51852M7.5 1L14 7.51852'
                                    stroke='#e8e9ed'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        ) : (
                            <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15' fill='none'>
                                <path
                                    d='M1 1L14 14M14 1L1 14'
                                    stroke='#e8e9ed'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        )}
                    </div>
                </div>
            ),
        },
        widgets: [
            {
                widgetName: "loteosOptions",
                widgetFunc: (props) => <OptionSaludo {...props} />,
                props: {
                    createClientMessage,
                },
            },
            {
                widgetName: "optionReturn",
                widgetFunc: (props) => <OptionReturn {...props} />,
                props: {
                    createClientMessage,
                },
            },
            {
                widgetName: "OptionReturnTerrenos",
                widgetFunc: (props) => <OptionReturnTerrenos {...props} />,
                props: {
                    createClientMessage,
                },
            },
            {
                widgetName: "detailTerrenos",
                widgetFunc: (props) => <DetailTerrenos {...props} />,
                props: {
                    createClientMessage,
                },
            },
            {
                widgetName: "loteosLinks",
                widgetFunc: (props) => <LinkList {...props} />,
                props: {
                    createClientMessage,
                    options: [
                        {
                            text: "Abasto",
                            id: 1,
                        },
                        {
                            text: "Arana",
                            id: 2,
                        },
                        {
                            text: "Arturo Seguí",
                            id: 3,
                        },
                        {
                            text: "Los Hornos",
                            id: 4,
                        },
                        {
                            text: "Refound",
                            id: 5,
                        },
                        {
                            text: "Mendoza",
                            id: 6,
                        },
                    ],
                },
            },
            {
                widgetName: "socialNetworks",
                widgetFunc: (props) => <OptionSocialNetworks {...props} />,
                props: {
                    createClientMessage,
                },
            },
        ],
    };
};

export default config;
