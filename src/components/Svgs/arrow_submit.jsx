export const ArrowSubmit = ({ fill = "#FCF4E6" }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='47' height='47' fill='none' viewBox='0 0 47 47'>
            <g clipPath='url(#clip0_1103_5875)'>
                <circle cx='23.5' cy='23.5' r='23' fill={fill} stroke={fill}></circle>
                <path
                    stroke={fill === "#FCF4E6" ? "#5A6072" : "#FCF4E6"}
                    strokeLinecap='round'
                    strokeWidth='3'
                    d='M19.885 15.365l8.134 8.135-8.134 8.134'
                ></path>
            </g>
            <defs>
                <clipPath id='clip0_1103_5875'>
                    <path fill='#fff' d='M0 0H47V47H0z'></path>
                </clipPath>
            </defs>
        </svg>
    );
};
