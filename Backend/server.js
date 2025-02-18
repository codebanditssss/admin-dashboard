// // // require('dotenv').config();
// // // const express = require('express');
// // // const cors = require('cors');
// // // const http = require('http');
// // // const socketIO = require('socket.io');
// // // const connectDB = require('./config/db');
// // // const apiRoutes = require('./routes/api');
// // // const LeaderboardService = require('./services/LeaderboardService');

// // // const app = express();
// // // const server = http.createServer(app);
// // // const io = socketIO(server, {
// // //   cors: {
// // //     origin: process.env.FRONTEND_URL,
// // //     methods: ['GET', 'POST'],
// // //     credentials: true
// // //   }
// // // });

// // // connectDB();

// // // app.use(cors({
// // //   origin: process.env.FRONTEND_URL,
// // //   credentials: true
// // // }));
// // // app.use(express.json());
// // // app.use('/api', apiRoutes);

// // // io.on('connection', (socket) => {
// // //   console.log('Client connected');

// // //   socket.on('subscribeToLeaderboard', async () => {
// // //     const leaderboard = await LeaderboardService.getLeaderboard();
// // //     socket.emit('leaderboardUpdate', leaderboard);
// // //   });

// // //   socket.on('disconnect', () => {
// // //     console.log('Client disconnected');
// // //   });
// // // });

// // // const PORT = process.env.PORT || 5000;
// // // server.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });

// // require('dotenv').config();
// // const express = require('express');
// // const cors = require('cors');
// // const http = require('http');
// // const socketIO = require('socket.io');
// // const connectDB = require('./config/db');
// // const apiRoutes = require('./routes/api');
// // // const LeaderboardService = require('./services/LeaderboardService');

// // // Debug log to check environment variables
// // console.log('Environment Check:', {
// //   MONGODB_URI: process.env.MONGODB_URI ? 'Exists' : 'Undefined',
// //   PORT: process.env.PORT,
// //   FRONTEND_URL: process.env.FRONTEND_URL
// // });

// // const app = express();
// // const server = http.createServer(app);
// // const io = socketIO(server, {
// //   cors: {
// //     origin: process.env.FRONTEND_URL || 'http://localhost:3000',
// //     methods: ['GET', 'POST'],
// //     credentials: true
// //   }
// // });

// // // Connect to MongoDB
// // connectDB();

// // // Middleware
// // app.use(cors({
// //   origin: process.env.FRONTEND_URL || 'http://localhost:3000',
// //   credentials: true
// // }));
// // app.use(express.json());
// // app.use('/api', apiRoutes);

// // // Socket.IO connection handling
// // io.on('connection', (socket) => {
// //   console.log('Client connected');

// //   socket.on('subscribeToLeaderboard', async () => {
// //     const leaderboard = await LeaderboardService.getLeaderboard();
// //     socket.emit('leaderboardUpdate', leaderboard);
// //   });

// //   socket.on('disconnect', () => {
// //     console.log('Client disconnected');
// //   });
// // });

// // // Start server
// // const PORT = process.env.PORT || 5000;
// // server.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// // // Error handling for uncaught exceptions
// // process.on('unhandledRejection', (err) => {
// //   console.error('Unhandled Rejection:', err);
// //   server.close(() => process.exit(1));
// // });

// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// const express = require('express');
// const cors = require('cors');
// const http = require('http');
// const socketIO = require('socket.io');
// const connectDB = require('./config/db');
// const apiRoutes = require('./routes/api');
// const LeaderboardService = require('./services/LeaderboardService');
// const userRoutes = require('./routes/userRoutes');

// // Debug log to check environment variables
// console.log('Environment Check:', {
//   MONGODB_URI: process.env.MONGODB_URI ? 'Exists' : 'Undefined',
//   PORT: process.env.PORT,
//   FRONTEND_URL: process.env.FRONTEND_URL
// });

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server, {
//   cors: {
//     origin: process.env.FRONTEND_URL || 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//     credentials: true
//   }
// });

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use('/api', apiRoutes);
// app.use('/api', userRoutes);

// // Socket.IO connection handling
// io.on('connection', (socket) => {
//   console.log('Client connected');

//   socket.on('subscribeToLeaderboard', async () => {
//     const leaderboard = await LeaderboardService.getLeaderboard();
//     socket.emit('leaderboardUpdate', leaderboard);
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // Error handling for uncaught exceptions
// process.on('unhandledRejection', (err) => {
//   console.error('Unhandled Rejection:', err);
//   server.close(() => process.exit(1));
// });

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const morgan = require('morgan');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');
const LeaderboardService = require('./services/LeaderboardService');
const userRoutes = require('./routes/userRoutes');

// Debug log to check environment variables
console.log('Environment Check:', {
  MONGODB_URI: process.env.MONGODB_URI ? 'Exists' : 'Undefined',
  PORT: process.env.PORT,
  FRONTEND_URL: process.env.FRONTEND_URL
});

const app = express();
const server = http.createServer(app);

// Socket.IO Setup
const io = socketIO(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Connect to MongoDB
connectDB();

// Basic Middleware
app.use(morgan('dev')); // Request logging
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);
app.use('/api', userRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('subscribeToLeaderboard', async () => {
    try {
      const leaderboard = await LeaderboardService.getLeaderboard();
      socket.emit('leaderboardUpdate', leaderboard);
    } catch (error) {
      socket.emit('error', { message: 'Failed to fetch leaderboard' });
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling for uncaught exceptions
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  server.close(() => process.exit(1));
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  server.close(() => process.exit(1));
});

module.exports = server;