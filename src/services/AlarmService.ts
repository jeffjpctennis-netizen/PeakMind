import { apiFetch } from './BaseService';

export interface Alarm {
  id?: number;
  user_id: number;
  time: string;
  days: string;
  sound_url?: string;
  is_active: boolean;
}

export const AlarmService = {
  getAlarms: async (userId: number): Promise<Alarm[]> => {
    return apiFetch<Alarm[]>(`/alarms/${userId}`);
  },

  saveAlarm: async (alarm: Alarm): Promise<{ id: number }> => {
    return apiFetch<{ id: number }>('/alarms', {
      method: 'POST',
      body: JSON.stringify(alarm),
    });
  }
};
