import { afterEach, beforeAll, afterAll } from 'vitest';
import { server } from './mocks/node';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});