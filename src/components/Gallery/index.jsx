"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";
import Image from "next/image";

import style from "./gallery.module.scss";
import "@splidejs/react-splide/css";

export default function index({ images }) {
    return (
        <div className={style.wrapper}>
            <Splide
                tag='section'
                extensions={{ Grid }}
                className='galeria_desarrollos'
                options={{
                    pagination: false,
                    arrows: false,
                    type: "loop",
                    perPage: 4,
                    width: "100vw",
                    grid: {
                        dimensions: [
                            [2, 1],
                            [1, 1],
                            [2, 1],
                            [1, 1],
                            // [2, 2],
                            // [3, 2],
                        ],
                        gap: {
                            row: "30px",
                            col: "100px",
                        },
                    },
                }}
            >
                <SplideSlide>
                    <div className={style.slider_item_horizontal}>
                        <Image src={images[0]} alt='La Escondida' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={style.slider_item_horizontal}>
                        <Image src={images[1]} alt='La Escondida' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={style.slider_item_vertical}>
                        <Image src={images[2]} alt='La Escondida' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={style.slider_item_horizontal}>
                        <Image src={images[3]} alt='La Escondida' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={style.slider_item_horizontal}>
                        <Image src={images[4]} alt='La Escondida' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={style.slider_item_vertical}>
                        <Image src={images[5]} alt='La Escondida' />
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
}
