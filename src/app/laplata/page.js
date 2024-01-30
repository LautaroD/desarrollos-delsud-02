"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

import { SliderLaPlata } from "@/components/SliderDesarrollos";
import { Button, DesarrollosFinalizados, ButtonAnim } from "@/components";
import style from "./page.module.scss";

export default function Laplata() {
    const containerRef = useRef(null);
    const [moreInfo, setMoreInfo] = useState(false);

    const router = useRouter();

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        tl.to(containerRef.current, {
            // right: "0%",
            opacity: 1,
            duration: 0.3,
            ease: "power.inOut",
        });
    }, []);

    const handleOpen = () => {
        setMoreInfo(true);
    };

    const handleClose = () => {
        setMoreInfo(false);
    };

    const goMendoza = () => {
        gsap.to(containerRef.current, {
            // right: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power.inOut",
            onComplete: () => router.push("/mendoza"),
        });
    };

    const goRefound = () => {
        gsap.to(containerRef.current, {
            // right: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power.inOut",
            onComplete: () => router.push("/refound"),
        });
    };

    return (
        <main ref={containerRef} className={style.wrapper}>
            <div className={style.container}>
                <span className={style.container__slider}>
                    <SliderLaPlata containerRef={containerRef} />
                </span>

                <span className={style.container__projects}>
                    <span className={style.container__projects__other_products}>
                        <span onClick={goRefound}>
                            <ButtonAnim variant='refound' version='v2' />
                        </span>

                        <span onClick={goMendoza}>
                            <ButtonAnim variant='mendoza' version='v2' />
                        </span>
                    </span>

                    <span className={style.container__projects__end}>
                        <span onClick={handleOpen}>
                            <Button content='Desarrollos finalizados' />
                        </span>
                    </span>
                </span>
            </div>
            {moreInfo ? <DesarrollosFinalizados containerRef={containerRef} handleClose={handleClose} moreInfo={moreInfo} /> : <></>}
        </main>
    );
}
