import Image from "next/image";
import OptionReturn from "./OptionReturn";
import style from "../assets/OptionSocialNetwork.module.scss";

const OptionSocialNetworks = (props) => {
    const optionsMarkup = props.options.map((option, i) => (
        <a href={option.url} target='_blank' rel='noreferrer' style={{ width: "auto" }} key={i}>
            <Image key={option.id} src={option.src} alt={option.red} />
        </a>
    ));

    return (
        <>
            <div className={style.container}>
                <span className={style.title_question}>Nuestras redes:</span>
                <span className={style.container__redes}>{optionsMarkup}</span>
                <OptionReturn {...props} />
            </div>
        </>
    );
};

export default OptionSocialNetworks;
