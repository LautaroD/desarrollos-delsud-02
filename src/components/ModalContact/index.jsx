"use client";

import * as Yup from "yup";
import { Formik, Field, Form as FormularioFormik } from "formik";

import style from "./modalcontacto.module.scss";
import { ArrowSubmit } from "@/components/Svgs";

const phoneRegExp = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;

function validationSchema() {
    return Yup.object({
        nombre: Yup.string().required("Campos obligatorios!").min(5, "Nombre muy corto!"),
        apellido: Yup.string().required("Campos obligatorios!").min(4, "Apellido muy corto!"),
        email: Yup.string().email("Email erróneo!").required("Campos obligatorios!"),
        celular: Yup.string().required("Campo obligatorio!").matches(phoneRegExp, "Número de celular inválido."),
        comentario: Yup.string(),
        horarioDeContacto: Yup.string(),
    });
}

export default function ModalContact({ formContainerRef, handleClose }) {
    return (
        <div className={style.wrapper} ref={formContainerRef}>
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    nombre: "",
                    apellido: "",
                    celular: "",
                    email: "",
                    horarioDeContacto: "",
                    comentario: "",
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        await fetch("/api", {
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
                        handleClose();
                    } catch (error) {
                        console.error(error.message);
                    }
                }}
            >
                {({ errors, touched, isSubmitting, values }) => (
                    <FormularioFormik>
                        <span className={style.container}>
                            <span className={style.container__header}>Contactanos</span>

                            <span className={style.container__description}>
                                ¡Envianos tu consulta! También nos podés escribir por Whatsapp
                            </span>

                            <span className={style.container__field}>
                                <p>Nombre completo</p>

                                <span>
                                    <Field className={style.field} id='nombre' name='nombre' placeholder='Nombre *' />
                                    {errors.nombre && touched.nombre ? <span className={style.error_message}>{errors.nombre}</span> : null}

                                    <Field className={style.field} id='apellido' name='apellido' placeholder='Apellido *' />
                                    {errors.apellido && touched.apellido ? (
                                        <span className={style.error_message}>{errors.apellido}</span>
                                    ) : null}
                                </span>
                            </span>

                            <span className={style.container__field}>
                                <p>Email</p>

                                <span>
                                    <Field className={style.field} id='email' name='email' placeholder='Email *' type='email' />
                                    {errors.email && touched.email ? <span className={style.error_message}>{errors.email}</span> : null}
                                </span>
                            </span>

                            <span className={style.container__field_double}>
                                <span>
                                    <p>Teléfono</p>

                                    <span>
                                        <Field className={style.field} id='celular' name='celular' placeholder='Telefono *' type='tel' />
                                        {errors.celular && touched.celular ? (
                                            <span className={style.error_message}>{errors.celular}</span>
                                        ) : null}
                                    </span>
                                </span>

                                <span>
                                    <p>Horario de contacto</p>
                                    <span>
                                        <Field
                                            className={style.field}
                                            id='horarioDeContacto'
                                            name='horarioDeContacto'
                                            placeholder='Horario de contacto'
                                            type='time'
                                        />
                                    </span>
                                </span>
                            </span>

                            <span className={`${style.container__field} ${style.comentarios}`}>
                                <p>Dejanos tu comentario</p>

                                <span>
                                    <Field
                                        className={style.field_area}
                                        id='comentario'
                                        name='comentario'
                                        placeholder='Dejanos tu comentario...'
                                        component='textarea'
                                        rows={10}
                                    />
                                </span>
                            </span>

                            {values.nombre.length < 3 ? (
                                <span className={style.button_disabled}>Llene los campos por favor</span>
                            ) : !values.celular.match(phoneRegExp) ? (
                                <span className={style.button_disabled}>Llene los campos por favor</span>
                            ) : values.email.length < 5 ? (
                                <span className={style.button_disabled}>Llene los campos por favor</span>
                            ) : (
                                <button className={style.button_submit} type='submit'>
                                    <span className={style.button_submit__text}>Enviar</span>
                                    <span className={style.button_submit__send}>
                                        <ArrowSubmit fill='#003a70' />
                                    </span>
                                </button>
                            )}
                        </span>
                    </FormularioFormik>
                )}
            </Formik>
        </div>
    );
}
