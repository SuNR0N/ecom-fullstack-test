import fs from 'fs';
import path from 'path';

import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export default (router) => {
  router.get('/api/products', async (ctx) => {
    try {
      const fileContent = await readFileAsync(path.resolve(__dirname, './products.json'), 'utf8');
      const jsonResponse = JSON.parse(fileContent);
      ctx.body = jsonResponse;
    } catch (e) {
      ctx.status = 500;
      ctx.body = 'Something went wrong';
    };
  });
} 