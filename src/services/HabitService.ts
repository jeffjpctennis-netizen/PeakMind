import { apiFetch } from './BaseService';

export interface Habit {
  id: number;
  user_id: number;
  name: string;
  description?: string;
  frequency: string;
}

export interface HabitLog {
  id: number;
  habit_id: number;
  completed_at: string;
}

export const HabitService = {
  getHabits: async (userId: number): Promise<Habit[]> => {
    return apiFetch<Habit[]>(`/habits/${userId}`);
  },

  createHabit: async (habit: Omit<Habit, 'id'>): Promise<{ id: number }> => {
    return apiFetch<{ id: number }>('/habits', {
      method: 'POST',
      body: JSON.stringify(habit),
    });
  },

  logHabit: async (habitId: number): Promise<{ message: string }> => {
    return apiFetch<{ message: string }>('/habit-logs', {
      method: 'POST',
      body: JSON.stringify({ habitId }),
    });
  }
};
