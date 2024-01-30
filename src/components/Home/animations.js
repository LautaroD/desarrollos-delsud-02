import { gsap } from "gsap";

export const nextComponent = (containerRef, setLaplata, setRefound) => {
    const tl = gsap.timeline();

    tl.to(containerRef, {
        scale: 0,
        opacity: 0,
        display: "none",
        onStart: () => {
            setLaplata(false);
            setRefound(false);
        },
    });

    return tl;
};
