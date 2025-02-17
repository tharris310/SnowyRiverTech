'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // You'll need to verify your domain to change this
      to: 'tyler@snowyrivertech.com',
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
} 