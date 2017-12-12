import Sum from './sum';

describe('DebugPanel reducer', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3);
  });
});
