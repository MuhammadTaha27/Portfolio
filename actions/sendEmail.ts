"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

const validatestring=(value: unknown, maxlength:number) =>
{
    if(!value || typeof value !== "string" || value.length > maxlength )
    {
        return false
    }

    return true
}

export const sendEmail = async (formData:FormData) => { 
    const name =formData.get('name');
    const message =formData.get('message');
    const senderEmail =formData.get('email');

    if (!validatestring(senderEmail,500))
    {
        return{
            error:"invalid sender email"
        }
    }

    if (!validatestring(message,5000))
    {
        return{
            error:"invalid Message"
        }
    }

    if (!validatestring(name,500))
    {
        return{
            error:"invalid Name"
        }
    }

    console.log("Running on server");
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("message"));
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to:'mtaha43679@gmail.com',
        subject:'Message from contact form',
        reply_to: senderEmail as string,
        text: message as string
    })


}