import style from "./Refound.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Refound = ({ open }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (open) {
            gsap.to(containerRef.current, { opacity: 1, ease: "power3.inOut", display: "unset" });
        } else {
            gsap.to(containerRef.current, { opacity: 0, ease: "power2.out", display: "none" });
        }
    }, [open]);

    return (
        <div className={style.wrapper} ref={containerRef}>
            <div className={style.wrapper__container_img}>
                {open && (
                    <video autoPlay loop preload='true' muted>
                        <source src={require("../../../public/resources/videos/home_refound.webm")} type='video/webm' />
                    </video>
                )}
            </div>
        </div>
    );
};
