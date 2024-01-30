"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

import { CloseModal } from "@/components/Svgs";
import style from "./Mobile.module.scss";

export const Mobile = ({ handleClose, moreInfo, logo, servicios, descripcion, images }) => {
    const wrapperRef = useRef(null);

    useLayoutEffect(() => {
        if (moreInfo) gsap.to(wrapperRef.current, { top: "10%", ease: "power.inOut", duration: 0.5 });
    }, [moreInfo]);

    const closeModal = () => {
        gsap.to(wrapperRef.current, { top: "200%", onComplete: () => handleClose() });
    };

    return (
        <div className={style.wrapper} ref={wrapperRef}>
            <div className={style.container}>
                <span className={style.container__btn_close} onClick={closeModal}>
                    <CloseModal width='30' height='30' />
                </span>

                <span className={style.container__header}>{logo}</span>

                <p className={style.container__description}>{descripcion}</p>

                <span className={style.container__services}>{servicios}</span>

                <div className={style.container__gallery}>
                    {images.map((e, i) => (
                        <Image key={i} src={e} alt='La Escondida' className={style.container__gallery__item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
