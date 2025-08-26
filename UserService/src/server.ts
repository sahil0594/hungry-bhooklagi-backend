// src/server.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes'; // Assuming you have this file

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; // Use a unique port, e.g., 3001 for userservice

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Primary route handler for this service
app.use('/api/users', userRoutes);

// A simple root route for health check
app.get('/', (req, res) => {
  res.send('User Service is running! 🚀');
});

app.listen(PORT, () => {
  console.log(`User Service is listening on port ${PORT}`);
});