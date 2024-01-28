import { Resend } from "resend";
import { UserDTO } from "../entities/DTO";

const { RESEND_KEY, EMAIL } = process.env;
const resend = new Resend(RESEND_KEY);

type sendCodeWithEmailProps = {
  data: UserDTO;
};

async function sendCodeWithEmail({ data }: sendCodeWithEmailProps) {
  const send = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: EMAIL as string,
    subject: "Send Token",
    html: `
    <table style="font-family: arial, sans-serif;
  width: 100%">
  <tr>
    <td style="border: 1px solid #dddddd">
    <section style="width:min(992px,80%);
margin:0 auto">
    <h1 style="text-wrap: balance;text-align:center">Hello ${data.name} ${data.first_name} ${data.second_name}</h1>
    <p style="text-wrap: pretty;">Our servers have received a request to change your password, so we give you the following code necessary to validate that it was you:
    </p>
    <div style="text-align:center">
    <span style="margin:0 auto;background:#dddddd; padding:8px; font-weight:bold;font-size:32px">${data.code}</span>
      </div>
    <p style="text-wrap: pretty;">Copy this code and complete the change of your password<br/>If you did not request this, please ignore this email.
    </p>
    </section>
    </td>
  </tr>
</table>
    `,
  });

  return send;
}
// falta poner el attentamente
export { sendCodeWithEmail };
