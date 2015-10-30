import * as mongoose from 'mongoose';

/**
 * Todo Schema
 */
let todoSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: "",
        trim: true,
        required: "title cannot be blank"
    },
    action: {
        type: String,
        default: "",
        trim: true,
        required: "action cannot be blank"
    }
});

export default mongoose.model("Todo", todoSchema);