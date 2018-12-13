var mongoose = require("mongoose");
var Note = require("./note");
// Schema class
var Schema = mongoose.Schema;

// article schema
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes: [{
     type: Schema.Types.ObjectId,
     ref: "Note"
  }]
});

// Article model 
var Article = mongoose.model("Article", ArticleSchema);

// Export 
module.exports = Article;