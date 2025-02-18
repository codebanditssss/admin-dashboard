// // // const mongoose = require('mongoose');

// // // const AssessmentSchema = new mongoose.Schema({
// // //   userId: {
// // //     type: mongoose.Schema.Types.ObjectId,
// // //     ref: 'User',
// // //     required: true
// // //   },
// // //   skillsAnalysis: {
// // //     type: Map,
// // //     of: Number
// // //   },
// // //   industryScore: Number,
// // //   totalScore: Number,
// // //   aiRecommendations: String,
// // //   createdAt: {
// // //     type: Date,
// // //     default: Date.now
// // //   }
// // // });

// // // module.exports = mongoose.model('Assessment', AssessmentSchema);

// // const mongoose = require('mongoose');

// // const assessmentSchema = new mongoose.Schema({
// //   userId: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: 'User',
// //     required: true
// //   },
// //   skillsAnalysis: {
// //     type: Map,
// //     of: Number
// //   },
// //   industryScore: {
// //     type: Number,
// //     required: true
// //   },
// //   totalScore: {
// //     type: Number,
// //     required: true
// //   },
// //   aiRecommendations: {
// //     type: String
// //   },
// //   createdAt: {
// //     type: Date,
// //     default: Date.now
// //   }
// // });

// // module.exports = mongoose.model('Assessment', assessmentSchema);
// // models/Assessment.js
// const mongoose = require('mongoose');

// const assessmentSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   skillsAnalysis: {
//     type: Object,
//     of: Number,
//     required: true
//   },
//   industryScore: {
//     type: Number,
//     required: true
//   },
//   totalScore: {
//     type: Number,
//     required: true
//   },
//   aiRecommendations: {
//     type: String
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Assessment', assessmentSchema);

const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skillsAnalysis: {
    type: Map,
    of: {
      marketDemand: Number,
      growthPotential: Number,
      industryRelevance: Number,
      reasoning: String,
      keyTrends: [String]
    }
  },
  totalScore: {
    type: Number,
    required: true
  },
  recommendations: {
    type: String
  },
  growthAreas: [{
    type: String
  }],
  marketPosition: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Assessment', assessmentSchema);