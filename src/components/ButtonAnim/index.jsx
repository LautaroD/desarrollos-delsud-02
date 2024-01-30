import Lottie from "lottie-react";

import style from "./ButtonAnim.module.scss";
import laplata_json from "./laplata.json";
import refound_json from "./refound.json";
import mendoza_json from "./mendoza.json";
import laplata_beige_json from "./laplata_beige.json";
import refound_beige_json from "./refound_beige.json";
import mendoza_beige_json from "./mendoza_beige.json";

export default function index({ variant = "laplata", version = "v1" }) {
    return (
        <div className={style.wrapper}>
            {version === "v1" ? (
                variant === "laplata" ? (
                    <span className={style.container_btn}>
                        <Lottie animationData={laplata_json} loop={false} />
                        La Plata
                    </span>
                ) : variant === "refound" ? (
                    <span className={style.container_btn}>
                        <Lottie animationData={refound_json} loop={false} />
                        Refound
                    </span>
                ) : (
                    <span className={style.container_btn}>
                        <Lottie animationData={mendoza_json} loop={false} />
                        Mendoza
                    </span>
                )
            ) : variant === "laplata" ? (
                <span className={style.container_btn_v2} style={{ width: "100px" }}>
                    <Lottie animationData={laplata_beige_json} loop={false} />
                    La Plata
                </span>
            ) : variant === "refound" ? (
                <span className={style.container_btn_v2}>
                    <Lottie animationData={refound_beige_json} loop={false} />
                    Refound
                </span>
            ) : (
                <span className={style.container_btn_v2}>
                    <Lottie animationData={mendoza_beige_json} loop={false} />
                    Mendoza
                </span>
            )}
        </div>
    );
}
