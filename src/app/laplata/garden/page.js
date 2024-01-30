"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";

import { garden_01, garden_02 } from "../../../../public/resources/images/laplata";
import {
    garden_galeria_01,
    garden_galeria_02,
    garden_galeria_03,
    garden_galeria_04,
    garden_galeria_05,
    garden_galeria_06,
} from "../../../../public/resources/images/laplata/garden";
import { CercoPerimetral, CallesMejoradas, Luz } from "@/components/Svgs";
import { Button, Tooltip, ExtraInfo, ButtonAnim, InappropriateDevice } from "@/components";
import { useWindowSize } from "@/hooks/useWindowSize";
import { GardenLogo } from "@/components/Svgs";
import style from "./page.module.scss";

export default function Garden() {
    const containerRef = useRef();
    const router = useRouter();
    const windowSize = useWindowSize();

    const [moreInfo, setMoreInfo] = useState(false);
    const [infoDesarrollo, setInfoDesarrollo] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const query = await fetch(`https://api.desarrollosdelsud.com.ar:1999/api/web/desarrollo/15`);
            const response = await query.json();
            setInfoDesarrollo(response);
        };
        getData();
    }, []);

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

    const handleOpen = () => {
        setMoreInfo(true);
    };

    const handleClose = () => {
        setMoreInfo(false);
    };

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
                            <GardenLogo fill='#14213d' />
                        </span>

                        <span className={`${style.container__description} description`}>
                            <p>
                                <span>Barrio privado ubicado en la localidad de</span>
                                <span>
                                    <b>Abasto</b> sobre la ruta provincial <b> N°36</b>
                                </span>
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
                            </span>
                        </span>
                    </span>

                    <span className={style.container__info} onClick={handleOpen}>
                        <Button content='Más info' variant='v2' />
                    </span>
                </div>
            ) : (
                <div className={style.container}>
                    <span className={`${style.container__button_go_back} volver_atras`} onClick={goBack}>
                        <ButtonAnim />
                    </span>

                    <span>
                        <span className={`${style.container__logo} logo`}>
                            <GardenLogo fill='#14213d' />
                        </span>

                        <span className={`${style.container__description} description`}>
                            <p>
                                <span>Barrio privado ubicado en la localidad de</span>
                                <span>
                                    <b>Abasto</b> sobre la ruta provincial <b> N°36</b>
                                </span>
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
                        <Image src={garden_01} alt='La Escondida' priority={true} onLoad={() => showFirstImage()} />
                    </div>

                    <span>
                        <InappropriateDevice variant='v2' />
                    </span>

                    <span className={style.container__info} onClick={handleOpen}>
                        <Button content='Galería' variant='v2' />
                    </span>
                </div>
            )}

            {windowSize.width > 530 ? (
                <>
                    <div className={`${style.image_one} image_01`}>
                        <Image src={garden_01} alt='La Escondida' priority={true} onLoad={() => showFirstImage()} />
                    </div>
                    <div className={`${style.image_two} image_02`}>
                        <Image src={garden_02} alt='La Escondida' priority={true} onLoad={() => showSecondImage()} />
                    </div>
                </>
            ) : (
                <></>
            )}

            {moreInfo ? (
                <ExtraInfo
                    name='Garden'
                    handleClose={handleClose}
                    moreInfo={moreInfo}
                    infoDesarrollo={infoDesarrollo}
                    logo={<GardenLogo />}
                    servicios={
                        <>
                            <Tooltip variant='v2' text='Cerco' text2='perimetral'>
                                <CercoPerimetral />
                            </Tooltip>
                            <Tooltip variant='v2' text='Electricidad' text2='aérea'>
                                <Luz />
                            </Tooltip>
                            <Tooltip variant='v2' text='Calles con' text2='tosca y calcáreo'>
                                <CallesMejoradas />
                            </Tooltip>
                        </>
                    }
                    descripcion={
                        <>
                            <span>Barrio privado ubicado en la localidad de</span>
                            <br />
                            <span>
                                <b>Abasto</b> sobre la ruta provincial <b> N°36</b>
                            </span>
                        </>
                    }
                    images={[
                        garden_galeria_02,
                        garden_galeria_03,
                        garden_galeria_01,
                        garden_galeria_04,
                        garden_galeria_05,
                        garden_galeria_06,
                    ]}
                    imagesMobile={[garden_galeria_02, garden_galeria_03, garden_galeria_04, garden_galeria_05, garden_galeria_06]}
                />
            ) : (
                <></>
            )}
        </section>
    );
}
