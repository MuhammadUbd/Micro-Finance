import nodemailer from "nodemailer";
import env from "dotenv"
env.config()

const email = process.env.PORTAL_EMAIL;
const password = process.env.PORTAL_PASSWORD;
// Gmail SMTP configuration

export const transporter = nodemailer.createTransport({
    service: "gmail",
    port : 465,
    secure: true,
    auth: {
        user: email,
        pass: password, 
    },
});

// Sender details
export const sender = {
    name: "Ubaid Web",
    email: email,
};
