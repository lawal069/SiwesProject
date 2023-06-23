import {Schema, model, models } from "mongoose";

const enrollSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First Name is required'],
            maxLength: [20, 'First Name should be less than 40 character'],
        },
        lastName: {
            type: String,
            required: [true, 'Last Name is required'],
            maxLength: [20, 'First Name should be less than 40 character'],
        },
        department: {
            type: String,
            required: true,
            maxLength: [11, 'Department should be less than 11 character'],
        },
        phoneNumber: {
            type: Number,
            required: true,
            minimum: [12, 'Number should be upto 11 digits']
        },
        gender: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email address'],
        },
        address: {
            type: String,
            required: true,
        },
        pName: {
            type: String,
            required: [true, 'Name is required'],
            minLength: [4, 'Name should be at least 4 character'],
            maxLength: [20, 'Name should be less than 40 character'],
        },
        pNumber: {
            type: Number,
            required: true,
            minLength: [12, 'Number should be upto 11 digits']
        },
        occupation: {
            type: String,
            required: true,
        },
        relationship: {
            type: String,
            required: true,
        },
        pAddress: {
            type: String,
            required: true,
        },
    }
);

const Enroll = models.Enroll || model('Enroll', enrollSchema)

export default Enroll;