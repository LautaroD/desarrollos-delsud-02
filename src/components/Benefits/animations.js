import { gsap } from "gsap";

export const start = (containerRef) => {
    const tl = gsap.timeline();

    tl.to(containerRef, { bottom: 0 });

    return tl;
};
