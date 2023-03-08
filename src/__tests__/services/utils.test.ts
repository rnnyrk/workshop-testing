import { hexToRgba } from 'styles/utils';

// hex
const HEX_CODE_VALID = '#82BC00';
const HEX_CODE_TOO_LONG = '#82BC00AAA';
const HEX_CODE_TOO_SHORT = '#82BC0';
const HEX_CODE_WITHOUT_HASHTAG = '82BC00';
const HEX_CODE_WITH_SPECIAL_CHARACTER = '#82B+C0';

// alpha
const ALPHA_VALID = '0.6';
const ALPHA_INVALID = 'invalid';
const ALPHA_TOO_HIGH = '1.2';
const ALPHA_TOO_LOW = '-0.1';

test('hexToRgba() - should return rgba value when the hex code is valid', () => {
  const expected = 'rgba(130, 188, 0, 0.6)';

  expect(hexToRgba(HEX_CODE_VALID, ALPHA_VALID)).toBe(expected);
});

test('hexToRgba() - should return null when the hex code is too long', () => {
  const expected = null;

  expect(hexToRgba(HEX_CODE_TOO_LONG, ALPHA_VALID)).toBe(expected);
});

test('hexToRgba() - should return null when the hex code is too short', () => {
  const expected = null;

  expect(hexToRgba(HEX_CODE_TOO_SHORT, ALPHA_VALID)).toBe(expected);
});

// FAILED: Should we return null when a hex code without '#' is used?
test('hexToRgba() - should return null when the hex code has no hashtag', () => {
  const expected = null;

  expect(hexToRgba(HEX_CODE_WITHOUT_HASHTAG, ALPHA_VALID)).toBe(expected);
});

test('hexToRgba() - should return null when the hex code contains special characters', () => {
  const expected = null;

  expect(hexToRgba(HEX_CODE_WITH_SPECIAL_CHARACTER, ALPHA_VALID)).toBe(expected);
});

test('hexToRgba() - should return null when the `alpha` value is valid', () => {
  const expected = 'rgba(130, 188, 0, 0.6)';

  expect(hexToRgba(HEX_CODE_VALID, ALPHA_VALID)).toBe(expected);
});

// FAILED: Should we return null when the alpha value is invalid?
test('hexToRgba() - should return null when the `alpha` value is invalid', () => {
  const expected = null;

  expect(hexToRgba(HEX_CODE_VALID, ALPHA_INVALID)).toBe(expected);
});

// FAILED: Should we return null when the alpha value is out of range [0, 1]?
test('hexToRgba() - should return null when the `alpha` value is too high', () => {
  const expected = null;

  expect(hexToRgba(HEX_CODE_VALID, ALPHA_TOO_HIGH)).toBe(expected);
});

// FAILED: Should we return null when the alpha value is out of range [0, 1]?
test('hexToRgba() - should return null when the `alpha` value is too low', () => {
  const expected = null;

  expect(hexToRgba(HEX_CODE_VALID, ALPHA_TOO_LOW)).toBe(expected);
});
