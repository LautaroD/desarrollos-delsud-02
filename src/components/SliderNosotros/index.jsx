"use client";

import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import style from "./slidernosotros.module.scss";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function SliderNosotros() {
    const splideRef = useRef(null);
    const windowSize = useWindowSize();

    return (
        <div className={style.container}>
            <Splide
                className='splide_dos'
                options={{
                    pagination: true,
                    arrows: false,
                }}
                ref={splideRef}
                tag='section'
            >
                <SplideSlide>
                    <p className={style.container__content}>
                        {windowSize.width > 530 ? (
                            <>
                                <span className={style.text}>Desde que nos lanzamos al mercado en 2018,</span>
                                <span className={style.text}>siempre tuvimos nuestro objetivo bien claro:</span>
                                <span className={style.text_v2}>garantizar a la mayor cantidad de familias</span>
                                <span className={style.text_v2}>el acceso a su propio terreno.</span>
                            </>
                        ) : (
                            <>
                                <span className={style.text}>
                                    Desde que nos lanzamos al mercado en 2018, siempre tuvimos nuestro objetivo bien claro:
                                </span>
                                <span className={style.text_v2}>
                                    garantizar a la mayor cantidad de familias el acceso a su propio terreno.
                                </span>
                            </>
                        )}
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <p className={style.container__content}>
                        {windowSize.width > 530 ? (
                            <>
                                <span className={style.text}>Un par de años más tarde, hemos desarrollado más de</span>
                                <span className={style.text}>10 barrios en los alrededores de La Plata y en distintos</span>
                                <span className={style.text}>puntos de la provincia de Buenos Aires, contribuyendo</span>
                                <span className={style.text}>
                                    activamente a la reducción del <span>déficit habitacional</span>.
                                </span>
                            </>
                        ) : (
                            <>
                                <span className={style.text}>
                                    Un par de años más tarde, hemos desarrollado más de 10 barrios en los alrededores de La Plata y en
                                    distintos puntos de la provincia de Buenos Aires, contribuyendo activamente a la reducción del
                                    <span> déficit habitacional</span>.
                                </span>
                            </>
                        )}
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <p className={style.container__content}>
                        {windowSize.width > 530 ? (
                            <>
                                <span className={style.text}>Estos resultados son la demostración del compromiso</span>
                                <span className={style.text}>y el profesionalismo con los que encaramos cada proyecto</span>
                                <span className={style.text}>que tenemos por delante. Nuestros números y el hecho de</span>
                                <span className={style.text}>
                                    haber sido elegidos por <span>miles de familias</span> nos avalan.
                                </span>
                            </>
                        ) : (
                            <span className={style.text}>
                                Estos resultados son la demostración del compromiso y el profesionalismo con los que encaramos cada proyecto
                                que tenemos por delante. Nuestros números y el hecho de haber sido elegidos por{" "}
                                <span>miles de familias</span> nos avalan.
                            </span>
                        )}
                    </p>
                </SplideSlide>
            </Splide>
        </div>
    );
}
