"use client";

import style from "./ButtonWhatsapp.module.scss";
import { useWindowSize } from "@/hooks/useWindowSize";
import { WhatsappIcon } from "@/components/Svgs";

const ButtonWhatsapp = ({ open }) => {
    const size = useWindowSize();

    if (open && size.width < 530) return null;
    if (size.width < 530) return null;

    return (
        <>
            <div className={style.home} id='whatsapp-conversion'>
                <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://api.whatsapp.com/send?phone=+2215079256&text=%C2%A1Hola,%20Desarrollos%20Delsud!%20Quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos'
                >
                    <WhatsappIcon fill='#B8D368' />
                </a>
            </div>
        </>
    );
};

export default ButtonWhatsapp;
