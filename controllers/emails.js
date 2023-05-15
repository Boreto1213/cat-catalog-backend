// const sgMail = require('@sendgrid/mail');
import sgMail from '@sendgrid/mail';

export const sendEmail = async (req, res) => {
    const { email, content, fromEmail, toEmail } = req.body
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const body = {
      to: toEmail,
      from: fromEmail,
      subject: `New Message From - ${email}`,
      text: content + `\n From customer: ${email}`,
      html: `<p>${content}</p>`
    }

    try {
      await sgMail.send(body)
      res.status(200).send('Message sent successfully.')
    } catch (error) {
      console.log('ERROR', error)
      res.status(400).send('Message not sent.')
    }
};