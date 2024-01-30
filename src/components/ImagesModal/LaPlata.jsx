import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import { etcheverry_01, etcheverry_02, etcheverry_03 } from "../../../public/resources/images/laplata";
import style from "./LaPlata.module.scss";

export const LaPlata = ({ open }) => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        // if (open) gsap.to(containerRef.current, { y: 0, ease: "power2.inOut" });
        // else gsap.to(containerRef.current, { y: "-150vh", ease: "power2.out" });
        if (open) gsap.to(containerRef.current, { top: "0vh", ease: "power2.inOut" });
        else gsap.to(containerRef.current, { top: "-150vh", ease: "power2.out" });
    }, [open]);

    return (
        <div className={style.wrapper} ref={containerRef}>
            <span className={style.wrapper__container_img}>
                <Image src={etcheverry_01} alt='La Plata' priority={true} />
            </span>
            <span className={style.wrapper__container_img}>
                <Image src={etcheverry_02} alt='La Plata' priority={true} />
            </span>
            <span className={style.wrapper__container_img}>
                <Image src={etcheverry_03} alt='La Plata' priority={true} />
            </span>
        </div>
    );
};
