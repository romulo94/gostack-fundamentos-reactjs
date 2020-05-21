import { format } from 'date-fns';

const formatDate = (value: string, toFormat = 'dd/MM/yyyy'): string =>
  format(new Date(value), toFormat);

export default formatDate;
