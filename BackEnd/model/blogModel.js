import mongoose from "mongoose";

const BlogModel = mongoose.Schema({
    user_name: {type: String, required: true},
    initial_Amount: {type: String, required: true},
    time_Duration: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
})

export const Loan = mongoose.model("loans", BlogModel)
