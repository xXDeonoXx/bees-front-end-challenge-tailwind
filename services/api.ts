import axios from 'axios';

export function getApi(ctx?: any) {
  const api = axios.create({
    baseURL: 'https://api.openbrewerydb.org',
  });

  return api;
}
