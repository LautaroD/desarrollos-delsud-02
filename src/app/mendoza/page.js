"use client";

import { Formik, Field, Form as FormularioFormik } from "formik";
import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import gsap from "gsap";

import style from "./page.module.scss";
import { ArrowSubmit } from "@/components/Svgs";
import { Footer, ButtonAnim } from "@/components";
import mendoza_bg from "../../../public/resources/videos/mendoza_bg.webm";

function validationSchema() {
    return Yup.object({
        email: Yup.string().email("Email erróneo!").required("Campos obligatorios!"),
    });
}

export default function Mendoza() {
    const containerRef = useRef();
    const router = useRouter();

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        tl.to(containerRef.current, {
            // right: "0%",
            opacity: "1",
            duration: 0.5,
            ease: "power.inOut",
        });
    }, []);

    const goLaplata = () => {
        gsap.to(containerRef.current, {
            // right: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power.inOut",
            onComplete: () => router.push("/laplata"),
        });
    };

    const goRefound = () => {
        gsap.to(containerRef.current, {
            // right: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power.inOut",
            onComplete: () => router.push("/refound"),
        });
    };

    return (
        <>
            <div className={style.wrapper} ref={containerRef}>
                <video autoPlay preload='true' muted>
                    <source src={mendoza_bg} type='video/webm' />
                </video>

                <div className={style.container}>
                    <h3>Próximamente</h3>
                    <h4>
                        <span>
                            Si querés obtener <b>información</b> sobre nuestros
                        </span>
                        <span>
                            <b>futuros loteos</b> en <b>Mendoza</b>
                        </span>
                    </h4>

                    <span>
                        <Formik
                            validationSchema={validationSchema}
                            initialValues={{
                                email: "",
                            }}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                try {
                                    await fetch("/api/mendoza", {
                                        method: "POST",
                                        headers: {
                                            Accept: "application/json, text/plain, */*",
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            values,
                                        }),
                                    });

                                    resetForm();
                                } catch (error) {
                                    console.error(error.message);
                                }
                            }}
                        >
                            {({ errors, touched }) => (
                                <FormularioFormik>
                                    <span className={style.formulario}>
                                        <Field
                                            className={style.formulario__field}
                                            id='email'
                                            name='email'
                                            placeholder='¡Escribí tu mail acá! *'
                                            type='email'
                                        />
                                        {errors.email && touched.email ? <span className={style.error_message}>{errors.email}</span> : null}
                                        <button type='submit'>
                                            <ArrowSubmit />
                                        </button>
                                    </span>
                                </FormularioFormik>
                            )}
                        </Formik>
                    </span>

                    <span className={style.container__projects__other_products}>
                        <span onClick={goRefound}>
                            <ButtonAnim variant='refound' version='v2' />
                        </span>

                        <span onClick={goLaplata}>
                            <ButtonAnim variant='laplata' version='v2' />
                        </span>
                    </span>
                </div>
            </div>
            <Footer />
        </>
    );
}
