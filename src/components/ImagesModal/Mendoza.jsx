"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import style from "./Mendoza.module.scss";

export const Mendoza = ({ open }) => {
    const containerRef = useRef();

    useEffect(() => {
        if (open) gsap.to(containerRef.current, { scale: 1, opacity: 1, ease: "power.inOut", duration: 0.5 });
        else gsap.to(containerRef.current, { scale: 0, opacity: 0, ease: "power2.out", duration: 0.5 });
    }, [open]);

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.container} ref={containerRef}>
                    <span className={style.container__title}>Próximamente</span>
                    {/* <span className={style.container__description}>
                            Si querés obtener <b>información</b> sobre nuestros <br />
                            <b> futuros loteos</b> en <b>Mendoza</b>
                        </span> */}
                </div>
            </div>
        </>
    );
};
