import type { HttpHandler } from 'msw';

import { booksHandlers } from './books';

const handlers: HttpHandler[] = [...booksHandlers];

export default handlers;
