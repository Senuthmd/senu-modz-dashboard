export async function GET() {
  const whatsappNumber = "94743903048";
  const message = `
Hi SENU MODZ 👋
I want to deploy a WhatsApp MD bot.

My details:
- Name: 
- Number: 
- Email: senumodz@gmail.com
- Plan:
`;

  const url =
    "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

  return Response.redirect(url);
}
