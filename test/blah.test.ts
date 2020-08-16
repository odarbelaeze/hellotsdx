import hellotsdx from '../src';

describe('blah', () => {
  it('works', () => {
    expect(hellotsdx("BR hello")).toBe(true)
  });
  it('handles null beginning', () => {
    expect(hellotsdx("nullBR hello")).toBe(true)
  });
});
