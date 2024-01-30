import { delsud } from "../../../public/resources/images";
import { Arroba, Location, Instagram, Linkedin, Facebook } from "@/components/Svgs";
import style from "./footer.module.scss";
import Image from "next/image";

export default function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <span className={style.container__info}>
                    <span>
                        <a href='mailto:info@desarrollosdelsud.com.ar'>
                            <Arroba /> info@desarrollosdelsud.com.ar
                        </a>
                    </span>
                    <span>
                        <Location /> Calle 37 N°125 entre 117 y 118
                    </span>
                </span>

                <span className={style.container__redes}>
                    <Instagram />
                    <Facebook />
                    <Linkedin />
                </span>
            </div>

            <div className={style.footer}>
                <span>
                    <a href='https://grupodelsud.com/' target='_blank' rel='noreferrer'>
                        <Image src={delsud} alt='Desarrollos Delsud' />
                    </a>

                    <p>© Desarrollos Delsud. Todos los derechos reservados</p>
                </span>
            </div>
        </div>
    );
}
