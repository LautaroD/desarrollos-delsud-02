"use client";

import { expandContainer, minimizeContainer, setContainer, textAnimation } from "./animations";
import { useEffect, useRef } from "react";
import style from "./hero.module.scss";
import Image from "next/image";

export const Hero_03 = ({ timeline, image }) => {
    const containerRef = useRef(null);
    const textRefs = useRef([]);
    const imageRef = useRef(null);

    useEffect(() => {
        timeline &&
            timeline
                .add(setContainer(containerRef.current))
                .add(expandContainer(containerRef.current))
                .add(textAnimation(textRefs.current))
                .add(minimizeContainer(containerRef.current, textRefs.current));
    }, [timeline]);

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.container_img} ref={containerRef}>
                    <Image src={image} alt='Image' ref={imageRef} />
                </div>
                <span className={style.text}>
                    <p>
                        <span>
                            <span ref={(text) => textRefs.current.push(text)} className={style.text__title}>
                                Formas de <b>pago</b>
                            </span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>Financiamos tu lote de forma</span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>
                                personalizada sólo con tu <b>DNI</b> entregá
                            </span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>
                                tu <b>vehículo</b> al mejor valor del mercado.
                            </span>
                        </span>
                    </p>
                </span>
            </div>
        </>
    );
};
