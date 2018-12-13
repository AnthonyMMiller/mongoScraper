var mongoose = require("mongoose");
// schema class
var Schema = mongoose.Schema;

//  Note schema
var NoteSchema = new Schema({
    body: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});

// Note model 
var Note = mongoose.model("Note", NoteSchema);

// Export
module.exports = Note;