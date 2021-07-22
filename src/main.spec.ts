import { isNaughty } from './main';
import type { IsNaughty } from './types';

describe('isNaughty', () => {
  it('confirms naughtiness', () => {
    const response = isNaughty('baloo');
    expect(response).toEqual<IsNaughty.Response>({ naughty: true, naughtiness: 5 });
  });

  it('denies naughtiness', () => {
    const response = isNaughty('pablo');
    expect(response).toEqual<IsNaughty.Response>({ naughty: false, naughtiness: 0 });
  });
});
