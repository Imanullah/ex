import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const test = (n: number): void => {
  setTimeout(function () {
    n = n + 1;
    console.log(n);
  }, 60000);
};

export const DateFormatIntl = (dateStr: Date | string | null, formatCode: string = 'en-US') => {
  // const date = dateStr instanceof Date ? new Date(dateStr).toString() : new Date(dateStr);
  if (dateStr == null) return '-';
  const date = new Date(dateStr as Date | string);
  const formatter = new Intl.DateTimeFormat(formatCode, {
    dateStyle: 'medium',
  });
  return formatter.format(date as Date);
};

export const DateFormat = (dateStr: Date | string, formatStr: string = 'DD MMM, YYYY'): string => {
  const dayObj: Dayjs = dayjs(dateStr);

  return `${dayObj.format(formatStr)}`;
};

export const RelativeFormat = (dateStr: Date | string) => {
  dayjs.extend(relativeTime);
  const dayObj: Dayjs = dayjs(dateStr);

  return dayjs().to(dayObj);
};
