import axios from 'axios';
import { exec } from 'child_process';
import { promisify } from 'util';

import '../index.js';

const execPromise = promisify(exec);
const PORT = Number(process.env.PORT || 2121);

describe(
  'Testing APIs and ALS',
  () => {
    it(
      'It should launch the server',
      async () => {
        const { stdout = '' } = await execPromise(`lsof -t -i:${PORT}`);
        expect(stdout).toBeTruthy();
      },
    );

    it(
      'It should return a response for the index route',
      async () => {
        const { data } = await axios({
          method: 'GET',
          url: `http://localhost:${PORT}`,
        });

        expect(data).toBeTruthy();
        expect(data.id).toBeTruthy();
        expect(data.info).toBe('OK');
      },
    );

    it(
      'It should return a response for the delayed route',
      async () => {
        const { data } = await axios({
          method: 'GET',
          url: `http://localhost:${PORT}/delayed`,
        });

        expect(data).toBeTruthy();
        expect(data.id).toBeTruthy();
        expect(data.info).toBe('OK');
      },
      6000,
    );

    it(
      'It should return different IDs for the delayed & index routes (ALS test)',
      async () => {
        const [delayedResponse, indexResponse] = await Promise.all([
          axios({
            method: 'GET',
            url: `http://localhost:${PORT}/delayed`,
          }),
          axios({
            method: 'GET',
            url: `http://localhost:${PORT}`,
          }),
        ]);

        const { data: { id: delayedId = '' } = {} } = delayedResponse;
        const { data: { id: indexId = '' } = {} } = indexResponse;

        expect(delayedId).toBeTruthy();
        expect(indexId).toBeTruthy();

        const comparison = delayedId !== indexId;
        expect(comparison).toBeTruthy();
      },
      6000,
    );
  },
);
