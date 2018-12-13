const mongoose = require("mongoose");
const Note = require("./note");
// Schema class
const Schema = mongoose.Schema;

// article schema
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  //ran out of time trying to add picture, will add later
  //img: {
    //type: String,
    //default: "/public/images/bg.jpg"
  //},
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
const Article = mongoose.model("Article", ArticleSchema);

// Export 
module.exports = Article;