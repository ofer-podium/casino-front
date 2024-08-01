import api from './index';

export const startSession = async () => {
  const response = await api.post('/start-session');
  return response.data;
};

export const spinSlots = async (sessionId: string) => {
  const response = await api.post('/spin', { sessionId });
  return response.data;
};

export const cashOut = async (sessionId: string) => {
  const response = await api.post('/cash-out', { sessionId });
  return response.data;
};