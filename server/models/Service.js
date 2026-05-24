const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  number: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  fullDesc: {
    type: [String],
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  image: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
    default: null,
  },
  order: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Service', serviceSchema);
