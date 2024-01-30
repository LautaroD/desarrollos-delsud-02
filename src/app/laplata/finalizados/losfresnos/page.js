"use client";

import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";

import { losfresnos_01, losfresnos_02 } from "../../../../../public/resources/images/laplata";
import { CercoPerimetral, CallesMejoradas, Luz, PortonAcceso } from "@/components/Svgs";
import { Button, Tooltip, ButtonAnim } from "@/components";
import { useWindowSize } from "@/hooks/useWindowSize";
import { LosFresnos } from "@/components/Svgs";
import style from "./page.module.scss";

export default function Garden() {
    const containerRef = useRef();
    const router = useRouter();
    const windowSize = useWindowSize();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to(".logo", { opacity: 1, scale: 1, duration: 0.5, ease: "power3.inOut" });
            tl.to(".volver_atras", { opacity: 1, duration: 0.5, ease: "power3.inOut" }, 1);
            tl.to(".description", { opacity: 1, duration: 0.5, ease: "power3.inOut" }, 1);
        }, containerRef.current);

        return () => ctx.revert();
    }, []);

    const showFirstImage = () => {
        gsap.to(".image_01", { left: windowSize.width <= 1360 ? "3%" : "10%", duration: 1, ease: "power3.inOut" });
    };

    const showSecondImage = () => {
        gsap.to(".image_02", { left: "67%", duration: 1, ease: "power3.inOut" });
    };

    const handleOpen = () => {};

    const handleClose = () => {};

    const goBack = () => {
        gsap.to(containerRef.current, {
            x: "100%",
            ease: "power2.inOut",
            duration: 0.5,
            onComplete: () => {
                router.back();
            },
        });
    };

    return (
        <section className={style.wrapper} ref={containerRef}>
            {windowSize.width > 530 ? (
                <div className={style.container}>
                    <span className={`${style.container__button_go_back} volver_atras`} onClick={goBack}>
                        <ButtonAnim />
                    </span>

                    <span>
                        <span className={`${style.container__logo} logo`}>
                            <LosFresnos fill='#14213d' width='250px' />
                        </span>

                        <span className={`${style.container__description} description`}>
                            <p>
                                <span>Barrio semi-cerrado ubicado en la localidad de Arturo seguí</span>
                                <span>con acceso por R.P nº 36. A sólo 20 min del centro de City Bell.</span>
                            </p>
                            <span className={style.container__description__services}>
                                <Tooltip text='Cerco' text2='perimetral'>
                                    <CercoPerimetral fill='#003a70' />
                                </Tooltip>
                                <Tooltip text='Electricidad' text2='aérea'>
                                    <Luz fill='#003a70' />
                                </Tooltip>
                                <Tooltip text='Calles con' text2='tosca y calcáreo'>
                                    <CallesMejoradas fill='#003a70' />
                                </Tooltip>
                                <Tooltip text='Porton' text2='de acceso'>
                                    <PortonAcceso fill='#003a70' />
                                </Tooltip>
                            </span>
                        </span>
                    </span>

                    <span className={style.container__info} onClick={handleOpen}>
                        <Button href='laplata' content='Volver a desarrollos' variant='v2' />
                    </span>
                </div>
            ) : (
                <div className={style.container}>
                    <span className={`${style.container__button_go_back} volver_atras`} onClick={goBack}>
                        <ButtonAnim />
                    </span>

                    <span>
                        <span className={`${style.container__logo} logo`}>
                            <LosFresnos fill='#14213d' />
                        </span>

                        <span className={`${style.container__description} description`}>
                            <p>
                                <span>Barrio semi-cerrado ubicado en la localidad de Arturo seguí</span>
                                <span>con acceso por R.P nº 36. A sólo 20 min del centro de City Bell.</span>
                            </p>
                            <span className={style.container__description__services}>
                                <span className={style.container__description__services__item}>
                                    <CercoPerimetral fill='#003a70' />
                                    <p>
                                        Cerco
                                        <span>perimetral</span>
                                    </p>
                                </span>

                                <span className={style.container__description__services__item}>
                                    <CallesMejoradas fill='#003a70' />
                                    <p>
                                        Calles con
                                        <span>tosca y calcáreo</span>
                                    </p>
                                </span>

                                <span className={style.container__description__services__item}>
                                    <PortonAcceso fill='#003a70' />
                                    <p>
                                        Porton
                                        <span> de acceso</span>
                                    </p>
                                </span>

                                <span className={style.container__description__services__item}>
                                    <Luz fill='#003a70' />
                                    <p>
                                        Electricidad
                                        <span>aérea</span>
                                    </p>
                                </span>
                            </span>
                        </span>
                    </span>

                    <div className={`${style.image_one} image_01`}>
                        <Image src={losfresnos_01} alt='La Escondida' priority={true} onLoad={() => showFirstImage()} />
                    </div>

                    {/* <span className={style.container__info}>
                        <Button href='laplata' content='Volver a desarrollos' variant='v2' />
                    </span> */}
                </div>
            )}

            {windowSize.width > 530 ? (
                <>
                    <div className={`${style.image_one} image_01`}>
                        <Image src={losfresnos_01} alt='La Escondida' priority={true} onLoad={() => showFirstImage()} />
                    </div>
                    <div className={`${style.image_two} image_02`}>
                        <Image src={losfresnos_02} alt='La Escondida' priority={true} onLoad={() => showSecondImage()} />
                    </div>
                </>
            ) : (
                <></>
            )}
        </section>
    );
}
