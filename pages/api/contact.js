const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    if (req.method.toLowerCase() !== 'post') {
        res.status(404);
        return res.end();
    }

    sgMail.send({
        to: 'contact@lunr.digital',
        from: req.body.email,
        subject: `New Contact - ${req.body.firstName} ${req.body.lastName}`,
        text: req.body.message
    });
};
