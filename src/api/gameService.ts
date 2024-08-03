import api from './index';

export const startSession = async () => {
  const response = await api.post('/session/new-session');
  return response.data;
};

export const spinSlots = async (token: string) => {
  const url = `/session/${token}/new-spin`;
  console.log(url);
  
  const response = await api.post(url);
  return response.data;
};

export const cashOut = async (sessionId: string) => {
  const response = await api.post('/cash-out', { sessionId });
  return response.data;
};