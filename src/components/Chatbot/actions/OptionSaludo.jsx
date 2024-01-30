import style from "../assets/OptionsSaludo.module.scss";

const OptionSaludo = (props) => {
    const options = [
        {
            text: "Formas de pago",
            handler: props.actionProvider.formasDePago,
            id: 1,
        },
        {
            text: "Terrenos disponibles",
            handler: props.actionProvider.optionTerrenos,
            id: 2,
        },
        {
            text: "Forest",
            handler: props.actionProvider.forest,
            id: 3,
        },
    ];

    const optionsMarkup = options.map((option) => (
        <span className={style.option_loteo_button} key={option.id} onClick={(e) => option.handler(e)}>
            {option.text}
        </span>
    ));

    return (
        <div className={style.options_loteos_container}>
            <span className={style.title_question}>Por favor, seleccioná una de las siguientes opciones:</span>
            {optionsMarkup}
        </div>
    );
};

export default OptionSaludo;
