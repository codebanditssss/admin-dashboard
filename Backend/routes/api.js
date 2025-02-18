// const express = require('express');
// const router = express.Router();
// const UserController = require('../controllers/UserController');
// const auth = require('../middleware/auth');

// router.post('/users', UserController.createUser);
// router.get('/leaderboard', UserController.getLeaderboard);
// router.get('/users/:id', auth, UserController.getUserProfile);
// router.put('/users/:id/skills', auth, UserController.updateUserSkills);

// module.exports = router;

const express = require('express');
const router = express.Router();
const AIService = require('../services/AIService');
const LeaderboardService = require('../services/LeaderboardService');

// AI Assessment Routes
router.post('/analyze', async (req, res) => {
  try {
    const { userData } = req.body;
    const analysis = await AIService.analyzeUserSkills(userData);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Leaderboard Routes
router.get('/leaderboard', async (req, res) => {
  try {
    const { page = 1, limit = 10, industry, skills } = req.query;
    const leaderboard = await LeaderboardService.getLeaderboard(
      parseInt(page),
      parseInt(limit),
      { industry, skills }
    );
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/rankings/update', async (req, res) => {
  try {
    await LeaderboardService.updateRankings();
    res.json({ message: 'Rankings updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;