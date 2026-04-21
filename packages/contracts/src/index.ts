import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const contract = c.router({
  getCheck: {
    method: 'GET',
    path: '/check',
    responses: {
      200: z.object({
        status: z.string(),
      }),
    },
    summary: 'Health check endpoint',
  },
});
