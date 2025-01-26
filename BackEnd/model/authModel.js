import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    // username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    CNIC: { type: String, required: true },
    role: { type: String, default: "admin" },
    isVerified: { type: Boolean, default: true },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date, default: () => Date.now() + 1 * 60 * 60 * 1000 }
})

export const User = mongoose.model('user', UserSchema);