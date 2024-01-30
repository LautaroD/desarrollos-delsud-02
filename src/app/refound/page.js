"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";

import refound_bg from "../../../public/resources/videos/refound_bg.webm";
import { frase } from "../../../public/resources/images/refound";
import { Footer, ButtonAnim } from "@/components";
import { HeroLasoñada } from "@/components/Hero";
import { RefoundLogo } from "@/components/Svgs";
import style from "./page.module.scss";

export default function Refound() {
    const containerRef = useRef(null);
    const router = useRouter();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to(containerRef.current, {
                // right: "0%",
                opacity: 1,
                duration: 0.5,
                ease: "power.inOut",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleClick = () => {
        gsap.to(containerRef.current, {
            opacity: 0,
            ease: "power3.inOut",
            onComplete: () => {
                router.push("/refound/lasonada");
            },
        });
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

    const goLaplata = () => {
        gsap.to(containerRef.current, {
            // right: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power.inOut",
            onComplete: () => router.push("/laplata"),
        });
    };

    return (
        <main ref={containerRef} className={style.wrapper}>
            <section className={style.video_bg}>
                <video autoPlay loop preload='true' muted>
                    <source src={refound_bg} type='video/webm' />
                </video>

                <span className={style.video_bg__logo}>
                    <RefoundLogo />
                </span>

                <span className={style.video_bg__products}>
                    <span onClick={goLaplata}>
                        <ButtonAnim variant='laplata' version='v2' />
                    </span>

                    <span onClick={goMendoza}>
                        <ButtonAnim variant='mendoza' version='v2' />
                    </span>
                </span>
            </section>

            <section className={style.frase}>
                <Image src={frase} alt='Bienvenidos a Refound' />
            </section>

            <section>
                <HeroLasoñada handleClick={handleClick} />
            </section>

            <footer>
                <Footer />
            </footer>
        </main>
    );
}
