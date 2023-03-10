import { rest } from 'msw';
// import { rest } from 'msw';
// import { rest } from 'msw';

import teamResponse from './data/team.json';

export const handlers = [
  rest.get('/api/team', (req, res, ctx) => {
    console.log('hit team');
    return res(ctx.status(200), ctx.json(teamResponse));
  }),
  rest.get('*/api/team', (req, res, ctx) => {
    console.log('hit team');
    return res(ctx.status(200), ctx.json(teamResponse));
  }),
  rest.get('http://localhost:3000/api/team', (req, res, ctx) => {
    console.log('hit team 2');
    return res(ctx.status(200), ctx.json(teamResponse));
  }),
  rest.get('https://cms.labela.nl/api/v1/team', (req, res, ctx) => {
    console.log('hit team 3');
    return res(ctx.status(200), ctx.json(teamResponse));
  }),
  rest.all('*', (req, res, ctx) => {
    console.log('hit all');
    return res(ctx.status(200), ctx.json(teamResponse));
  }),
];
