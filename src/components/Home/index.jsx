"use client";

import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";

import { ButtonAnim } from "@/components";
import { LaPlata, Refound } from "../ImagesModal";
import { nextComponent } from "./animations";
import style from "./home.module.scss";

export default function Home({ timeline }) {
    const router = useRouter();
    const containerRef = useRef(null);

    const [laplata, setLaplata] = useState(false);
    const [refound, setRefound] = useState(false);

    useEffect(() => {
        timeline && timeline.add(nextComponent(containerRef.current, setLaplata, setRefound));
    }, [timeline]);

    const onEnter = (currentTarget) => {
        if (currentTarget === "refound") {
            setRefound(true);
            gsap.to([".btn_laplata", ".btn_mendoza"], { opacity: 0.3, duration: 0.3 });
        } else if (currentTarget === "laplata") {
            setLaplata(true);
            gsap.to([".btn_mendoza", ".btn_refound"], { opacity: 0.3, duration: 0.3 });
        } else if (currentTarget === "mendoza") {
            gsap.to([".btn_laplata", ".btn_refound"], { opacity: 0.3, duration: 0.3 });
        }

        gsap.to(".frase_mersa", { opacity: 0.3 });
    };

    const onLeave = (currentTarget) => {
        if (currentTarget === "refound") setRefound(false);
        else if (currentTarget === "laplata") setLaplata(false);
        else if (currentTarget === "mendoza") setLaplata(false);

        gsap.to(".frase_mersa", { opacity: 1 });
        gsap.to([".btn_laplata", ".btn_mendoza", ".btn_refound"], { opacity: 1, duration: 0.3 });
    };

    const handleClick = (target) => {
        setRefound(false);
        setLaplata(false);

        const tl = gsap.timeline();
        router.push(`/${target}`);

        // tl.to(containerRef.current, {
        //     x: "100%",
        //     ease: "power2.inOut",
        //     duration: 0.5,
        //     onComplete: () => router.push(`/${target}`),
        // });
    };

    return (
        <>
            <div className={style.wrapper} ref={containerRef}>
                <div className={style.wrapper__first_column}>
                    <span
                        onClick={() => handleClick("laplata")}
                        className='btn_laplata'
                        onMouseEnter={() => onEnter("laplata")}
                        onMouseLeave={() => onLeave("laplata")}
                    >
                        <ButtonAnim />
                    </span>
                    <span
                        onClick={() => handleClick("refound")}
                        className='btn_refound'
                        onMouseEnter={() => onEnter("refound")}
                        onMouseLeave={() => onLeave("refound")}
                    >
                        <ButtonAnim variant='refound' />
                    </span>
                    <span
                        className='btn_mendoza'
                        onClick={() => handleClick("mendoza")}
                        onMouseEnter={() => onEnter("mendoza")}
                        onMouseLeave={() => onLeave("mendoza")}
                    >
                        <ButtonAnim variant='mendoza' />
                    </span>
                </div>

                <div className={`${style.wrapper__second_column} frase_mersa`}>
                    <h1>
                        <span>
                            <b>{`"`}</b>Hay lugares donde
                        </span>
                        <span>uno se queda,</span>
                        <span>y lugares que se</span>
                        <span>
                            quedan en <span>uno</span>
                            <b>{`"`}</b>
                        </span>
                        <span className={style.wrapper__second_column__autor}>Marcel Proust-</span>
                    </h1>
                </div>
            </div>

            <LaPlata open={laplata} />
            <Refound open={refound} />
        </>
    );
}
