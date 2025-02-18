// // const OpenAI = require('openai');
// // const User = require('../models/User');
// // const Assessment = require('../models/Assessment');

// // class AIService {
// //   constructor() {
// //     this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// //   }

// //   async analyzeUserSkills(userData) {
// //     try {
// //       const completion = await this.openai.chat.completions.create({
// //         model: "gpt-4",
// //         messages: [{
// //           role: "user",
// //           content: `Analyze professional profile and provide detailed assessment:
// //             Name: ${userData.name}
// //             Skills: ${userData.skills.join(', ')}
// //             Industry: ${userData.industry}
            
// //             Provide analysis in JSON format:
// //             {
// //               "skillScores": { "skill1": score, "skill2": score },
// //               "industryFit": 0-100,
// //               "marketDemand": 0-100,
// //               "growthPotential": 0-100,
// //               "recommendations": "string"
// //             }`
// //         }]
// //       });

// //       const analysis = JSON.parse(completion.choices[0].message.content);
// //       return this.processAnalysis(analysis, userData);
// //     } catch (error) {
// //       console.error('AI Analysis Error:', error);
// //       throw new Error('Failed to analyze skills');
// //     }
// //   }

// //   async processAnalysis(analysis, userData) {
// //     const totalScore = this.calculateTotalScore(analysis);
// //     const assessment = new Assessment({
// //       userId: userData._id,
// //       skillsAnalysis: analysis.skillScores,
// //       industryScore: analysis.industryFit,
// //       totalScore: totalScore,
// //       aiRecommendations: analysis.recommendations
// //     });

// //     await assessment.save();
// //     return totalScore;
// //   }

// //   calculateTotalScore(analysis) {
// //     const skillsAverage = Object.values(analysis.skillScores).reduce((a, b) => a + b, 0) / 
// //       Object.values(analysis.skillScores).length;
    
// //     return Math.round(
// //       (skillsAverage * 0.4 + 
// //        analysis.industryFit * 0.3 + 
// //        analysis.marketDemand * 0.2 + 
// //        analysis.growthPotential * 0.1) * 10
// //     );
// //   }
// // }

// // module.exports = new AIService();
// // const OpenAI = require('openai');
// // const User = require('../models/User');
// // const Assessment = require('../models/Assessment');

// // class AIService {
// //   constructor() {
// //     this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// //   }

// //   async analyzeUserSkills(userData) {
// //     try {
// //       const completion = await this.openai.chat.completions.create({
// //         model: "gpt-3.5-turbo", // Changed to more cost-effective model
// //         messages: [{
// //           role: "user",
// //           content: `Analyze professional profile and provide detailed assessment:
// //             Name: ${userData.name}
// //             Skills: ${userData.skills.join(', ')}
// //             Industry: ${userData.industry}
            
// //             Provide analysis in JSON format:
// //             {
// //               "skillScores": { "skill1": score, "skill2": score },
// //               "industryFit": 0-100,
// //               "marketDemand": 0-100,
// //               "growthPotential": 0-100,
// //               "recommendations": "string"
// //             }`
// //         }]
// //       });

// //       let analysis;
// //       try {
// //         analysis = JSON.parse(completion.choices[0].message.content);
// //         this.validateAnalysis(analysis);
// //       } catch (error) {
// //         throw new Error('Invalid AI response format');
// //       }

// //       return this.processAnalysis(analysis, userData);
// //     } catch (error) {
// //       console.error('AI Analysis Error:', error);
// //       throw new Error(`Failed to analyze skills: ${error.message}`);
// //     }
// //   }

// //   validateAnalysis(analysis) {
// //     // Validate the analysis format
// //     if (!analysis.skillScores || typeof analysis.skillScores !== 'object') {
// //       throw new Error('Invalid skill scores format');
// //     }
    
// //     const requiredFields = ['industryFit', 'marketDemand', 'growthPotential'];
// //     for (const field of requiredFields) {
// //       const value = analysis[field];
// //       if (typeof value !== 'number' || value < 0 || value > 100) {
// //         throw new Error(`Invalid ${field} value`);
// //       }
// //     }
// //   }

// //   async processAnalysis(analysis, userData) {
// //     try {
// //       const totalScore = this.calculateTotalScore(analysis);
// //       const assessment = new Assessment({
// //         userId: userData._id,
// //         skillsAnalysis: analysis.skillScores,
// //         industryScore: analysis.industryFit,
// //         totalScore: totalScore,
// //         aiRecommendations: analysis.recommendations,
// //         createdAt: new Date()
// //       });

// //       await assessment.save();
      
// //       // Update user's score
// //       await User.findByIdAndUpdate(userData._id, { 
// //         score: totalScore,
// //         lastAssessment: assessment._id
// //       });

// //       return {
// //         totalScore,
// //         assessment: assessment.toObject()
// //       };
// //     } catch (error) {
// //       throw new Error(`Failed to save assessment: ${error.message}`);
// //     }
// //   }

// //   calculateTotalScore(analysis) {
// //     const skillsAverage = Object.values(analysis.skillScores).reduce((a, b) => a + b, 0) / 
// //       Object.values(analysis.skillScores).length;
    
// //     return Math.round(
// //       (skillsAverage * 0.4 + 
// //        analysis.industryFit * 0.3 + 
// //        analysis.marketDemand * 0.2 + 
// //        analysis.growthPotential * 0.1) * 10
// //     );
// //   }
// // }

// // module.exports = new AIService();

// // const OpenAI = require('openai');
// // const User = require('../models/User');
// // const Assessment = require('../models/Assessment');

// // class AIService {
// //   constructor() {
// //     this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// //   }

// //   async analyzeUserSkills(userData) {
// //     try {
// //       if (!userData._id) {
// //         throw new Error('User ID is required for analysis');
// //       }

// //       const completion = await this.openai.chat.completions.create({
// //         model: "gpt-3.5-turbo",
// //         messages: [{
// //           role: "user",
// //           content: `Analyze professional profile and provide detailed assessment:
// //             Name: ${userData.name}
// //             Skills: ${userData.skills.join(', ')}
// //             Industry: ${userData.industry}
            
// //             Provide analysis in JSON format with skill scores for each provided skill:
// //             {
// //               "skillScores": {
// //                 "${userData.skills.join('": score, "')}'": score
// //               },
// //               "industryFit": 0-100,
// //               "marketDemand": 0-100,
// //               "growthPotential": 0-100,
// //               "recommendations": "string"
// //             }`
// //         }]
// //       });

// //       let analysis;
// //       try {
// //         analysis = JSON.parse(completion.choices[0].message.content);
// //         this.validateAnalysis(analysis, userData.skills);
// //       } catch (error) {
// //         console.error('Parse Error:', error);
// //         throw new Error('Invalid AI response format');
// //       }

// //       return this.processAnalysis(analysis, userData);
// //     } catch (error) {
// //       console.error('AI Analysis Error:', error);
// //       throw new Error(`Failed to analyze skills: ${error.message}`);
// //     }
// //   }

// //   validateAnalysis(analysis, userSkills) {
// //     if (!analysis.skillScores || typeof analysis.skillScores !== 'object') {
// //       throw new Error('Invalid skill scores format');
// //     }

// //     // Validate that all user skills are scored
// //     userSkills.forEach(skill => {
// //       if (typeof analysis.skillScores[skill] !== 'number' || 
// //           analysis.skillScores[skill] < 0 || 
// //           analysis.skillScores[skill] > 100) {
// //         throw new Error(`Invalid score for skill: ${skill}`);
// //       }
// //     });
    
// //     const requiredFields = ['industryFit', 'marketDemand', 'growthPotential'];
// //     for (const field of requiredFields) {
// //       const value = analysis[field];
// //       if (typeof value !== 'number' || value < 0 || value > 100) {
// //         throw new Error(`Invalid ${field} value`);
// //       }
// //     }

// //     if (typeof analysis.recommendations !== 'string' || !analysis.recommendations) {
// //       throw new Error('Invalid recommendations format');
// //     }
// //   }

// //   async processAnalysis(analysis, userData) {
// //     try {
// //       const totalScore = this.calculateTotalScore(analysis);
      
// //       // Convert skillScores to Map format
// //       const skillScoresMap = new Map(Object.entries(analysis.skillScores));

// //       const assessment = new Assessment({
// //         userId: userData._id,
// //         skillsAnalysis: skillScores,
// //         industryScore: analysis.industryFit,
// //         totalScore: totalScore,
// //         aiRecommendations: analysis.recommendations,
// //         createdAt: new Date()
// //       });

// //       await assessment.save();
      
// //       // Update user's score and last assessment
// //       await User.findByIdAndUpdate(userData._id, { 
// //         score: totalScore,
// //         lastAssessment: assessment._id,
// //         lastUpdated: new Date()
// //       });

// //       return {
// //         totalScore,
// //         assessment: {
// //           ...assessment.toObject(),
// //           skillsAnalysis: Object.fromEntries(skillScoresMap)
// //         }
// //       };
// //     } catch (error) {
// //       console.error('Process Analysis Error:', error);
// //       throw new Error(`Failed to save assessment: ${error.message}`);
// //     }
// //   }

// //   calculateTotalScore(analysis) {
// //     const skillScores = Object.values(analysis.skillScores);
// //     const skillsAverage = skillScores.reduce((a, b) => a + b, 0) / skillScores.length;
    
// //     return Math.round(
// //       (skillsAverage * 0.4 + 
// //        analysis.industryFit * 0.3 + 
// //        analysis.marketDemand * 0.2 + 
// //        analysis.growthPotential * 0.1) * 10
// //     );
// //   }
// // }

// // module.exports = new AIService();

// const OpenAI = require('openai');
// const User = require('../models/User');
// const Assessment = require('../models/Assessment');

// class AIService {
//   constructor() {
//     this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
//   }

//   async analyzeUserSkills(userData) {
//     try {
//       if (!userData._id) {
//         throw new Error('User ID is required for analysis');
//       }

//       const prompt = `Analyze the following professional profile and provide a skill assessment:
//         Name: ${userData.name}
//         Skills: ${userData.skills.join(', ')}
//         Industry: ${userData.industry}

//         Return your analysis in the following JSON structure exactly (replace values with numbers between 0-100):
//         {
//           "skillScores": {
//             ${userData.skills.map(skill => `"${skill}": 0`).join(',\n            ')}
//           },
//           "industryFit": 0,
//           "marketDemand": 0,
//           "growthPotential": 0,
//           "recommendations": ""
//         }`;

//       const completion = await this.openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content: "You are a professional skills analyzer. Always respond with valid JSON only."
//           },
//           {
//             role: "user",
//             content: prompt
//           }
//         ],
//         temperature: 0.7,
//         max_tokens: 1000
//       });

//       console.log('OpenAI Response:', completion.choices[0].message.content);

//       let analysis;
//       try {
//         analysis = JSON.parse(completion.choices[0].message.content.trim());
//         this.validateAnalysis(analysis, userData.skills);
//       } catch (error) {
//         console.error('Parse Error:', error);
//         console.error('Raw Response:', completion.choices[0].message.content);
//         throw new Error('Invalid AI response format');
//       }

//       return this.processAnalysis(analysis, userData);
//     } catch (error) {
//       console.error('AI Analysis Error:', error);
//       throw new Error(`Failed to analyze skills: ${error.message}`);
//     }
//   }

//   validateAnalysis(analysis, userSkills) {
//     if (!analysis.skillScores || typeof analysis.skillScores !== 'object') {
//       throw new Error('Invalid skill scores format');
//     }

//     userSkills.forEach(skill => {
//       if (!analysis.skillScores.hasOwnProperty(skill) || 
//           typeof analysis.skillScores[skill] !== 'number' || 
//           analysis.skillScores[skill] < 0 || 
//           analysis.skillScores[skill] > 100) {
//         throw new Error(`Invalid score for skill: ${skill}`);
//       }
//     });
    
//     const requiredFields = ['industryFit', 'marketDemand', 'growthPotential'];
//     for (const field of requiredFields) {
//       const value = analysis[field];
//       if (typeof value !== 'number' || value < 0 || value > 100) {
//         throw new Error(`Invalid ${field} value`);
//       }
//     }

//     if (typeof analysis.recommendations !== 'string') {
//       throw new Error('Invalid recommendations format');
//     }
//   }

//   async processAnalysis(analysis, userData) {
//     try {
//       const totalScore = this.calculateTotalScore(analysis);
      
//       const assessment = new Assessment({
//         userId: userData._id,
//         skillsAnalysis: analysis.skillScores,
//         industryScore: analysis.industryFit,
//         totalScore: totalScore,
//         aiRecommendations: analysis.recommendations,
//         createdAt: new Date()
//       });

//       await assessment.save();
      
//       await User.findByIdAndUpdate(userData._id, { 
//         score: totalScore,
//         lastAssessment: assessment._id,
//         lastUpdated: new Date()
//       });

//       return {
//         totalScore,
//         assessment: {
//           ...assessment.toObject(),
//           skillsAnalysis: analysis.skillScores
//         }
//       };
//     } catch (error) {
//       console.error('Process Analysis Error:', error);
//       throw new Error(`Failed to save assessment: ${error.message}`);
//     }
//   }

//   calculateTotalScore(analysis) {
//     const skillScores = Object.values(analysis.skillScores);
//     const skillsAverage = skillScores.reduce((a, b) => a + b, 0) / skillScores.length;
    
//     return Math.round(
//       (skillsAverage * 0.4 + 
//        analysis.industryFit * 0.3 + 
//        analysis.marketDemand * 0.2 + 
//        analysis.growthPotential * 0.1) * 10
//     );
//   }
// }

// module.exports = new AIService();

const OpenAI = require('openai');
const User = require('../models/User');
const Assessment = require('../models/Assessment');

class AIService {
  constructor() {
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async analyzeUserSkills(userData) {
    try {
      if (!userData._id) {
        throw new Error('User ID is required for analysis');
      }

      const completion = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "system",
          content: "You are an AI skill evaluator with expertise in 2024-2025 job market trends. Provide detailed analysis with specific trends and recommendations. Focus on providing accurate numerical scores based on real market demand."
        }, {
          role: "user",
          content: `Analyze these skills for ${userData.industry} industry in 2024-2025:
            Name: ${userData.name}
            Skills: ${userData.skills.join(', ')}
            
            Provide a detailed analysis in this exact JSON format:
            {
              "skillAnalysis": {
                "skill1": {
                  "marketDemand": number (0-100),
                  "growthPotential": number (0-100),
                  "industryRelevance": number (0-100),
                  "reasoning": "detailed explanation of the skill's value",
                  "keyTrends": [
                    "trend 1",
                    "trend 2",
                    "trend 3"
                  ]
                }
              },
              "overallAssessment": {
                "totalScore": number (0-100),
                "marketPosition": "position assessment",
                "recommendations": "specific recommendations",
                "growthAreas": [
                  "growth area 1",
                  "growth area 2",
                  "growth area 3"
                ]
              }
            }`
        }],
        temperature: 0.7
      });

      let analysis = JSON.parse(completion.choices[0].message.content);
      return this.processAnalysis(analysis, userData);
    } catch (error) {
      console.error('AI Analysis Error:', error);
      throw new Error(`Failed to analyze skills: ${error.message}`);
    }
  }

  async processAnalysis(analysis, userData) {
    try {
      // Scale up scores to 1000-point system
      const scaledAnalysis = this.scaleScores(analysis);

      const assessment = new Assessment({
        userId: userData._id,
        skillsAnalysis: scaledAnalysis.skillAnalysis,
        totalScore: scaledAnalysis.overallAssessment.totalScore,
        recommendations: scaledAnalysis.overallAssessment.recommendations,
        growthAreas: scaledAnalysis.overallAssessment.growthAreas,
        marketPosition: scaledAnalysis.overallAssessment.marketPosition,
        createdAt: new Date()
      });

      await assessment.save();
      
      await User.findByIdAndUpdate(userData._id, { 
        score: scaledAnalysis.overallAssessment.totalScore,
        lastAssessment: assessment._id,
        lastUpdated: new Date()
      });

      return scaledAnalysis;
    } catch (error) {
      throw new Error(`Failed to save assessment: ${error.message}`);
    }
  }

  scaleScores(analysis) {
    // Deep copy the analysis to avoid modifying the original
    const scaledAnalysis = JSON.parse(JSON.stringify(analysis));

    // Scale individual skill scores
    Object.keys(scaledAnalysis.skillAnalysis).forEach(skill => {
      const skillData = scaledAnalysis.skillAnalysis[skill];
      skillData.marketDemand *= 10;
      skillData.growthPotential *= 10;
      skillData.industryRelevance *= 10;
    });

    // Calculate weighted average for total score
    const skills = Object.values(scaledAnalysis.skillAnalysis);
    const avgMarketDemand = skills.reduce((sum, skill) => sum + skill.marketDemand, 0) / skills.length;
    const avgGrowthPotential = skills.reduce((sum, skill) => sum + skill.growthPotential, 0) / skills.length;
    const avgIndustryRelevance = skills.reduce((sum, skill) => sum + skill.industryRelevance, 0) / skills.length;

    // Scale total score to 1000
    scaledAnalysis.overallAssessment.totalScore = Math.round(
      (avgMarketDemand * 0.4 + 
       avgGrowthPotential * 0.3 + 
       avgIndustryRelevance * 0.3)
    );

    return scaledAnalysis;
  }

  validateScores(analysis) {
    const scores = Object.values(analysis.skillAnalysis).flatMap(skill => [
      skill.marketDemand,
      skill.growthPotential,
      skill.industryRelevance
    ]);

    const isValid = scores.every(score => 
      typeof score === 'number' && 
      score >= 0 && 
      score <= 1000
    );

    if (!isValid) {
      throw new Error('Invalid score values detected');
    }
  }
}

module.exports = new AIService();