//is admin
//email
//password
import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
})

export const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema)