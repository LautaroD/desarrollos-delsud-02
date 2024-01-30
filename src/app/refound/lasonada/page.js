"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import gsap from "gsap";

import { estampilla } from "../../../../public/resources/images/refound";
import { CallesMejoradas, CercoPerimetral, Luz } from "@/components/Svgs";
import { Button, Footer, InappropriateDevice, Tooltip } from "@/components";
import { useWindowSize } from "@/hooks/useWindowSize";
import style from "./page.module.scss";

export default function Lasonada() {
    const DesarrolloLotes = dynamic(() => import("../../../components/InteractiveMaps/DesarrolloLotes"), { ssr: false });
    const [infoDesarrollo, setInfoDesarrollo] = useState(null);
    const wrapperRef = useRef(null);
    const estampillaRef = useRef(null);
    const columnRef = useRef(null);
    const mapRef = useRef(null);

    const windowSize = useWindowSize();

    useEffect(() => {
        const getData = async () => {
            const query = await fetch(`https://api.desarrollosdelsud.com.ar:1999/api/web/desarrollo/18`);
            const response = await query.json();
            setInfoDesarrollo(response);
        };
        getData();
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to(wrapperRef.current, {
                opacity: 1,
                ease: "power3.inOut",
            });

            tl.to(estampillaRef.current, {
                x: 0,
                ease: "power3.inOut",
            });

            tl.to(estampillaRef.current, {
                rotate: "3deg",
                ease: "elastic.out",
            });

            tl.to(columnRef.current, {
                opacity: 1,
                ease: "power3.inOut",
            });

            tl.to(mapRef.current, {
                opacity: 1,
                ease: "power3.inOut",
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className={style.wrapper} ref={wrapperRef}>
                <div className={style.header}>
                    <Image ref={estampillaRef} src={estampilla} alt='La soñada' priority={true} className={style.header__estampilla} />

                    <span className={style.header__column} ref={columnRef}>
                        {windowSize.width > 950 ? (
                            <span>
                                <Button
                                    redirect='https://api.whatsapp.com/send?phone=+2215079256&text=%C2%A1Hola,%20Desarrollos%20Delsud!%20Quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos'
                                    content='Contactar con un asesor'
                                    variant='v3'
                                />
                            </span>
                        ) : (
                            <></>
                        )}

                        <span className={style.header__column__servicios}>
                            <span className={style.header__column__servicios__svg}>
                                <Tooltip variant='v2' text='Cerco' text2='perimetral'>
                                    <CercoPerimetral />
                                </Tooltip>
                                <Tooltip variant='v2' text='Electricidad' text2='aérea'>
                                    <Luz />
                                </Tooltip>
                                <Tooltip variant='v2' text='Calles con' text2='tosca y calcáreo'>
                                    <CallesMejoradas />
                                </Tooltip>
                            </span>
                            <p className={style.header__column__servicios__desc}>
                                Barrio semi-cerrado ubicado en la localidad <br />
                                de <b>Alegre</b>, en el partido de <b>General Paz</b>.
                            </p>
                        </span>
                    </span>
                </div>

                <div className={style.container_map} ref={mapRef}>
                    {windowSize.width > 1200 ? (
                        <>
                            <span className={style.container_map__estados}>
                                <p>
                                    <span style={{ backgroundColor: "#B8D368" }} /> Disponible
                                </p>
                                <p>
                                    <span style={{ backgroundColor: "#ECE544" }} /> Reservado
                                </p>
                                <p>
                                    <span style={{ backgroundColor: "#FC7032" }} /> Vendido
                                </p>
                            </span>

                            <span className={style.map}>
                                {infoDesarrollo && (
                                    <DesarrolloLotes
                                        containerHeight={0}
                                        imageFile={infoDesarrollo.plane}
                                        lotes={infoDesarrollo.lotes}
                                        loteHref='https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Hola!%20Me%20gust%C3%B3%20mucho%20el%20desarrollo%20%22La%20Campi%C3%B1a%22.%20Quiero%20reservar%20el%20lote%20n%C2%BA'
                                    />
                                )}
                            </span>
                        </>
                    ) : (
                        <>
                            <InappropriateDevice />
                        </>
                    )}
                </div>
            </section>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
