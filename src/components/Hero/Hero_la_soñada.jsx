"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import { sobre_la_soñada, la_soñada_01 } from "../../../public/resources/images/refound";
import style from "./Hero_la_soñada.module.scss";
import { Button } from "@/components";

export const HeroLasoñada = ({ handleClick }) => {
    const containerRef = useRef(null);
    const imageOne = useRef(null);
    const imageTwo = useRef(null);

    const router = useRouter();

    useEffect(() => {
        gsap.to(imageOne.current, {
            x: "10%",
            ease: "power3.inOut",
            duration: 1.5,
            scrollTrigger: {
                start: "center-=570 center",
                trigger: containerRef.current,
            },
        });

        gsap.to(imageTwo.current, {
            x: "-10%",
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
                start: "center-=570 center",
                trigger: containerRef.current,
            },
        });
    }, []);

    // const handleClick = () => {
    //     gsap.to(imageTwo.current, {
    //         rotate: "0deg",
    //         x: "-50%",
    //         duration: 1.5,
    //         scale: 2,
    //         onComplete: () => {
    //             router.push("/refound/lasonada");
    //         },
    //     });
    // };

    return (
        <div className={style.wrapper} ref={containerRef}>
            <div className={style.container}>
                <span>
                    <Image ref={imageOne} className={style.container__image_01} priority src={la_soñada_01} alt='La Soñada' />
                    <Image ref={imageTwo} className={style.container__image_02} priority src={sobre_la_soñada} alt='Sobre La Soñada' />
                </span>

                <span onClick={handleClick}>
                    <Button content='Más info' variant='v2' />
                </span>
            </div>
        </div>
    );
};
