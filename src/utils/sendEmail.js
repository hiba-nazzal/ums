import nodemailer from 'nodemailer';

export async function sendEmail(to,subject,html){
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "heba999.nazzal@gmail.com",
      pass: "yxyw exef lmbe rtlp",
    },
  });


  const info = await transporter.sendMail({
    from: '"Node10 👻" <heba999.nazzal@gmail.com>', // sender address
    to,
    subject,
    html,
  });
}