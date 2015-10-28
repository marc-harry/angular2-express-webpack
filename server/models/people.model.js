import mongoose from 'mongoose';

/**
 * Person Schema
 */
let personSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: "",
        trim: true
    },
    name: {
        type: String,
        default: "",
        trim: true,
        required: "Name cannot be blank"
    }
});

export default mongoose.model("Person", personSchema);
