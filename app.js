import cors from 'cors';
import express from 'express';

import delayed from './apis/delayed.js';
import index from './apis/index.js';
import storeRequestId from './middlewares/store-request-id.js';

const app = express();

app.use(cors());
app.use(storeRequestId);

app.get('/', index);
app.get('/delayed', delayed);

export default app;
