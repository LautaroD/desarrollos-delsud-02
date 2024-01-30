"use client";

import { expandContainer, minimizeContainer, setContainer, textAnimation } from "./animations";
import { useEffect, useRef } from "react";
import style from "./hero.module.scss";
import Image from "next/image";

export const Hero_01 = ({ timeline, image }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRefs = useRef([]);

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
                                Somos <b>propietarios</b>
                            </span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>
                                Contamos con la <b>titularidad</b> de todos los
                            </span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>
                                terrenos. Esto <b>facilita</b> el proceso de
                            </span>
                        </span>

                        <span>
                            <span ref={(text) => textRefs.current.push(text)}>
                                adquisición <b>evitando</b> trabas burocráticas.
                            </span>
                        </span>
                    </p>
                </span>
            </div>
        </>
    );
};
