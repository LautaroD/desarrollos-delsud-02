"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
// import Image from "next/image";

// import { circle_arrow, circle_arrow_fill, circle_arrow_azul, circle_arrow_azul_fill } from "../../../public/resources/images";
import style from "./button.module.scss";

export default function Button({ content, href = false, variant = "v1", redirect = false }) {
    const router = useRouter();

    const [hover, setHover] = useState(false);

    const handleClick = () => {
        if (href) {
            router.push(`/${href}`);
        }
    };

    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);

    return (
        <>
            {variant === "v3" ? (
                redirect ? (
                    <a href={redirect} target='_blank' rel='noreferrer'>
                        <button className={style[variant]} onClick={handleClick} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                            <span className={style.button}>{content}</span>
                        </button>
                    </a>
                ) : (
                    <button className={style[variant]} onClick={handleClick} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <span className={style.button}>{content}</span>
                    </button>
                )
            ) : redirect ? (
                <a href={redirect} target='_blank' rel='noreferrer'>
                    <button className={style[variant]} onClick={handleClick} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <span className={style.button}>{content}</span>
                    </button>
                </a>
            ) : (
                <button className={style[variant]} onClick={handleClick} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <span className={style.button}>{content}</span>
                </button>
            )}
        </>
    );
}
