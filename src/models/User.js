import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema= new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},
{timestamps: true,}
);

export default mongoose.models.Post || mongoose.model('User', userSchema);