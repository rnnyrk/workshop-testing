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

describe('[HAPPY] - hexToRgba()', () => {
  const EXPECTED_HAPPY = 'rgba(130, 188, 0, 0.6)';

  test('Should return rgba value when `hex` and `alpha` are valid', () => {
    expect(hexToRgba(HEX_CODE_VALID, ALPHA_VALID)).toBe(EXPECTED_HAPPY);
  });
});

describe('[SAD] - hexToRgba()', () => {
  const EXPECTED_SAD = null;

  test('Should return null when the hex code is too long', () => {
    expect(hexToRgba(HEX_CODE_TOO_LONG, ALPHA_VALID)).toBe(EXPECTED_SAD);
  });

  test('Should return null when the hex code is too short', () => {
    expect(hexToRgba(HEX_CODE_TOO_SHORT, ALPHA_VALID)).toBe(EXPECTED_SAD);
  });

  // FAILED: Should we return null when a hex code without '#' is used?
  test('Should return null when the hex code has no hashtag', () => {
    expect(hexToRgba(HEX_CODE_WITHOUT_HASHTAG, ALPHA_VALID)).toBe(EXPECTED_SAD);
  });

  test('Should return null when the hex code contains special characters', () => {
    expect(hexToRgba(HEX_CODE_WITH_SPECIAL_CHARACTER, ALPHA_VALID)).toBe(EXPECTED_SAD);
  });

  // FAILED: Should we return null when the alpha value is invalid?
  test('Should return null when the `alpha` value is invalid', () => {
    expect(hexToRgba(HEX_CODE_VALID, ALPHA_INVALID)).toBe(EXPECTED_SAD);
  });

  // FAILED: Should we return null when the alpha value is out of range [0, 1]?
  test('Should return null when the `alpha` value is too high', () => {
    expect(hexToRgba(HEX_CODE_VALID, ALPHA_TOO_HIGH)).toBe(EXPECTED_SAD);
  });

  // FAILED: Should we return null when the alpha value is out of range [0, 1]?
  test('Should return null when the `alpha` value is too low', () => {
    expect(hexToRgba(HEX_CODE_VALID, ALPHA_TOO_LOW)).toBe(EXPECTED_SAD);
  });
});
