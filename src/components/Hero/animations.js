// import { gsap } from "gsap";

// gsap.defaults({
//     duration: 1,
//     ease: "none",
// });

// export const setContainer = (containerRef) => {
//     const tl = gsap.timeline();
//     tl.to(containerRef, { opacity: 1, duration: 0.3 });
//     return tl;
// };

// export const expandContainer = (containerRef) => {
//     const tl = gsap.timeline();

//     tl.to(containerRef, {
//         height: "100%",
//         width: "100%",
//         stagger: {
//             from: "start",
//         },
//     });
//     return tl;
// };

// export const minimizeContainer = (containerRef, textRefs) => {
//     const tl = gsap.timeline();

//     tl.to(textRefs, { y: "100%", stagger: 0.2, duration: 0.5 });
//     tl.to(containerRef, { width: "16%", height: "27%" });
//     tl.to(containerRef, { opacity: 0 });

//     return tl;
// };

// export const textAnimation = (textRefs) => {
//     return gsap.to(textRefs, {
//         y: 0,
//         stagger: 0.2,
//         duration: 0.5,
//     });
// };

// export const exitContainer = (containerRef) => {
//     const tl = gsap.timeline();

//     // tl.to(containerRef, { opacity: 0, y: 100 });
//     return tl;
// };
import { gsap } from "gsap";

gsap.defaults({
    duration: 1,
    ease: "none",
});

export const setContainer = (containerRef) => {
    const tl = gsap.timeline();
    tl.to(containerRef, { opacity: 1, duration: 0.3 });
    return tl;
};

export const expandContainer = (containerRef) => {
    const tl = gsap.timeline();

    tl.to(containerRef, {
        height: "100%",
        width: "100%",
        stagger: {
            from: "start",
        },
    });
    return tl;
};

export const minimizeContainer = (containerRef, textRefs) => {
    const tl = gsap.timeline();

    tl.to(textRefs, { y: "100%", stagger: 0.2, duration: 0.5 });
    tl.to(containerRef, { width: "16%", height: "27%" });
    tl.to(containerRef, { opacity: 0 });

    return tl;
};

export const textAnimation = (textRefs) => {
    return gsap.to(textRefs, {
        y: 0,
        stagger: 0.2,
        duration: 0.5,
    });
};

export const exitContainer = (containerRef) => {
    const tl = gsap.timeline();

    // tl.to(containerRef, { opacity: 0, y: 100 });
    return tl;
};
