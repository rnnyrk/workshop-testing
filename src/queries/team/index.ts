import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import api from 'services/api';

export const fetchTeam = async (): Promise<i.Team> => {
  const response = await api.get({
    path: '/api/team',
  });

  return response;
};

export const useGetTeam = () => {
  return useQuery<i.Team>(['team'], () => fetchTeam());
};
