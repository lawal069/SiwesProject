import {Schema, model, models} from "mongoose";

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            minLength: [4, 'Name should be at least 4 character'],
            maxLength: [30, 'Name should be less than 40 character'],
        },
        email: {
            type: String,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email address'],
        },
        subject: {
            type: String,
            required: true,
            minLength: [4, 'Subject should be at least 4 character'],
            maxLength: [20, 'Name should be less than 40 character'],
        },
        message: {
            type: String,
            required: true,
            minLength: [4, 'Subject should be at least 4 character'],
        },
    }
);

const ContactUs = models.ContactUs || model('ContactUs', contactSchema)

export default ContactUs;