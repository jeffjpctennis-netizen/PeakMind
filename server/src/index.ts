import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as db from './db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = Number(process.env.PORT) || 3001;

// --- User Routes ---
app.post('/api/users', async (req: Request, res: Response) => {
  const { username, email } = req.body;
  try {
    await db.execute(`INSERT INTO users (username, email) VALUES ('${username}', '${email}')`);
    const users = await db.query<any>(`SELECT * FROM users WHERE username = '${username}'`);
    res.status(201).json(users[0]);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/users/:username', async (req: Request, res: Response) => {
  try {
    const users = await db.query<any>(`SELECT * FROM users WHERE username = '${req.params.username}'`);
    if (users.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(users[0]);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// --- Habit Routes ---
app.get('/api/habits/:userId', async (req: Request, res: Response) => {
  try {
    const habits = await db.query<any>(`SELECT * FROM habits WHERE user_id = ${req.params.userId}`);
    res.json(habits);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/habits', async (req: Request, res: Response) => {
  const { user_id, title, description, frequency } = req.body;
  try {
    await db.execute(`INSERT INTO habits (user_id, title, description, frequency) VALUES (${user_id}, '${title}', '${description}', '${frequency || 'daily'}')`);
    res.status(201).json({ message: 'Habit created' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/habit-logs', async (req: Request, res: Response) => {
  const { habit_id } = req.body;
  try {
    await db.execute(`INSERT INTO habit_logs (habit_id) VALUES (${habit_id})`);
    
    // Update streak logic
    const habit = await db.query<any>(`SELECT user_id FROM habits WHERE id = ${habit_id}`);
    if (habit.length > 0) {
      const userId = habit[0].user_id;
      const streaks = await db.query<any>(`SELECT * FROM streaks WHERE user_id = ${userId}`);
      
      if (streaks.length === 0) {
        await db.execute(`INSERT INTO streaks (user_id, current_streak, longest_streak, last_completed_at) VALUES (${userId}, 1, 1, CURRENT_TIMESTAMP)`);
      } else {
        const streak = streaks[0];
        const lastCompleted = new Date(streak.last_completed_at);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - lastCompleted.getTime()) / (1000 * 3600 * 24));
        
        let newCurrent = streak.current_streak;
        if (diffDays === 1) {
          newCurrent += 1;
        } else if (diffDays > 1) {
          newCurrent = 1;
        }
        
        const newLongest = Math.max(newCurrent, streak.longest_streak);
        await db.execute(`UPDATE streaks SET current_streak = ${newCurrent}, longest_streak = ${newLongest}, last_completed_at = CURRENT_TIMESTAMP WHERE user_id = ${userId}`);
      }
    }
    
    res.status(201).json({ message: 'Habit logged' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// --- Streak & Leaderboard Routes ---
app.get('/api/streaks/:userId', async (req: Request, res: Response) => {
  try {
    const streaks = await db.query<any>(`SELECT * FROM streaks WHERE user_id = ${req.params.userId}`);
    res.json(streaks[0] || { current_streak: 0, longest_streak: 0 });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/leaderboard', async (req: Request, res: Response) => {
  try {
    const leaderboard = await db.query<any>(`
      SELECT users.username, streaks.current_streak, streaks.longest_streak 
      FROM streaks 
      JOIN users ON streaks.user_id = users.id 
      ORDER BY streaks.current_streak DESC 
      LIMIT 10
    `);
    res.json(leaderboard);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// --- Alarm Routes ---
app.get('/api/alarms/:userId', async (req: Request, res: Response) => {
  try {
    const alarms = await db.query<any>(`SELECT * FROM alarms WHERE user_id = ${req.params.userId}`);
    res.json(alarms);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/alarms', async (req: Request, res: Response) => {
  const { user_id, time, days, sound_url, enabled } = req.body;
  try {
    const existing = await db.query<any>(`SELECT id FROM alarms WHERE user_id = ${user_id} AND time = '${time}'`);
    if (existing.length > 0) {
      await db.execute(`UPDATE alarms SET days = '${days}', sound_url = '${sound_url}', enabled = ${enabled ? 1 : 0} WHERE id = ${existing[0].id}`);
    } else {
      await db.execute(`INSERT INTO alarms (user_id, time, days, sound_url, enabled) VALUES (${user_id}, '${time}', '${days}', '${sound_url}', ${enabled ? 1 : 0})`);
    }
    res.json({ message: 'Alarm saved' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// --- Video Routes ---
app.get('/api/videos', async (req: Request, res: Response) => {
  const { category } = req.query;
  try {
    let sql = 'SELECT * FROM videos';
    if (category) sql += ` WHERE category = '${category}'`;
    const videos = await db.query<any>(sql);
    res.json(videos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/videos/random', async (req: Request, res: Response) => {
  try {
    const videos = await db.query<any>('SELECT * FROM videos ORDER BY RANDOM() LIMIT 1');
    res.json(videos[0]);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
