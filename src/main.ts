import type { Response } from './types';

export function isNaughty(input: string): Response {
  return {
    naughty: input === 'baloo',
  };
}
