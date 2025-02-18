// // const mongoose = require('mongoose');

// // const UserSchema = new mongoose.Schema({
// //   name: {
// //     type: String,
// //     required: true,
// //     trim: true
// //   },
// //   email: {
// //     type: String,
// //     required: true,
// //     unique: true,
// //     trim: true,
// //     lowercase: true
// //   },
// //   skills: [{
// //     type: String,
// //     required: true
// //   }],
// //   industry: {
// //     type: String,
// //     required: true
// //   },
// //   score: {
// //     type: Number,
// //     default: 0
// //   },
// //   rank: {
// //     type: Number
// //   },
// //   image: {
// //     type: String,
// //     default: 'default-profile.png'
// //   },
// //   progressToNextRank: {
// //     type: Number,
// //     default: 0
// //   },
// //   lastAssessment: {
// //     type: Date,
// //     default: Date.now
// //   },
// //   createdAt: {
// //     type: Date,
// //     default: Date.now
// //   },
// //   updatedAt: {
// //     type: Date,
// //     default: Date.now
// //   }
// // });

// // UserSchema.pre('save', function(next) {
// //   this.updatedAt = Date.now();
// //   next();
// // });

// // module.exports = mongoose.model('User', UserSchema);

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   industry: {
//     type: String,
//     required: true
//   },
//   skills: [{
//     type: String
//   }],
//   score: {
//     type: Number,
//     default: 0
//   },
//   rank: {
//     type: Number
//   },
//   progressToNextRank: {
//     type: Number,
//     default: 0
//   },
//   lastAssessment: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Assessment'
//   },
//   lastUpdated: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  industry: {
    type: String,
    required: true
  },
  skills: [{
    type: String
  }],
  phone_number: {
    type: String
  },
  score: {
    type: Number,
    default: 0
  },
  rank: {
    type: Number
  },
  progressToNextRank: {
    type: Number,
    default: 0
  },
  lastAssessment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assessment'
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Remove any existing indexes
userSchema.indexes().forEach(async ([name, index]) => {
  try {
    await mongoose.model('User').collection.dropIndex(name);
  } catch (error) {
    console.log('Index drop error:', error);
  }
});

module.exports = mongoose.model('User', userSchema);