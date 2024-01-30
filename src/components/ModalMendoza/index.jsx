"use client";

import { Formik, Field, Form as FormularioFormik } from "formik";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ArrowSubmit } from "@/components/Svgs";
import style from "./modalmendoza.module.scss";

export default function ModalMendoza({ open, setOpen }) {
    const containerRef = useRef();

    useEffect(() => {
        if (open) gsap.to(containerRef.current, { scale: 1, opacity: 1, ease: "power.inOut", duration: 0.5 });
    }, [open]);

    const closePopup = () => {
        setOpen(false);
    };

    return (
        <>
            {open && (
                <div className={style.wrapper}>
                    <div className={style.container} ref={containerRef}>
                        <span className={style.container__title}>Próximamente</span>
                        <span className={style.container__description}>
                            Si querés obtener <b>información</b> sobre nuestros <br />
                            <b> futuros loteos</b> en <b>Mendoza</b>
                        </span>
                        <span className={style.container__form}>
                            <Formik
                                initialValues={{
                                    email: "",
                                }}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                    try {
                                        console.log(values);
                                        // await axios.post("https://www.api.desarrollosdelsud.com.ar:1999/api/forms/sendForm", values);
                                        // setOpen(true);
                                        // setTimeout(() => {
                                        //     setOpen(false);
                                        // }, 5000);
                                        // resetForm();
                                    } catch (error) {
                                        // setOpenError(true);
                                        // setTimeout(() => {
                                        //     setOpenError(false);
                                        // }, 5000);
                                        // resetForm();
                                        console.error(error.message);
                                    }
                                }}
                            >
                                {({}) => (
                                    <FormularioFormik>
                                        <span className={style.formulario}>
                                            <Field
                                                className={style.formulario__field}
                                                id='email'
                                                name='email'
                                                placeholder='¡Escribí tu mail acá! *'
                                            />
                                            <button type='submit'>
                                                <ArrowSubmit />
                                            </button>
                                        </span>
                                    </FormularioFormik>
                                )}
                            </Formik>
                        </span>
                    </div>
                    <div className={style.screen} onClick={closePopup} />
                </div>
            )}
        </>
    );
}
