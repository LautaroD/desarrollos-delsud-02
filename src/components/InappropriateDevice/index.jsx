import style from "./InappropiateDevice.module.scss";

export default function InappropiateDevice({ variant = "v1" }) {
    return (
        <>
            {variant === "v1" ? (
                <div className={style.wrapper}>
                    Dispositivo incompatible, para visualizar los lotes disponibles ingrese desde una computadora, gracias.
                </div>
            ) : (
                <div className={style.wrapper_v2}>
                    Dispositivo incompatible. Para visualizar los lotes disponible, ingrese desde una computadora. ¡Gracias!
                </div>
            )}
        </>
    );
}
