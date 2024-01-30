"use client";

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";

import style from "./nuestroequipo.module.scss";
import { CardEquipo } from "./CardEquipo";
import {
    felipe,
    adrian,
    belen,
    florencia,
    florencias,
    jesica,
    julieta,
    lucia,
    luciana,
    tatiana,
    milena,
    yuliana,
} from "../../../public/resources/images/equipo";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function NuestroEquipo({ timeline }) {
    const titleRef = useRef(null);
    const firstcolumnRef = useRef(null);
    const secondcolumnRef = useRef(null);
    const thirdcolumnRef = useRef(null);
    const fourthcolumnRef = useRef(null);
    const containerRef = useRef(null);

    const windowSize = useWindowSize();

    const [timeLine, setTimeLine] = useState(null);

    useEffect(() => {
        if (windowSize.width < 500 && windowSize.width !== 0) return;

        timeLine &&
            timeline.add(
                timeLine.add(
                    timeLine.to(firstcolumnRef.current, { y: "0%" }, "<"),
                    timeLine.to(secondcolumnRef.current, { y: "0%" }, "<"),
                    timeLine.to(thirdcolumnRef.current, { y: "0%" }, "<"),
                    timeLine.to(fourthcolumnRef.current, { y: "0%" }, "<")
                )
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLine, timeline, windowSize]);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    pin: true,
                    trigger: containerRef.current,
                    start: "top top",
                    // end: "bottom center",
                    end: () => {
                        if (windowSize.width > 500 && windowSize.width !== 0) return "bottom top-=150";
                        else if (windowSize.width < 500 && windowSize.width !== 0) return "bottom center";
                    },
                    // end: "bottom top-=150",
                    scrub: true,
                    onEnter: () => {
                        if (windowSize.width > 500 && windowSize.width !== 0) return;
                        gsap.to(firstcolumnRef.current, { y: "0%" });
                        gsap.to(secondcolumnRef.current, { y: "0%" });
                        gsap.to(thirdcolumnRef.current, { y: "0%" });
                        gsap.to(fourthcolumnRef.current, { y: "0%" });
                    },
                },
            });
            setTimeLine(tl);
        });

        return () => {
            context.revert();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize]);

    // useLayoutEffect(() => {
    //     const context = gsap.context(() => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 pin: true,
    //                 trigger: containerRef.current,
    //                 start: "top top",
    //                 // end: "bottom top-=150",
    //                 end: "bottom center",
    //                 scrub: true,
    //                 onEnter: () => {
    //                     gsap.to(firstcolumnRef.current, { y: "0%" });
    //                     gsap.to(secondcolumnRef.current, { y: "0%" });
    //                     gsap.to(thirdcolumnRef.current, { y: "0%" });
    //                     gsap.to(fourthcolumnRef.current, { y: "0%" });
    //                 },
    //             },
    //         });
    //         setTimeLine(tl);
    //     });

    //     return () => {
    //         context.revert();
    //     };
    // }, []);

    return (
        <>
            <div className={style.wrapper} ref={containerRef}>
                <h2 className={style.wrapper__about_us} ref={titleRef}>
                    nuestro <span>equipo</span>
                </h2>

                {windowSize.width > 530 ? (
                    <div className={style.container}>
                        <div className={style.container__first_column} ref={firstcolumnRef}>
                            <CardEquipo image={felipe} name='Felipe Nuñez' rol='Community Manager' titleRef={titleRef} />
                            <CardEquipo image={florencias} name='Florencia Sanz' rol='Diseñadora' titleRef={titleRef} />
                            <CardEquipo image={jesica} name='Jesica Muchenik' rol='Community Manager' titleRef={titleRef} />
                        </div>

                        <div className={style.container__second_column} ref={secondcolumnRef}>
                            <CardEquipo image={julieta} name='Julieta Sbarra' rol='Diseñadora' titleRef={titleRef} />
                            <CardEquipo image={lucia} name='Lucia Cisneros' rol='Community Manager' titleRef={titleRef} />
                            <CardEquipo image={adrian} name='Adrian Balensuelo' rol='Asesor comercial' titleRef={titleRef} />
                        </div>

                        <div className={style.container__third_column} ref={thirdcolumnRef}>
                            <CardEquipo image={belen} name='Belen Montenero' rol='Diseñadora' titleRef={titleRef} />
                            <CardEquipo image={milena} name={`Milena Dell'Aqua`} rol='Asesora comercial' titleRef={titleRef} />
                            <CardEquipo image={yuliana} name='Yuliana Testoni' rol='Administrativa' titleRef={titleRef} />
                        </div>

                        <div className={style.container__fourth_column} ref={fourthcolumnRef}>
                            <CardEquipo image={florencia} name='Florencia Calabres' rol='Asesora comercial' titleRef={titleRef} />
                            <CardEquipo image={luciana} name='Luciana Maure' rol='Asesora comercial' titleRef={titleRef} />
                            <CardEquipo image={tatiana} name='Tatiana Costante' rol='Administrativa' titleRef={titleRef} />
                        </div>
                    </div>
                ) : (
                    <div className={style.container_mobile}>
                        <div className={style.container_mobile__first_column} ref={firstcolumnRef}>
                            <CardEquipo image={felipe} name='Felipe Nuñez' rol='Community Manager' titleRef={titleRef} />
                            <CardEquipo image={florencias} name='Florencia Sanz' rol='Diseñadora' titleRef={titleRef} />
                            <CardEquipo image={jesica} name='Jesica Muchenik' rol='Community Manager' titleRef={titleRef} />
                            <CardEquipo image={julieta} name='Julieta Sbarra' rol='Diseñadora' titleRef={titleRef} />
                        </div>

                        <div className={style.container_mobile__second_column} ref={secondcolumnRef}>
                            <CardEquipo image={lucia} name='Lucia Cisneros' rol='Community Manager' titleRef={titleRef} />
                            <CardEquipo image={adrian} name='Adrian Balensuelo' rol='Asesor comercial' titleRef={titleRef} />
                            <CardEquipo image={belen} name='Belen Montenero' rol='Diseñadora' titleRef={titleRef} />
                            <CardEquipo image={milena} name={`Milena Dell'Aqua`} rol='Asesora comercial' titleRef={titleRef} />
                        </div>

                        <div className={style.container_mobile__third_column} ref={thirdcolumnRef}>
                            <CardEquipo image={yuliana} name='Yuliana Testoni' rol='Administrativa' titleRef={titleRef} />
                            <CardEquipo image={florencia} name='Florencia Calabres' rol='Asesora comercial' titleRef={titleRef} />
                            <CardEquipo image={luciana} name='Luciana Maure' rol='Asesora comercial' titleRef={titleRef} />
                            <CardEquipo image={tatiana} name='Tatiana Costante' rol='Administrativa' titleRef={titleRef} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
