"use client";

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import Lottie from "lottie-react";
import gsap from "gsap";

import style from "./chart.module.scss";
import chart_json from "./chart.json";

gsap.registerPlugin(ScrollTrigger);

export default function Chart() {
    const lottieRef = useRef();
    const containerRef = useRef(null);

    useEffect(() => {
        lottieRef.current.pause();

        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    // start: "top+=180 bottom-=150",
                    start: "top center",
                    end: "center center",
                    onEnter: () => {
                        lottieRef.current.play();
                    },
                },
            });
            // .to(containerRef.current, {
            //     onComplete: () => {
            //         lottieRef.current.play();
            //     },
            // });
        });

        return () => {
            context.revert();
        };
    }, []);

    return (
        <div className={style.wrapper} ref={containerRef}>
            <Lottie animationData={chart_json} autoPlay={false} loop={false} preload='true' lottieRef={lottieRef} />
        </div>
    );
}
