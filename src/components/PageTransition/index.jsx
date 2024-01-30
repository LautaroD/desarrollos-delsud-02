"use client";

import style from "./pageTransition.module.scss";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({ children }) {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        // gsap.set(containerRef.current, {
        //     scale: 0.5,
        //     x: 2000,
        // });

        gsap.to(containerRef.current, {
            scale: 1,
            x: 0,
        });

        return () => {};
    }, []);

    return (
        <div className={style.wrapper} ref={containerRef}>
            {children}
        </div>
    );
}
