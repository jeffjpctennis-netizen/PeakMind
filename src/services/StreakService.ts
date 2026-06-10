import { apiFetch } from './BaseService';

export interface Streak {
  userId: number;
  currentStreak: number;
  longestStreak: number;
}

export interface LeaderboardEntry {
  userId: number;
  username: string;
  currentStreak: number;
}

export const StreakService = {
  getStreak: async (userId: number): Promise<Streak> => {
    return apiFetch<Streak>(`/streaks/${userId}`);
  },

  getLeaderboard: async (): Promise<LeaderboardEntry[]> => {
    return apiFetch<LeaderboardEntry[]>('/leaderboard');
  }
};
