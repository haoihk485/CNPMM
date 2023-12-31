import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});


const user = mongoose.model('user', userSchema);

export default user;