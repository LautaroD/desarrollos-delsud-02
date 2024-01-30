import Link from "next/link";

import style from "./Desplegable.module.scss";

export default function Desplegable({ handleClose }) {
    return (
        <div className={style.wrapper}>
            <Link href='/laplata' onClick={handleClose}>
                <p>La Plata</p>
            </Link>

            <Link href='/refound' onClick={handleClose}>
                <p>Refound</p>
            </Link>

            <Link href='/mendoza' onClick={handleClose}>
                <p>Mendoza</p>
            </Link>
        </div>
    );
}
