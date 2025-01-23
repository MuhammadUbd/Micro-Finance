import { sender, transporter } from "./nodeMailer.js";

// import { sender } from "./nodeMailer";


export const sendResetEmail = async (email, url) => {
    try {
        await transporter.sendMail({
            from: `${sender.name} <${sender.email}>`,
            to: email,
            subject: "Reset Password",
            html: `<div>
                        <h2>Hi there, Click the link below to change your password!</h2>
                        <a href=${url}>Reset Link</a>
                    </div>`
        })
    }
    catch (e) {
        console.log(e.message)
    }
}

export const sendSuccessEmail = async (email) => {
    await transporter.sendMail({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Password Updated", // Subject line
        html: `<div>
                    <h2>Congratulations! Your password has been updated</h2>
                    <p>Hello ${email} Welcome to ${sender.name}</p>
                </div>`, // html body
    });
}