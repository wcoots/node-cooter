import { isNaughty } from './main';
import type { Response } from './types';

describe('isNaughty', () => {
  it('confirms naughtiness', () => {
    const response = isNaughty('baloo');
    expect(response).toEqual<Response>({ naughty: true });
  });

  it('denies naughtiness', () => {
    const response = isNaughty('pablo');
    expect(response).toEqual<Response>({ naughty: false });
  });
});
