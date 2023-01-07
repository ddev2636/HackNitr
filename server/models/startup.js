import mongoose from 'mongoose';

const startupSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Startup = mongoose.model('Startup',startupSchema);

export default Startup;