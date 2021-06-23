const nodemailer = require('nodemailer');
const templateDesign = require('./template-email')

module.exports = {
    sendEmailAUser(params) {
        const {name, email, message} = params
        
        // nodemailer stuff will go here
        let transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });        

        // This email will be sent to the customer for confirmation
        const html = templateDesign(name, message)
        const mailOptions = {
            from: `SOPORTE TECNICO RIVER <${process.env.GMAIL_USER}>`,
            cc: [
                process.env.GMAIL_USER
            ],
            to: email,
            subject: `Tus datos han sido enviados con éxito`,
            html
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            }
        });
    },
}
