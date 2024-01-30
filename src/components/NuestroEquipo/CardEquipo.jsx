import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import { useWindowSize } from "@/hooks/useWindowSize";
import style from "./CardEquipo.module.scss";

export const CardEquipo = ({ image, name, rol, titleRef, variant = "v1" }) => {
    const containerRef = useRef(null);
    const windowSize = useWindowSize();

    const onEnter = () => {
        if (windowSize.width < 1455) return;
        gsap.to(titleRef.current, { opacity: 0.2 });
        gsap.to(containerRef.current, { opacity: 1, duration: 0.5 });
        gsap.to(containerRef.current, { x: "155px", duration: 0.5 });
        // gsap.to(titleRef.current, { opacity: 0.2 });
        // gsap.to(containerRef.current, { opacity: 1, duration: 0.5 });
        // gsap.to(containerRef.current, { x: "155px", duration: 0.5 });
    };

    const onLeave = () => {
        gsap.to(titleRef.current, { opacity: 1 });
        gsap.to(containerRef.current, { opacity: 0, duration: 0.5 });
        gsap.to(containerRef.current, { x: 0, duration: 0.5 }, ">");
    };

    return (
        <>
            {variant === "v1" ? (
                <div>
                    <span className={style.image_container} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Image src={image} alt={`${name} ${rol}`} priority={true} />
                    </span>
                    <span className={style.description} ref={containerRef}>
                        <span className={style.description__name}>{name}</span>
                        <span>{rol}</span>
                    </span>
                </div>
            ) : (
                <div>
                    <span className={style.image_container} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Image src={image} alt={`${name} ${rol}`} priority={true} />
                    </span>
                    <span className={style.description_v2} ref={containerRef}>
                        <span className={style.description_v2__name}>{name}</span>
                        <span>{rol}</span>
                    </span>
                </div>
            )}
        </>
    );
};
