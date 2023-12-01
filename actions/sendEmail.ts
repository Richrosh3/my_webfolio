"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(senderEmail, 100)) {
        return { error: "Invalid Sender Email" };
    }

    if (!validateString(message, 5000)) {
        return { error: "Invalid Message" }
    }


    try {
        await resend.emails.send({
            from: "Contact Form<onboarding@resend.dev>",
            to: 'rabrah99@gmail.com',
            subject: "Message from Webfolio",
            reply_to: senderEmail as string,
            text: message as string
        })
    }
    catch (error: unknown) {

        return {
            error: getErrorMessage(error)
        }
    }
};