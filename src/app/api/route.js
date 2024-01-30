import sgMail from "@sendgrid/mail";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(req) {
    const data = await req.json();

    sgMail.setApiKey(process.env.API_KEY);

    const msg = {
        to: "testing@gmail.com",
        from: "testing@gmail.com",
        subject: `Desarrollos Web - Formulario`,
        html: `
    	<strong>Contacto de: </strong> ${data.values.nombre + " " + data.values.apellido}<br /><br />
    	<strong>Celular: </strong> ${data.values.celular}<br /><br />
    	<strong>Email: </strong> ${data.values.email ? data.values.email : "sin especificar"}<br /><br />
    	<strong>Comunicarse a las: </strong> ${data.values.horarioDeContacto ? data.values.horarioDeContacto : "sin especificar"}<br /><br />
    	<strong>Mensaje: </strong> ${data.values.comentario ? data.values.comentario : ""}<br /><br />

    	`,
    };

    await sgMail
        .send(msg)
        .then((response) => {
            return Response.json(response);
        })
        .catch((error) => {
            console.error(error);
            return Response.json(error);
        });
    return Response.json("test");
}
