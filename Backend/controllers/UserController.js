const User = require('../models/User');
const AIService = require('../services/AIService');
const LeaderboardService = require('../services/LeaderboardService');

class UserController {
  async createUser(req, res) {
    try {
      const userData = req.body;
      const user = new User(userData);
      await user.save();

      const score = await AIService.analyzeUserSkills(user);
      user.score = score;
      await user.save();

      await LeaderboardService.updateRankings();
      
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getLeaderboard(req, res) {
    try {
      const { page, limit, industry, skills } = req.query;
      const leaderboard = await LeaderboardService.getLeaderboard(
        parseInt(page), 
        parseInt(limit),
        { industry, skills }
      );
      res.json(leaderboard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserProfile(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUserSkills(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      user.skills = req.body.skills;
      const score = await AIService.analyzeUserSkills(user);
      user.score = score;
      await user.save();

      await LeaderboardService.updateRankings();
      
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();