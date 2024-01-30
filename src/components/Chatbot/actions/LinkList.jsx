import React from "react";
import style from "../assets/OptionsSaludo.module.scss";

const LinkList = (props) => {
    const linkMarkup = props.options.map((link, i) => (
        <div key={i} onClick={(e) => props.actionProvider.detailTerreno(e, link.id)} className={style.option_loteo_button}>
            {link.text}
        </div>
    ));

    return (
        <>
            <div className={style.options_loteos_container}>
                <span className={style.title_question}>Seleccioná la que más te interesa:</span>
                {linkMarkup}
            </div>
        </>
    );
};

export default LinkList;
