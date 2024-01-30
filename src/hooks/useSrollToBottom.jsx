import { useState, useEffect } from "react";

export const useScrollToBottom = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Verifica si el usuario ha llegado al final de la página
            setIsAtBottom(windowHeight + scrollTop === documentHeight);
        };

        // Agrega el evento de scroll al montar el componente
        window.addEventListener("scroll", handleScroll);

        // Elimina el evento de scroll al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return isAtBottom;
};
