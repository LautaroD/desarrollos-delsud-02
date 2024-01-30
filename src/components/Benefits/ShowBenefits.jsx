"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import style from "./ShowBenefits.module.scss";
import { ElementalLogo, TrustfundLogo, MerciLogo, BlackLogo } from "../Svgs";

export default function ShowBenefits() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        gsap.to(containerRef.current, {
            opacity: 1,
            ease: "power.inOut",
            duration: 1.5,
        });
    }, []);

    return (
        <div className={style.wrapper}>
            <div className={style.container} ref={containerRef}>
                <div className={style.card}>
                    <ElementalLogo />
                    <a href='https://elementalconstructora.com.ar/' target='_blank' rel='noreferrer'>
                        <button>Constructora</button>
                    </a>
                </div>

                <div className={style.card}>
                    <TrustfundLogo />
                    <a href='https://trustfund.com.ar/' target='_blank' rel='noreferrer'>
                        <button>Garantías de alquiler</button>
                    </a>
                </div>

                <div className={style.card}>
                    <MerciLogo />
                    <a href='https://mercibroker.com.ar/' target='_blank' rel='noreferrer'>
                        <button>Broker de seguros</button>
                    </a>
                </div>

                <div className={style.card}>
                    <BlackLogo />
                    <a href='https://blackwallet.com.ar/' target='_blank' rel='noreferrer'>
                        <button>Billetera virtual</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
