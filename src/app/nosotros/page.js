"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import style from "./page.module.scss";

import { SliderNosotros, NuestroEquipo, Chart, Timeline, Footer } from "@/components";

gsap.registerPlugin(ScrollTrigger);

export default function Nosotros() {
    const containerRef = useRef(null);
    const [timeline, setTimeline] = useState(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "center center",
                    scrub: 1,
                },
            });
            setTimeline(tl);
        });

        return () => {
            context.revert();
        };
    }, []);

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <section className={style.slider}>
                    <SliderNosotros />
                </section>

                <section className={style.about_us} ref={containerRef}>
                    <NuestroEquipo timeline={timeline} />
                </section>

                <section>
                    <Chart timeline={timeline} />
                </section>

                <section>
                    <Timeline />
                </section>

                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
}
