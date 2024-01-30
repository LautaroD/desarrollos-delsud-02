import style from "./PopupLoteDesarrollo.module.scss";

export const PopupLoteDesarrollo = ({ lote, loteHref }) => {
    return (
        <div className={style.container_popup_custom}>
            <div className={style.state_lot}>
                <div
                    className={style.squad}
                    style={{
                        backgroundColor: lote.selled === "Disponible" ? "#B8D368" : lote.selled === "Vendido" ? "#FC7032" : "#ECE544",
                    }}
                ></div>
                {lote.selled}
            </div>
            {/* Lote {lote.numberLot} */}
            <div className={style.separador}></div>
            Medidas: {lote.measures}
            <br />
            Orientación:
            {lote.selled === "Disponible" ? (
                <a target='_blank' href={`${loteHref}` + lote.numberLot}>
                    <button className={style.btn_reservar}>Reservar</button>
                </a>
            ) : (
                <></>
            )}
        </div>
    );
};
