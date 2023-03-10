import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

export const fetchTeam = async (): Promise<i.Team> => {
  const response = await (await fetch('/api/team', { method: 'GET' })).json();
  console.log({ response });
  return response;
};

export const useGetTeam = () => {
  return useQuery<i.Team>(['team'], () => fetchTeam());
};
