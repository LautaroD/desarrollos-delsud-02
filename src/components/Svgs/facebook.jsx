"use client";

import { useState } from "react";

export const Facebook = ({ height = 44, width = 43 }) => {
    const [color, setColor] = useState("#FCF4E6");

    const onEnter = () => {
        setColor("#fc7032");
    };

    const onLeave = () => {
        setColor("#FCF4E6");
    };

    return (
        <a href='https://www.facebook.com/DesarrollosDelsud.LaPlata/' target='_blank' rel='noreferrer'>
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
                    height={height}
                    fill={color}
                    d='M21.32 43.239C9.61 43.239.08 33.706.08 21.993S9.61.747 21.32.747c11.71 0 21.24 9.533 21.24 21.246s-9.53 21.246-21.24 21.246Zm0-40.881c-10.82 0-19.63 8.812-19.63 19.635 0 10.823 8.81 19.635 19.63 19.635 10.82 0 19.63-8.812 19.63-19.635 0-10.823-8.81-19.635-19.63-19.635Z'
                />
                <path
                    fill={color}
                    d='M18.21 34.356h4.97V21.893h3.47l.37-4.171h-3.84v-2.38c0-.981.2-1.371 1.15-1.371h2.69V9.64h-3.44c-3.7 0-5.37 1.63-5.37 4.751v3.33h-2.59v4.222h2.59v12.413Z'
                />
            </svg>
        </a>
    );
};
