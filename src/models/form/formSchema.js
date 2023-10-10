import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: true
    },
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questions'
    }],
    responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'responses'
    }]
});

const Forms = mongoose.models.forms || mongoose.model("forms", formSchema);

export default Forms;