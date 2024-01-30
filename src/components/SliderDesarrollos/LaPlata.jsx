"use client";

import { SanJulian, SopheniaLogo, GardenLogo, EscondidaLogo } from "@/components/Svgs";
import { useWindowSize } from "@/hooks/useWindowSize";
import style from "./LaPlata.module.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function LaPlata({ containerRef }) {
    const splideRef = useRef(null);

    const windowSize = useWindowSize();
    const router = useRouter();

    const handleClick = (number, href) => {
        if (splideRef.current) {
            splideRef.current.go(number);

            gsap.to(containerRef.current, {
                backgroundColor: "#fcf4e6",
                opacity: 0,
                ease: "power2.inOut",
                onComplete: () => {
                    router.push(href);
                },
            });
        }
    };

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            scale: 1.2,
            ease: "power3.inOut",
            duration: 0.5,
        });
    };

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            scale: 1,
            ease: "power3.inOut",
            duration: 0.5,
        });
    };

    return (
        <div className={style.wrapper}>
            {windowSize.width > 530 ? (
                <Splide
                    options={{
                        autoplay: windowSize.width > 860 ? false : true,
                        perPage: windowSize.width > 860 ? 4 : 2,
                        pagination: false,
                        arrows: false,
                        perMove: 1,
                    }}
                    ref={splideRef}
                    tag='section'
                >
                    <SplideSlide onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ cursor: "pointer" }} className='laescondida'>
                        <span className={style.container_logo} onClick={() => handleClick(0, "/laplata/laescondida", ".laescondida")}>
                            <EscondidaLogo />
                        </span>
                    </SplideSlide>

                    <SplideSlide onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ cursor: "pointer" }} className='garden'>
                        <span className={style.container_logo} onClick={() => handleClick(-1, "/laplata/garden", ".garden")}>
                            <GardenLogo />
                        </span>
                    </SplideSlide>

                    <SplideSlide onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ cursor: "pointer" }} className='sophenia'>
                        <span className={style.container_logo} onClick={() => handleClick(1, "/laplata/sophenia", ".sophenia")}>
                            <SopheniaLogo />
                        </span>
                    </SplideSlide>

                    <SplideSlide onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ cursor: "pointer" }} className='sanjulian'>
                        <span className={style.container_logo_sj} onClick={() => handleClick(1, "/laplata/sanjulian", ".sanjulian")}>
                            <SanJulian />
                        </span>
                    </SplideSlide>
                </Splide>
            ) : (
                <div className={style.container_mobile}>
                    <Link href='/laplata/garden'>
                        <GardenLogo height='140' />
                    </Link>

                    <Link href='/laplata/sophenia'>
                        <SopheniaLogo height='35' />
                    </Link>

                    <Link href='/laplata/sanjulian'>
                        <SanJulian height='110' />
                    </Link>

                    <Link href='/laplata/laescondida'>
                        <EscondidaLogo height='80' />
                    </Link>
                </div>
            )}
        </div>
    );
}
