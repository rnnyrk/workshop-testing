import dayjs from 'dayjs';

import 'dayjs/locale/nl';
import { defaultDateFormat, formatDate, serverDateFormat, stringToDate, toDayjs } from 'services';

dayjs.locale('nl');

const date = '01-01-2023';
const serverDate = '2023-01-01';

test('formatDate() - should return date in YYYY-MM-DD', () => {
  const value = '01-01-2023';

  expect(formatDate(new Date(date))).toEqual(value);
  expect(formatDate(date)).toEqual(value);
  expect(formatDate(dayjs(date))).toEqual(value);
});

test('stringToDate() - should format any plain string to Date object', () => {
  const value = new Date(date);

  expect(stringToDate(date)).toEqual(value);
  expect(stringToDate(serverDate, serverDateFormat)).toEqual(value);
});

test('toDayjs() - should return dayjs() value', () => {
  const value = dayjs(date, defaultDateFormat);
  expect(toDayjs(date)).toEqual(value);

  const serverValue = dayjs(serverDate, serverDateFormat);
  expect(toDayjs(serverDate, serverDateFormat)).toEqual(serverValue);
});
