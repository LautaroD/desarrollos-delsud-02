import style from "./loader.module.scss";

export default function Loader({ setIsLoading }) {
    setTimeout(() => {
        setIsLoading(false);
    }, 2500);

    return <div className={style.wrapper}>Cargando...</div>;
}
