const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'sandhya.channapura@gmail.com',
//     from: 'sandhya.channapura@gmail.com',
//     subject: 'This is my first creation',
//     text: 'I hope this reaches you!'    
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
            to: email,
            from: 'sandhya.channapura@gmail.com',
            subject: 'Thanks for joining in!',
            text: `Welcome to the App, ${name}. Let me know how you get along with the app.`    
        })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sandhya.channapura@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Good bye, ${name}! I hope to see you back sometime soon. Let me know what I could have done to keep you on board.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}