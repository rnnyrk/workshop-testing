import * as i from 'types';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/nl';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.locale('nl');
dayjs.extend(customParseFormat);

export type DateType = string | Date | Dayjs;

export const defaultDateFormat = 'DD-MM-YYYY';
export const serverDateFormat = 'YYYY-MM-DD';
export const fullDateWithTime = 'DD MMMM YYYY, HH:mm';

export const toDayjs = (date: DateType, format?: string): Dayjs => {
  if (!date) throw new Error('No date provided to format');

  return dayjs(date, format || defaultDateFormat);
};

export const formatDate = (date: DateType, format?: string): string => {
  if (!date) throw new Error('No date provided to format');

  return dayjs(date).format(format || defaultDateFormat);
};

export const stringToDate = (date: string, format?: string): Date => {
  const parsed = dayjs(date, format || defaultDateFormat, 'nl');
  const newDate = new Date(parsed.year(), parsed.month(), parsed.date());

  return newDate;
};
