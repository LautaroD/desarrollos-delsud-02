import sgMail from "@sendgrid/mail";

export const dynamic = "force-dynamic";
export async function POST(req) {
    const data = await req.json();

    sgMail.setApiKey(process.env.API_KEY);

    const msg = {
        to: "testing@gmail.com",
        from: "testing@gmail.com",
        subject: `Desarrollos Web - Mendoza`,
        html: `
    	<strong>Email: </strong> ${data.values.email ? data.values.email : "sin especificar"}<br /><br />
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
