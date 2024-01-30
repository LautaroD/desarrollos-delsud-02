"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import gsap from "gsap";

import { Navigation } from "swiper/modules";

import { image_01, image_02, image_03, image_04 } from "../../public/resources/images";
import { Home as InitialHome, Benefits } from "@/components";
import { useWindowSize } from "@/hooks/useWindowSize";
import "swiper/css/navigation";
import "./page.scss";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const targetRef = useRef(null);
    const textRef = useRef(null);
    const component = useRef();
    const slider = useRef();

    const windowSize = useWindowSize();

    useLayoutEffect(() => {
        if (windowSize.width < 530 && windowSize.width !== 0) return;

        let ctx = gsap.context(() => {
            const pixelsPause = 750;
            let panels = gsap.utils.toArray([".panel", ".panel2"]);
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                duration: "0.1",
                scrollTrigger: {
                    trigger: slider.current,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    start: `top+=${pixelsPause} top`,
                    end: () => "+=" + window.innerWidth * panels.length,
                },
            });

            ScrollTrigger.create({
                trigger: slider.current,
                onEnter: () => {
                    gsap.to(targetRef.current, {
                        height: "85%",
                        width: "95%",
                    });
                    gsap.to(textRef.current, {
                        opacity: "1",
                    });
                },
                end: () => "+=" + (window.innerWidth * panels.length + pixelsPause),
                pin: true,
            });
        }, component);
        return () => ctx.revert();
    });

    return (
        <div className='app' ref={component}>
            <div className='firstContainer'>
                <InitialHome />
            </div>

            {windowSize.width > 530 ? (
                <div ref={slider} className='container'>
                    <div className='panel'>
                        <div className='container_img' ref={targetRef}>
                            <Image src={image_01} alt='Image' />
                        </div>

                        <span className='text' ref={textRef}>
                            <p>
                                <span>
                                    <span className='text__title'>
                                        Somos <b>propietarios</b>
                                    </span>
                                </span>

                                <span>
                                    <span>
                                        Contamos con la <b>titularidad</b> de todos los
                                    </span>
                                </span>

                                <span>
                                    <span>
                                        terrenos. Esto <b>facilita</b> el proceso de
                                    </span>
                                </span>

                                <span>
                                    <span>
                                        adquisición <b>evitando</b> trabas burocráticas.
                                    </span>
                                </span>
                            </p>
                        </span>
                    </div>

                    <div className='panel2'>
                        <div className='container_img'>
                            <Image src={image_02} alt='Image' />
                        </div>

                        <span className='text'>
                            <p>
                                <span>
                                    <span className='text__title'>
                                        Obras <b>propias</b>
                                    </span>
                                </span>

                                <span>
                                    <span>Trabajamos con maquinaria y mano</span>
                                </span>

                                <span>
                                    <span>
                                        de obra propias <b>optimizando</b>
                                    </span>
                                </span>

                                <span>
                                    <span>tiempos y costos.</span>
                                </span>
                            </p>
                        </span>
                    </div>

                    <div className='panel2'>
                        <div className='container_img'>
                            <Image src={image_03} alt='Image' />
                        </div>

                        <span className='text'>
                            <p>
                                <span>
                                    <span className='text__title'>
                                        Formas de <b>pago</b>
                                    </span>
                                </span>

                                <span>
                                    <span>Financiamos tu lote de forma</span>
                                </span>

                                <span>
                                    <span>
                                        personalizada sólo con tu <b>DNI</b>. Entregá
                                    </span>
                                </span>

                                <span>
                                    <span>
                                        tu <b>vehículo</b> al mejor valor del mercado.
                                    </span>
                                </span>
                            </p>
                        </span>
                    </div>

                    <div className='panel2'>
                        <div className='container_img'>
                            <Image src={image_04} alt='Image' />
                        </div>

                        <span className='text'>
                            <p>
                                <span>
                                    <span className='text__title'>
                                        Equipo <b>completo</b>
                                    </span>
                                </span>

                                <span>
                                    <span>
                                        Conformamos un equipo <b>integral</b> de
                                    </span>
                                </span>

                                <span>
                                    <span>
                                        profesionales <b>simplificando</b> el
                                    </span>
                                </span>

                                <span>
                                    <span>proceso de compra del terreno.</span>
                                </span>
                            </p>
                        </span>
                    </div>
                </div>
            ) : (
                <>
                    <Swiper navigation={true} modules={[Navigation]}>
                        <SwiperSlide>
                            <div className='panel2'>
                                <div className='container_img'>
                                    <Image src={image_01} alt='Image' />
                                </div>

                                <span className='text' ref={textRef}>
                                    <p>
                                        <span>
                                            <span className='text__title'>
                                                Somos <b>propietarios</b>
                                            </span>
                                        </span>

                                        <span>
                                            <span>
                                                Contamos con la <b>titularidad</b> de todos los
                                            </span>
                                        </span>

                                        <span>
                                            <span>
                                                terrenos. Esto <b>facilita</b> el proceso de
                                            </span>
                                        </span>

                                        <span>
                                            <span>
                                                adquisición <b>evitando</b> trabas burocráticas.
                                            </span>
                                        </span>
                                    </p>
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='panel2'>
                                <div className='container_img'>
                                    <Image src={image_02} alt='Image' />
                                </div>

                                <span className='text'>
                                    <p>
                                        <span>
                                            <span className='text__title'>
                                                Obras <b>propias</b>
                                            </span>
                                        </span>

                                        <span>
                                            <span>Trabajamos con maquinaria y mano</span>
                                        </span>

                                        <span>
                                            <span>
                                                de obra propias <b>optimizando</b>
                                            </span>
                                        </span>

                                        <span>
                                            <span>tiempos y costos.</span>
                                        </span>
                                    </p>
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='panel2'>
                                <div className='container_img'>
                                    <Image src={image_03} alt='Image' />
                                </div>

                                <span className='text'>
                                    <p>
                                        <span>
                                            <span className='text__title'>
                                                Formas de <b>pago</b>
                                            </span>
                                        </span>

                                        <span>
                                            <span>Financiamos tu lote de forma</span>
                                        </span>

                                        <span>
                                            <span>
                                                personalizada sólo con tu <b>DNI</b>. Entregá
                                            </span>
                                        </span>

                                        <span>
                                            <span>
                                                tu <b>vehículo</b> al mejor valor del mercado.
                                            </span>
                                        </span>
                                    </p>
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='panel2'>
                                <div className='container_img'>
                                    <Image src={image_04} alt='Image' />
                                </div>

                                <span className='text'>
                                    <p>
                                        <span>
                                            <span className='text__title'>
                                                Equipo <b>completo</b>
                                            </span>
                                        </span>

                                        <span>
                                            <span>
                                                Conformamos un equipo <b>integral</b> de
                                            </span>
                                        </span>

                                        <span>
                                            <span>
                                                profesionales <b>simplificando</b> el
                                            </span>
                                        </span>

                                        <span>
                                            <span>proceso de compra del terreno.</span>
                                        </span>
                                    </p>
                                </span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            )}

            <div className='lastContainer'>
                <Benefits />
            </div>
        </div>
    );
}
