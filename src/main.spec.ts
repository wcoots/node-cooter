import { isNaughty } from './main';
import type { IsNaughty } from './types';

describe('isNaughty', () => {
    it('confirms naughtiness', () => {
        const input = 'baloo';
        const response = isNaughty(input);
        expect(response).toEqual<IsNaughty.Response>({ input, naughty: true, naughtiness: 5 });
    });

    it('denies naughtiness', () => {
        const input = 'pablo';
        const response = isNaughty(input);
        expect(response).toEqual<IsNaughty.Response>({ input, naughty: false, naughtiness: 0 });
    });
});
