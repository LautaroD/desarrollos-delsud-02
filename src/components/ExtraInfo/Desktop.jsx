"use client";

import gsap from "gsap";
import dynamic from "next/dynamic";
import { useLayoutEffect, useRef } from "react";

import style from "./Desktop.module.scss";
import { CloseModal } from "@/components/Svgs";
import { Button, Gallery, Footer } from "@/components";

export const Desktop = ({ name, handleClose, moreInfo, infoDesarrollo, logo, servicios, descripcion, images }) => {
    const DesarrolloLotes = dynamic(() => import("../InteractiveMaps/DesarrolloLotes"), { ssr: false });
    const wrapperRef = useRef(null);

    console.log(infoDesarrollo);

    useLayoutEffect(() => {
        if (moreInfo) gsap.to(wrapperRef.current, { top: "10%", ease: "power.inOut", duration: 0.5 });
    }, [moreInfo]);

    const closeModal = () => {
        gsap.to(wrapperRef.current, { top: "200%", onComplete: () => handleClose() });
    };

    return (
        <div className={style.wrapper} ref={wrapperRef}>
            <div className={style.container}>
                <span className={style.container__header}>
                    {logo}

                    <span className={style.container__header__btn_close} onClick={closeModal}>
                        <CloseModal />
                    </span>
                </span>

                <span className={style.container__sub_header}>
                    <span className={style.container__sub_header__description}>
                        {servicios}

                        <p className={style.container__sub_header__description__text}>{descripcion}</p>
                    </span>

                    <Button
                        redirect='https://api.whatsapp.com/send?phone=+2215079256&text=%C2%A1Hola,%20Desarrollos%20Delsud!%20Quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos'
                        content='Contactar con un asesor'
                        variant='v3'
                    />
                </span>

                <span className={style.container__content}>
                    <span className={style.container__content__instructions}>
                        <span className={style.container__content__instructions__available}>
                            <span /> Disponible
                        </span>

                        <span className={style.container__content__instructions__reserved}>
                            <span /> Reservado
                        </span>

                        <span className={style.container__content__instructions__selled}>
                            <span /> Vendido
                        </span>
                    </span>
                    <span className={style.container__content__map}>
                        {infoDesarrollo && (
                            <DesarrolloLotes
                                imageFile={infoDesarrollo.plane}
                                lotes={infoDesarrollo.lotes}
                                loteHref={`https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Hola!%20Me%20gust%C3%B3%20mucho%20el%20desarrollo%20%22${name}%22.%20Quiero%20reservar%20el%20lote%20n%C2%BA`}
                            />
                        )}
                    </span>
                </span>
            </div>

            <div className={style.container_gallery}>
                <div className={style.container_galley__slider}>
                    <Gallery images={images} />
                </div>
            </div>

            <Footer />
        </div>
    );
};
