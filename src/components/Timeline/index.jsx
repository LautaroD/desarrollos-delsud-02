"use client";

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import Lottie from "lottie-react";
import Image from "next/image";
import gsap from "gsap";

import check_json from "./check.json";
import bandera_json from "./bandera.json";
import excavadora_json from "./excavadora.json";
import casa_json from "./casa.json";
import style from "./timeline.module.scss";
import { LineTimeline } from "@/components/Svgs";
import {
    suenos_cumplidos,
    cuatro_en_ejecucion,
    kilometros_urbanizados,
    seis_proyectos_finalizados,
} from "../../../public/resources/images/equipo";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
    const containerRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center",
                        end: "center center",
                    },
                })
                .to(".timeline", { opacity: 1, ease: "power3.inOut", duration: 0.7 })
                .to(".bandera", { opacity: 1, ease: "power3.inOut", duration: 0.7 })
                .to(".check", { opacity: 1, ease: "power3.inOut", duration: 0.7 })
                .to(".excavadora", { opacity: 1, ease: "power3.inOut", duration: 0.7 })
                .to(".casa", { opacity: 1, ease: "power3.inOut", duration: 0.7 });
        });

        return () => {
            context.revert();
        };
    }, []);

    return (
        <div className={style.wrapper} ref={containerRef}>
            <span className={`${style.timeline} timeline`}>
                <span className={`${style.bandera_json} bandera`}>
                    <Lottie animationData={bandera_json} preload='true' />
                    <Image src={suenos_cumplidos} alt='+1500 de sueños cumplidos' />
                </span>

                <LineTimeline />

                <span className={`${style.check_json} check`}>
                    <Lottie animationData={check_json} preload='true' />
                    <Image src={seis_proyectos_finalizados} alt='9 proyectos finalizados' />
                </span>

                <span className={`${style.excavadora_json} excavadora`}>
                    <Lottie animationData={excavadora_json} preload='true' />
                    <Image src={cuatro_en_ejecucion} alt='5 proyectos en ejecución' />
                </span>

                <span className={`${style.casa_json} casa`}>
                    <Lottie animationData={casa_json} preload='true' />
                    <Image src={kilometros_urbanizados} alt='Más de 750.000m² urbanizados' />
                </span>
            </span>
        </div>
    );
}
