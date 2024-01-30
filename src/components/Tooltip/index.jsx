import style from "./tooltip.module.scss";

export default function Tooltip({ children, text = "", text2 = "", variant = "v1" }) {
    return (
        <>
            {variant === "v1" ? (
                <div className={style.wrapper}>
                    <div className={style.tooltip}>
                        <span className={style.tiptext}>
                            {text} <b>{text2}</b>
                        </span>
                        {children}
                    </div>
                </div>
            ) : (
                <div className={style.wrapper}>
                    <div className={style.tooltip}>
                        <span className={style.tiptext_v2}>
                            {text} <b>{text2}</b>
                        </span>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}
