import hellotsdx from '../src';

describe('hello tsdx', () => {
  it('works', () => {
    expect(hellotsdx('BR hello')).toBe(true);
  });
  it('handles null beginning', () => {
    expect(hellotsdx('nullBR hello')).toBe(true);
  });
  it('handles utf-8 beginning', () => {
    expect(hellotsdx('\u0007BR hello')).toBe(true);
  });
  it('handles empty value', () => {
    expect(hellotsdx('⁣EF')).toBe(true);
  });
  it('handles empty key with value', () => {
    expect(hellotsdx('⁣   value')).toBe(true);
  });
  it('Rejects bad looking keys', () => {
    expect(hellotsdx('ABCD value')).toBe(false);
  });
});
