const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  submissions: [
    {
      student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      status: String, // 'Completed', 'Pending'
      marks: Number,
      comments: String,
    },
  ],
  flowStatus: [
    {
      phase: String,
      status: { type: String, enum: ['not started', 'doing', 'done'] },
      date: Date,
      additionalLearnings: String,
    },
  ],
});

module.exports = mongoose.model('Project', projectSchema);
