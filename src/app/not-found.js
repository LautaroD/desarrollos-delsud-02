import Link from "next/link";
import Image from "next/image";

import style from "@/styles/not_found.module.scss";
import { BackgroundNotFound, Ups } from "@/components/Svgs";
import { cerquito_404 } from "../../public/resources/images";

export default function NotFound() {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__background}>
                <BackgroundNotFound />
            </div>

            <div className={style.cerquito}>
                <Image src={cerquito_404} alt='Cerquito' />
            </div>

            <div className={style.texto}>
                <span className={style.texto__prim}>
                    <Ups />
                    <p>
                        Cable <br /> equivocado.
                    </p>
                </span>
                <span className={style.texto__return}>
                    <p>
                        Ocurrió un error. Enseguida lo resuelvo, por <br /> favor mientras tanto, hace clic en el botón
                    </p>
                    <Link href='/'>
                        <button>Regresar</button>
                    </Link>
                </span>
            </div>
        </div>
    );
}
