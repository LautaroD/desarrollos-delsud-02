import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";

import { Linkedin, Facebook, Instagram, CircleArrow } from "@/components/Svgs";
import { close_menu } from "../../../public/resources/images";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ModalContact } from "@/components";
import Desplegable from "./Desplegable";
import style from "./Menu.module.scss";

export const Menu = ({ open, setOpen }) => {
    const containerRef = useRef(null);
    const closeRef = useRef(null);
    const screenRef = useRef(null);
    const formContainerRef = useRef(null);
    const windowSize = useWindowSize();

    const [openDesplegable, setOpenDesplegable] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (open) {
            const tl = gsap.timeline();

            if (windowSize.width > 500) tl.to(containerRef.current, { right: "0%" });
            else tl.to(containerRef.current, { right: "0%", duration: 0.5 });
            tl.to(screenRef.current, { left: "0%" });
            tl.to(screenRef.current, { opacity: 1, ease: "power3.inOut" }, 0.5);
            tl.to(closeRef.current, { opacity: 1, duration: 0.7 }, 1.5);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const handleClose = () => {
        gsap.to(formContainerRef.current, { left: "-100%" });
        // gsap.to(containerRef.current, { right: "-100%", onComplete: () => setOpen(false) });
        if (windowSize.width > 500) gsap.to(containerRef.current, { right: "-100%", onComplete: () => setOpen(false) });
        else gsap.to(containerRef.current, { right: "-100%", duration: 0.5, onComplete: () => setOpen(false) });
        gsap.to(screenRef.current, { opacity: 0 });
        gsap.to(screenRef.current, { left: "-100%" });
        gsap.to(closeRef.current, { opacity: 1 }, "<");
        setOpenDesplegable(false);
        setFormOpen(false);
    };

    const openContact = (event) => {
        event.preventDefault();
        if (windowSize.width <= 600) return gsap.to(formContainerRef.current, { left: "50%" });
        if (windowSize.width <= 1570) gsap.to(formContainerRef.current, { left: "31.5%" });
        else gsap.to(formContainerRef.current, { left: "50%" });
        setFormOpen(true);
    };

    const handleRoute = (event, link) => {
        event.preventDefault();
        router.push(`/${link}`);
        handleClose();
    };

    return (
        <>
            <div className={style.wrapper} ref={containerRef}>
                <span className={style.container}>
                    <span className={style.container__header} onClick={handleClose} ref={closeRef}>
                        <Image src={close_menu} alt='Cerrar menu' />
                    </span>

                    <span className={style.container__menu}>
                        <span
                            className={style.container__menu__item}
                            onClick={() => setOpenDesplegable(!openDesplegable)}
                            style={{ color: openDesplegable ? "#fc7032" : null, borderBottomColor: openDesplegable ? "#fc7032" : null }}
                        >
                            <p>Proyectos</p>

                            {openDesplegable ? (
                                <span style={{ transform: "rotate(90deg)" }}>
                                    <CircleArrow fill='#FC7032' />
                                </span>
                            ) : (
                                <CircleArrow />
                            )}
                        </span>

                        {openDesplegable && <Desplegable handleClose={handleClose} />}

                        <span className={style.container__menu__item} onClick={(e) => handleRoute(e, "nosotros")}>
                            <p>Nosotros</p>
                            <CircleArrow />
                        </span>
                        <span className={style.container__menu__item} onClick={openContact}>
                            <p>Contacto</p>
                            <CircleArrow />
                        </span>
                        {/* <span className={style.container__menu__item}>
                            <p>Subastas</p>
                            <CircleArrow />
                        </span> */}
                    </span>

                    <span className={style.container__footer}>
                        <span>
                            <Linkedin />
                        </span>

                        <span>
                            <Facebook />
                        </span>

                        <span>
                            <Instagram />
                        </span>
                    </span>
                </span>
            </div>
            {windowSize.width > 530 ? (
                <div className={`${style.screen} ${formOpen ? style.formOpen : ""} `} ref={screenRef} onClick={handleClose} />
            ) : (
                <></>
            )}
            <ModalContact formContainerRef={formContainerRef} handleClose={handleClose} />
        </>
    );
};
