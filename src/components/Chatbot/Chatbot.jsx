"use client";

import gsap from "gsap";
import Chatbot from "react-chatbot-kit";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import config from "./config";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { ButtonChatbot, ButtonWhatsapp } from "@/components";
import { useScrollToBottom } from "@/hooks/useSrollToBottom";

export default function ChatbotContainer() {
    const [open, setOpen] = useState(false);
    const [openChatbot, setOpenChatbot] = useState(true);
    const location = usePathname();
    const height = useScrollToBottom();

    const onClick = () => setOpen(!open);

    useEffect(() => {
        setTimeout(() => {
            if (window.innerWidth < 500) return;
            setOpen(true);
        }, 1500);
    }, []);

    useEffect(() => {
        const chatButton = document.querySelector(".react-chatbot-kit-chat-btn-send");
        const chatButtonA = document.querySelector(".contactar-un-asesor");

        if (chatButtonA) return;

        if (chatButton) {
            const linkElement = document.createElement("a");
            linkElement.className = "contactar-un-asesor";
            linkElement.href =
                "https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Hola,%20Desarrollos!%20%20Su%20chat%20me%20trajo%20hasta%20ac%C3%A1.%20Me%20gustar%C3%ADa%20contactarme%20con%20uno%20de%20sus%20asesores.";
            linkElement.target = "_blank";
            linkElement.rel = "noreferrer";
            linkElement.innerText = "Contactar un asesor";

            chatButton.appendChild(linkElement);
        }
    }, [location]);

    const validator = (input) => {
        if (!input.replace(/\s/g, "").length) return false;
        if (input.length > 1) return true;
        return false;
    };

    useEffect(() => {
        if (height) setOpenChatbot(false);
        else setOpenChatbot(true);
    }, [height]);

    useEffect(() => {
        if (location.length > 10) return;
        if (openChatbot) {
            gsap.to(".chatbot-container-gsap", { opacity: 1, x: "0%" });
        } else {
            gsap.to(".chatbot-container-gsap", { opacity: 0, x: "200%" });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openChatbot]);

    return (
        <>
            {location === "/mendoza" ? null : location === "/refound/lasonada" ? null : (
                <div className={open ? "chatbot-wrapper chatbot-container-gsap" : "chatbot-wrapper-opened chatbot-container-gsap"}>
                    <ButtonWhatsapp open={open} />

                    <ButtonChatbot open={open} setOpen={setOpen} />
                    <Chatbot
                        config={config(onClick, open)}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        validator={validator}
                        headerProps={{ open, setOpen }}
                        placeholderText='Escribe tu mensaje aquí.'
                    />
                </div>
            )}
        </>
    );
}
