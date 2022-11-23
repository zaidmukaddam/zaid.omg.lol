import { MailerSend } from 'mailer-send-ts';

export const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY as string,
});
