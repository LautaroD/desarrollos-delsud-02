"use client";

import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { ElCauce, ElJuncal, LaCampina, LasOrianas, LasVicorias, Latitud, LomasArana, LosFresnos, AbastoChico } from "@/components/Svgs";
import style from "./DesarrollosFinalizados.module.scss";
import { useWindowSize } from "@/hooks/useWindowSize";
import { CloseModal } from "@/components/Svgs";

export default function DesarrollosFinalizados({ containerRef, handleClose, moreInfo }) {
    const wrapperRef = useRef(null);
    const windowSize = useWindowSize();

    const router = useRouter();

    useLayoutEffect(() => {
        if (moreInfo) gsap.to(wrapperRef.current, { top: "10%", ease: "power.inOut", duration: 0.5 });
    }, [moreInfo]);

    const closeModal = () => gsap.to(wrapperRef.current, { top: "200%", onComplete: () => handleClose() });

    const handleClick = (href) => {
        gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power.inOut",
            onComplete: () => router.push(`/${href}`),
        });
    };

    return (
        <div className={style.wrapper} ref={wrapperRef}>
            <div className={style.container}>
                <span className={style.container__header}>
                    <span className={style.container__header__btn_close} onClick={closeModal}>
                        <CloseModal />
                    </span>
                </span>

                <span className={style.container__content}>
                    <div>
                        <Splide
                            tag='section'
                            options={{
                                perPage: 4,
                                perMove: 1,
                                speed: 1500,
                                type: "loop",
                                arrows: false,
                                autoplay: true,
                                interval: 2500,
                                pagination: false,
                                height: windowSize.width > 530 ? false : "100vh",
                                direction: windowSize.width > 530 ? false : "ttb",
                            }}
                        >
                            <SplideSlide style={{ cursor: "pointer" }} className='garden'>
                                <span className={style.item_slider} onClick={() => handleClick("laplata/finalizados/elcauce")}>
                                    <ElCauce />
                                </span>
                            </SplideSlide>

                            <SplideSlide style={{ cursor: "pointer" }} className='laescondida'>
                                <span className={style.item_slider} onClick={() => handleClick("laplata/finalizados/abastochico")}>
                                    <AbastoChico />
                                </span>
                            </SplideSlide>

                            <SplideSlide style={{ cursor: "pointer" }} className='sophenia'>
                                <span className={style.item_slider} onClick={() => handleClick("laplata/finalizados/eljuncal")}>
                                    <ElJuncal />
                                </span>
                            </SplideSlide>

                            <SplideSlide style={{ cursor: "pointer" }}>
                                <span className={style.item_slider} onClick={() => handleClick("laplata/finalizados/lasorianas")}>
                                    <LasOrianas />
                                </span>
                            </SplideSlide>

                            <SplideSlide style={{ cursor: "pointer" }}>
                                <span className={style.item_slider} onClick={() => handleClick("laplata/finalizados/latitud")}>
                                    <Latitud />
                                </span>
                            </SplideSlide>

                            <SplideSlide style={{ cursor: "pointer" }}>
                                <span className={style.item_slider} onClick={() => handleClick("laplata/finalizados/lomasdearana")}>
                                    <LomasArana />
                                </span>
                            </SplideSlide>

                            <SplideSlide style={{ cursor: "pointer" }}>
                                <span className={style.item_slider} onClick={() => handleClick("laplata/finalizados/lacampina")}>
                                    <LaCampina />
                                </span>
                            </SplideSlide>

                            <SplideSlide style={{ cursor: "pointer" }}>
                                <span className={style.item_slider} onClick={() => handleClick("laplata/finalizados/lasvictorias")}>
                                    <LasVicorias />
                                </span>
                            </SplideSlide>

                            <SplideSlide style={{ cursor: "pointer" }}>
                                <span className={style.item_slider} onClick={() => handleClick("laplata/finalizados/losfresnos")}>
                                    <LosFresnos />
                                </span>
                            </SplideSlide>
                        </Splide>
                    </div>
                </span>
            </div>
        </div>
    );
}
