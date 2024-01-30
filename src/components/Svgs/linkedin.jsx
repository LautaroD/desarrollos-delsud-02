"use client";

import { useState } from "react";

export const Linkedin = ({ width = 44, height = 44 }) => {
    const [color, setColor] = useState("#FCF4E6");

    const onEnter = () => {
        setColor("#fc7032");
    };

    const onLeave = () => {
        setColor("#FCF4E6");
    };

    return (
        <a href='https://www.linkedin.com/company/grupo-delsud/' target='_blank' rel='noreferrer'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={width}
                height={height}
                fill='none'
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ cursor: "pointer" }}
            >
                <path
                    fill={color}
                    d='M22.15 43.239C10.44 43.239.91 33.706.91 21.993S10.44.747 22.15.747c11.71 0 21.24 9.533 21.24 21.246s-9.53 21.246-21.24 21.246Zm0-40.881c-10.82 0-19.63 8.812-19.63 19.635 0 10.823 8.81 19.635 19.63 19.635 10.82 0 19.63-8.812 19.63-19.635 0-10.823-8.81-19.635-19.63-19.635Z'
                />
                <path
                    fill={color}
                    d='M17.12 17.441h-4.23v13.664h4.23V17.441ZM14.98 15.652c1.38 0 2.5-1.13 2.5-2.521 0-1.39-1.12-2.52-2.5-2.52s-2.5 1.13-2.5 2.52c0 1.39 1.12 2.52 2.5 2.52ZM23.88 23.933c0-1.92.88-3.06 2.58-3.06 1.55 0 2.3 1.1 2.3 3.06v7.172h4.21v-8.652c0-3.661-2.07-5.431-4.97-5.431s-4.12 2.26-4.12 2.26v-1.84h-4.06v13.663h4.06v-7.172Z'
                />
            </svg>
        </a>
    );
};
