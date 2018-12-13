const mongoose = require("mongoose");
// schema class
const Schema = mongoose.Schema;

//  Note schema
const NoteSchema = new Schema({
    body: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});

// Note model 
const Note = mongoose.model("Note", NoteSchema);

// Export
module.exports = Note;