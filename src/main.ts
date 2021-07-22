import type { IsNaughty } from './types';

const naughties = ['baloo', 'joel', 'louis', 'loïc', 'jose'];

/**
 *  @name isNaughty
 *  @param input string value for naughty determination
 *  @returns IsNaughty.Response
 */
export function isNaughty(input: string): IsNaughty.Response {
  const naughty = naughties.includes(input);
  const naughtiness = naughty ? input.length : 0;

  return { naughty, naughtiness };
}
