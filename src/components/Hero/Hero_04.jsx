"use client";

import { expandContainer, minimizeContainer, setContainer, textAnimation, exitContainer } from "./animations";
import { useEffect, useRef } from "react";
import style from "./hero.module.scss";
import Image from "next/image";

export const Hero_04 = ({ timeline, image }) => {
    const containerRef = useRef(null);
    const textRefs = useRef([]);
    const imageRef = useRef(null);

    useEffect(() => {
        timeline &&
            timeline
                .add(setContainer(containerRef.current))
                .add(expandContainer(containerRef.current))
                .add(textAnimation(textRefs.current))
                .add(minimizeContainer(containerRef.current, textRefs.current))
                .add(exitContainer(containerRef.current));
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
                                Equipo <b>completo</b>
                            </span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>
                                Conformamos un equipo <b>integral</b> de
                            </span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>
                                profesionales <b>simplificando</b> el
                            </span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>proceso de compra del terreno.</span>
                        </span>
                    </p>
                </span>
            </div>
        </>
    );
};
