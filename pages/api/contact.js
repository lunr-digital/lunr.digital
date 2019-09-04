const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.CONTACT_FORM);

export default async (req, res) => {
    if (req.method.toLowerCase() !== 'post' || req.body.ignore) {
        res.status(404);
        return res.end();
    }

    if (!process.env.CONTACT_FORM) {
        return res.json(req.body);
    }

    sgMail.send({
        to: 'lunrdigital@gmail.com',
        from: req.body.email,
        subject: `New Contact - ${req.body.firstName} ${req.body.lastName}`,
        text: req.body.message
    });

    res.status(200);
    res.end();
};
