"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";

import { DesarrollosLogo, BurgerMenu } from "@/components/Svgs";
import { useWindowSize } from "@/hooks/useWindowSize";
import style from "./navbar.module.scss";
import { Menu } from "./Menu";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const windowSize = useWindowSize();

    const containerRef = useRef(null);
    const menuRef = useRef(null);

    const pathname = usePathname();

    const handleOpen = () => {
        setOpen(!open);
    };

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.2, duration: 0.2 });
    };

    const onExit = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1, duration: 0.2 });
    };

    return (
        <>
            <div
                className={style.wrapper}
                ref={containerRef}
                style={
                    windowSize.width < 530
                        ? pathname === "/nosotros"
                            ? { backgroundColor: "#FCF4E6" }
                            : pathname === "/"
                            ? { backgroundColor: "#FCF4E6" }
                            : null
                        : null
                }
            >
                <Link href='/'>
                    <DesarrollosLogo
                        fill={
                            pathname === "/laplata"
                                ? "#FCF4E6"
                                : pathname === "/mendoza"
                                ? "#14213d"
                                : pathname === "/refound/lasonada"
                                ? "#FCF4E6"
                                : "#14213d"
                        }
                    />
                </Link>
                <span className={style.wrapper__burger} ref={menuRef} onClick={handleOpen} onMouseEnter={onEnter} onMouseLeave={onExit}>
                    <BurgerMenu
                        fill={
                            pathname === "/laplata"
                                ? "#FCF4E6"
                                : pathname === "/mendoza"
                                ? "#14213d"
                                : pathname === "/refound/lasonada"
                                ? "#FCF4E6"
                                : "#14213d"
                        }
                    />
                </span>
            </div>
            <Menu open={open} setOpen={setOpen} />
        </>
    );
}
// "use client";

// import { useState, useRef } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import gsap from "gsap";

// import { DesarrollosLogo, BurgerMenu } from "@/components/Svgs";
// import { useWindowSize } from "@/hooks/useWindowSize";
// import style from "./navbar.module.scss";
// import { Menu } from "./Menu";

// export default function Navbar() {
//     const [open, setOpen] = useState(false);
//     const windowSize = useWindowSize();

//     const containerRef = useRef(null);
//     const menuRef = useRef(null);

//     const pathname = usePathname();

//     const handleOpen = () => {
//         setOpen(!open);
//     };

//     const onEnter = ({ currentTarget }) => {
//         gsap.to(currentTarget, { scale: 1.2, duration: 0.2 });
//     };

//     const onExit = ({ currentTarget }) => {
//         gsap.to(currentTarget, { scale: 1, duration: 0.2 });
//     };

//     return (
//         <>
//             {windowSize.width > 530 ? (
//                 <div className={style.wrapper} ref={containerRef}>
//                     <Link href='/'>
//                         <DesarrollosLogo
//                             fill={
//                                 pathname === "/laplata"
//                                     ? "#FCF4E6"
//                                     : pathname === "/mendoza"
//                                     ? "#14213d"
//                                     : pathname === "/refound/lasonada"
//                                     ? "#FCF4E6"
//                                     : "#14213d"
//                             }
//                         />
//                     </Link>
//                     <span className={style.wrapper__burger} ref={menuRef} onClick={handleOpen} onMouseEnter={onEnter} onMouseLeave={onExit}>
//                         <BurgerMenu
//                             fill={
//                                 pathname === "/laplata"
//                                     ? "#FCF4E6"
//                                     : pathname === "/mendoza"
//                                     ? "#14213d"
//                                     : pathname === "/refound/lasonada"
//                                     ? "#FCF4E6"
//                                     : "#14213d"
//                             }
//                         />
//                     </span>
//                 </div>
//             ) : (
//                 <div
//                     className={style.wrapper}
//                     ref={containerRef}
//                     style={{
//                         backgroundColor:
//                             pathname === "/laplata"
//                                 ? "transparent"
//                                 : pathname === "/mendoza"
//                                 ? "#14213d"
//                                 : pathname === "/refound/lasonada"
//                                 ? "#FCF4E6"
//                                 : pathname === "/nosotros"
//                                 ? "#FCF4E6"
//                                 : "transparent",
//                     }}
//                 >
//                     <Link href='/'>
//                         <DesarrollosLogo
//                             fill={
//                                 pathname === "/laplata"
//                                     ? "#FCF4E6"
//                                     : pathname === "/mendoza"
//                                     ? "#14213d"
//                                     : pathname === "/refound/lasonada"
//                                     ? "#FCF4E6"
//                                     : "#14213d"
//                             }
//                         />
//                     </Link>
//                     <span className={style.wrapper__burger} ref={menuRef} onClick={handleOpen} onMouseEnter={onEnter} onMouseLeave={onExit}>
//                         <BurgerMenu
//                             fill={
//                                 pathname === "/laplata"
//                                     ? "#FCF4E6"
//                                     : pathname === "/mendoza"
//                                     ? "#14213d"
//                                     : pathname === "/refound/lasonada"
//                                     ? "#FCF4E6"
//                                     : "#14213d"
//                             }
//                         />
//                     </span>
//                 </div>
//             )}
//             <Menu open={open} setOpen={setOpen} />
//         </>
//     );
// }
