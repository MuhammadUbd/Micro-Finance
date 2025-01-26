// import mongoose from "mongoose";
// import bcrypt from "bcrypt";

// const adminSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//             trim: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//             trim: true,
//             lowercase: true,
//         },
//         password: {
//             type: String,
//             required: true,
//             minlength: 6,
//         },
//         role: {
//             type: String,
//             default: "admin",
//         },
//     },
//     { timestamps: true }
// );

// export const Admin = mongoose.model('admin', adminSchema)