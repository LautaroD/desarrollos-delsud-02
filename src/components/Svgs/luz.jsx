export const Luz = ({ fill = "#FCF4E6" }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='46' fill='none' viewBox='0 0 32 46'>
            <mask id='mask0_109_1115' style={{ maskType: "luminance" }} width='32' height='46' x='0' y='0' maskUnits='userSpaceOnUse'>
                <path fill='#fff' d='M31.69.879H.96v44.44h30.73V.879z'></path>
            </mask>
            <g mask='url(#mask0_109_1115)'>
                <path
                    fill={fill}
                    d='M31.7 19.239c-.47 3.71-2 7.84-5.76 10.76-1.28 1-1.67 1.93-1.16 3.39.44 1.29.27 2.65.37 3.99.31 4-2.22 5.97-5.25 7.6-.83.45-1.78.47-2.58-.06-2.87-1.87-5.71-3.77-6.27-7.57-.09-.62-.32-1.21-.43-1.83-.41-2.51-1.62-4.33-3.79-5.86-4.64-3.27-6.4-7.94-5.73-13.57.3-2.59.76-5.12 1.59-7.59 1.25-3.74 4-5.86 7.57-6.98 5.61-1.77 10.51.32 14.79 3.58 4.22 3.23 6.55 7.75 6.65 14.12h-.01l.01.02zm-15.07.76c.28-.54.49-.93.67-1.32.36-.83.92-1.44 1.86-1.02 1.1.49.85 1.42.48 2.3-.1.25-.21.5-.39.71-1.88 2.2-1.65 4.56-.68 7.04.68 1.76 1.16 2.03 3.02 1.34 4.21-1.53 7.53-7.27 6.79-11.73-1.14-6.88-5.62-11.7-12.45-13.13-4.08-.85-8.31.6-10.11 5.05-.84 2.08-1.6 4.14-1.94 6.38-.91 6.17 2.98 12.38 8.98 14.18.34.1.69.16 1.05.19 1.76.17 2.12-.13 1.95-1.86-.27-2.68-.71-5.32-2.2-7.66-.34-.53-.6-1.1-.84-1.67-.08-.2 0-.54.11-.74.21-.37.62-.31.95-.2 1.05.36 1.44 1.57 2.73 2.13h.01l.01.01zm-3.79 13.17c0 .27-.03.41 0 .44 1.47 1.12 6.99 1.09 8.31-.04.21-.18.37-.45.17-.68-.15-.18-.45-.39-.64-.36-2.59.5-5.22.52-7.84.65v-.01zm3.66 3.33c-.9-.11-1.33-.19-1.77-.21-.35-.02-.74-.02-.84.43-.09.38.09.69.41.9.22.13.48.29.72.3 2.13.06 4.22-.2 6.27-.73.4-.1.85-.45.6-.99-.22-.5-.72-.37-1.15-.28-1.56.35-3.11.64-4.24.59v-.01zm-.72 3.74c1.62.95 3.3 1.27 5.06.56.35-.13.63-.39.55-.8-.08-.45-.48-.55-.83-.47-1.57.37-3.18.34-4.79.69h.01v.02z'
                ></path>
            </g>
        </svg>
    );
};
