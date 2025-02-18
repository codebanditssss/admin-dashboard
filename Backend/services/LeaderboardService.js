// // const User = require('../models/User');

// // class LeaderboardService {
// //   async updateRankings() {
// //     try {
// //       const users = await User.find().sort({ score: -1 });
      
// //       const updates = users.map((user, index) => ({
// //         updateOne: {
// //           filter: { _id: user._id },
// //           update: { 
// //             $set: { 
// //               rank: index + 1,
// //               progressToNextRank: this.calculateProgressToNext(user.score, users[index - 1]?.score)
// //             }
// //           }
// //         }
// //       }));

// //       await User.bulkWrite(updates);
// //       return users;
// //     } catch (error) {
// //       console.error('Ranking Update Error:', error);
// //       throw new Error('Failed to update rankings');
// //     }
// //   }

// //   calculateProgressToNext(currentScore, nextScore) {
// //     if (!nextScore) return 100;
// //     const scoreDiff = nextScore - currentScore;
// //     const progress = Math.min(100, Math.max(0, (1 - scoreDiff / 100) * 100));
// //     return Math.round(progress);
// //   }

// //   async getLeaderboard(page = 1, limit = 10, filters = {}) {
// //     try {
// //       const query = this.buildQuery(filters);
// //       const total = await User.countDocuments(query);
      
// //       const users = await User.find(query)
// //         .sort({ score: -1 })
// //         .skip((page - 1) * limit)
// //         .limit(limit)
// //         .select('-email');

// //       return {
// //         users,
// //         total,
// //         pages: Math.ceil(total / limit),
// //         currentPage: page
// //       };
// //     } catch (error) {
// //       console.error('Leaderboard Fetch Error:', error);
// //       throw new Error('Failed to fetch leaderboard');
// //     }
// //   }

// //   buildQuery(filters) {
// //     const query = {};
// //     if (filters.industry) query.industry = filters.industry;
// //     if (filters.skills) {
// //       query.skills = { 
// //         $elemMatch: { 
// //           $regex: filters.skills, 
// //           $options: 'i' 
// //         } 
// //       };
// //     }
// //     return query;
// //   }
// // }

// // module.exports = new LeaderboardService();

// const User = require('../models/User');

// class LeaderboardService {
//   async updateRankings() {
//     try {
//       const users = await User.find()
//         .sort({ score: -1 })
//         .select('score'); // Only select necessary fields
      
//       const updates = users.map((user, index) => ({
//         updateOne: {
//           filter: { _id: user._id },
//           update: { 
//             $set: { 
//               rank: index + 1,
//               progressToNextRank: this.calculateProgressToNext(user.score, users[index - 1]?.score)
//             }
//           }
//         }
//       }));

//       if (updates.length > 0) {
//         await User.bulkWrite(updates);
//       }
      
//       return this.getLeaderboard(); // Return updated leaderboard
//     } catch (error) {
//       console.error('Ranking Update Error:', error);
//       throw new Error(`Failed to update rankings: ${error.message}`);
//     }
//   }

//   calculateProgressToNext(currentScore, nextScore) {
//     if (!nextScore) return 100;
//     if (currentScore === nextScore) return 100;
//     const scoreDiff = nextScore - currentScore;
//     const progress = Math.min(100, Math.max(0, (1 - scoreDiff / 100) * 100));
//     return Math.round(progress);
//   }

//   async getLeaderboard(page = 1, limit = 10, filters = {}) {
//     try {
//       const query = this.buildQuery(filters);
//       const [total, users] = await Promise.all([
//         User.countDocuments(query),
//         User.find(query)
//           .sort({ score: -1, lastUpdated: -1 })
//           .skip((page - 1) * limit)
//           .limit(limit)
//           .select('name score rank progressToNextRank industry skills')
//       ]);

//       return {
//         users,
//         total,
//         pages: Math.ceil(total / limit),
//         currentPage: page,
//         hasMore: page * limit < total
//       };
//     } catch (error) {
//       console.error('Leaderboard Fetch Error:', error);
//       throw new Error(`Failed to fetch leaderboard: ${error.message}`);
//     }
//   }

//   buildQuery(filters) {
//     const query = {};
//     if (filters.industry) {
//       query.industry = { $regex: new RegExp(filters.industry, 'i') };
//     }
//     if (filters.skills) {
//       query.skills = { 
//         $elemMatch: { 
//           $regex: new RegExp(filters.skills, 'i')
//         } 
//       };
//     }
//     if (filters.minScore) {
//       query.score = { $gte: parseInt(filters.minScore) };
//     }
//     return query;
//   }
// }

// module.exports = new LeaderboardService();