"use client";

import { EffectFade, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

import { image_01, image_02, image_03, image_04 } from "../../../public/resources/images";
import { expandContainer, setContainer } from "./animations";
import { Hero_01 } from "./Hero_01";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./HeroContainer.module.scss";

const data = [
    {
        id: 1,
        image: image_01,
        title: (
            <>
                Somos <b>propietarios</b>
            </>
        ),
        text: (
            <>
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
            </>
        ),
    },
    {
        id: 2,
        image: image_02,
        title: (
            <>
                Obras <b>propias</b>
            </>
        ),
        text: (
            <>
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
            </>
        ),
    },
    {
        id: 3,
        image: image_03,
        title: (
            <>
                Formas de <b>pago</b>
            </>
        ),
        text: (
            <>
                <span>
                    <span>Financiamos tu lote de forma</span>
                </span>

                <span>
                    <span>
                        personalizada sólo con tu <b>DNI</b> entregá
                    </span>
                </span>

                <span>
                    <span>
                        tu <b>vehículo</b> al mejor valor del mercado.
                    </span>
                </span>
            </>
        ),
    },
    {
        id: 4,
        image: image_04,
        title: (
            <>
                Equipo <b>completo</b>
            </>
        ),
        text: (
            <>
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
            </>
        ),
    },
];

export const HeroContainer = ({ timeline }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        timeline && timeline.add(setContainer(containerRef.current)).add(expandContainer(containerRef.current));
    }, [timeline]);

    return (
        <div className={style.wrapper}>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                style={{ overflow: "inherit" }}
                ref={containerRef}
                className={style.container}
                modules={[EffectFade, Mousewheel]}
            >
                <SwiperSlide>
                    <Hero_01 key={data[0].id} image={data[0].image} title={data[0].title} text={data[0].text} />
                </SwiperSlide>
                <SwiperSlide>
                    <Hero_01 key={data[1].id} image={data[1].image} title={data[1].title} text={data[1].text} />
                </SwiperSlide>
                <SwiperSlide>
                    <Hero_01 key={data[2].id} image={data[2].image} title={data[2].title} text={data[2].text} />
                </SwiperSlide>
                <SwiperSlide>
                    <Hero_01 key={data[3].id} image={data[3].image} title={data[3].title} text={data[3].text} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
