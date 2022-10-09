import { isGraphRedBlueColorable } from '../graph';

describe('graph.ts', () => {
  describe('isGraphRedBlueColorable(a)', () => {
    describe('Should be red-blue colorable', () => {
      it("[['a', 'b', 'c']]", () => {
        expect(isGraphRedBlueColorable([['a', 'b', 'c']])).toBe(true);
      });
    });

    describe("Shouldn't be red-blue colorable", () => {
      it("[['a', 'b'], ['f', 'g']]", () => {
        expect(
          isGraphRedBlueColorable([
            ['a', 'b'],
            ['f', 'g'],
          ])
        ).toBe(false);
      });
      it("[['a', 'b', 'c', 'a']]", () => {
        expect(isGraphRedBlueColorable([['a', 'b', 'c', 'a']])).toBe(false);
      });
      it("[['a', 'b'], ['c', 'd'], ['b', 'c'], ['a', 'd']]", () => {
        expect(
          isGraphRedBlueColorable([
            ['a', 'b'],
            ['c', 'd'],
            ['b', 'c'],
            ['a', 'd'],
          ])
        ).toBe(true);
      });
    });
  });
});
