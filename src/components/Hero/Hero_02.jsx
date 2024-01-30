"use client";

import { expandContainer, minimizeContainer, setContainer, textAnimation } from "./animations";
import { useEffect, useRef } from "react";
import style from "./hero.module.scss";
import Image from "next/image";

export const Hero_02 = ({ timeline, image }) => {
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
                                Obras <b>propias</b>
                            </span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>Trabajamos con maquinaria y mano</span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>
                                de obra propias <b>optimizando</b>
                            </span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>tiempos y costos.</span>
                        </span>
                    </p>
                </span>
            </div>
        </>
    );
};
