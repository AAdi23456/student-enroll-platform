const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  major: { type: String, required: true },
  enrollmentDate: { type: Date, required: true, default: Date.now },
  Phone: { type: String, required: true },
  Gender: { type: String, required: true }
});

module.exports = mongoose.model('Student', studentSchema);
