"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import { bird, cloud } from "../../../public/resources/images";
import { CloseModal } from "@/components/Svgs";
import { useWindowSize } from "@/hooks/useWindowSize";
import style from "./benefits.module.scss";
import ShowBenefits from "./ShowBenefits";
import { Footer } from "@/components";

export default function Benefits() {
    const containerRef = useRef(null);
    const benefitsRef = useRef(null);
    const [seeBenefits, setSeeBenefits] = useState(false);

    const windowSize = useWindowSize();

    useEffect(() => {
        if (!seeBenefits) return;
        else {
            gsap.to(benefitsRef.current, {
                opacity: 0,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seeBenefits]);

    const handleClick = () => setSeeBenefits(true);

    const closeBenefits = () => {
        setSeeBenefits(false);
        gsap.to(benefitsRef.current, {
            opacity: 1,
        });
    };

    return (
        <div className={style.wrapper} ref={containerRef}>
            <span className={style.wrapper__close_benefits}>
                <div onClick={closeBenefits}>{!!seeBenefits ? <CloseModal height='30' /> : <></>}</div>
            </span>
            {windowSize.width > 570 ? (
                <span className={style.wrapper_content} ref={benefitsRef}>
                    <div className={style.container_text}>
                        <span>Beneficios </span> para clientes
                        <Image src={bird} alt='Click aca' onClick={handleClick} />
                    </div>
                    <div className={style.container_text2}>
                        <Image className={style.cloud} src={cloud} alt='Click aca' onClick={handleClick} />
                        de <b>Desarrollos Delsud</b>
                    </div>
                </span>
            ) : (
                <span className={style.wrapper_content} ref={benefitsRef}>
                    <div className={style.container_image}>
                        <Image src={cloud} alt='Click aca' onClick={handleClick} />
                        <Image src={bird} alt='Click aca' onClick={handleClick} />
                    </div>
                    <div className={style.container_text}>
                        <span>Beneficios </span> <> para clientes</>
                    </div>
                </span>
            )}

            <div className={style.container_info}>{seeBenefits ? <ShowBenefits /> : <></>}</div>
            <footer>
                <div className={style.divisor} />
                <Footer />
            </footer>
        </div>
    );
}
