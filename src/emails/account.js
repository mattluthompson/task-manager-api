const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mattluthompson@gmail.com',
        subject: 'Welcome to the App!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mattluthompson@gmail.com',
        subject: 'Sorry to See You Go!',
        text: `Hi, ${name}! We are sorry to see you go! Can you let us know why you cancelled?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}