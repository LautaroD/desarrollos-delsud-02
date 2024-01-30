import style from "../assets/OptionReturn.module.scss";

const OptionReturnTerrenos = (props) => {
    return (
        // <Animated animationIn='slideInRight' animationOut='fadeOut' isVisible={true} animationInDelay={250}>
        //        </Animated>

        <span className={style.container__extraOptions}>
            <button
                className={style.container__extraOptions__returnBtn}
                key={Date.now() * Math.random()}
                onClick={(e) => props.actionProvider.moreTerrenos(e)}
            >
                Ver más zonas
                <svg width='15px' height='15px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6 12H18M12 6V18' stroke='#003a70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
            </button>

            <button
                className={style.container__extraOptions__returnBtn}
                key={Date.now()}
                onClick={(e) => props.actionProvider.returnMenu(e)}
            >
                Volver al menú inicial
                <svg width='15px' height='15px' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12.9998 8L6 14L12.9998 21' stroke='#003a70' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
                    <path
                        d='M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984'
                        stroke='#003a70'
                        strokeWidth='4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </button>
        </span>
    );
};

export default OptionReturnTerrenos;
