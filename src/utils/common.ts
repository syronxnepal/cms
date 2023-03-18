import { AccessType } from 'enums/auth';
import moment from 'moment';
import { RootState, store } from 'stores';

export const capitalizeFirstLetter = (s: string) => {
  // Workaround for inconsistent data for updatedBy field.
  // TODO: Remove this check after the data is made consistent
  if (typeof s !== 'string') {
    return '-';
  }

  if (!s) return '';
  const text = s.toLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatCurrency = (
  value: string | number,
  elseNull = true,
  min = 2,
  max = 2
): string | null => {
  if (typeof value === 'string' && Number.isNaN(Number(value))) {
    return '-';
  }

  if (value || value === 0) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: min,
      maximumFractionDigits: max,
    }).format(value as number);
  }

  if (!elseNull) {
    return formatCurrency(0);
  }

  return '-';
};

export const unformatCurrency = (value: string | number) => {
  if (typeof value === 'number') return value;

  if (!value) return 0;

  return Number(value.replace(/[^0-9.-]+/g, ''));
};

/**
 * Takes in a number and returns a string with the number formatted with the
 * given number of minimum and maximum fraction digits.
 * @param {number} value - the number to format
 * @param {boolean} [elseNull=true] - if true, returns 0 if value is null or undefined
 * @param {number} [minimumFractionDigits=2] - the minimum number of fraction digits
 * @param {number} [maximumFractionDigits=2] - the maximum number of fraction digits
 * @returns {string | null} - the formatted number, or null if value is null or undefined
 */
export const formatNumber = (
  value: number,
  elseNull = true,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2
): string | null => {
  if (value || value === 0) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(value);
  }
  if (elseNull) {
    return formatNumber(0);
  }
  return null;
};

export const tinymceToolbars =
  'undo redo | formatpainter casechange blocks | bold italic | ' +
  'alignleft aligncenter alignright alignjustify | ' +
  'bullist numlist checklist outdent indent';

export const tinymcePluginsList = ['advlist', 'lists', 'link', 'image'];

export const tinymceFontSizeFormats =
  '8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 24pt 30pt 36pt';

export const convertToProperCase = (camelText: any) => {
  if (camelText.toLowerCase() === 'displaylocation') {
    return 'Location';
  }
  if (camelText === 'lastSsn') {
    return 'LastSSN';
  }
  if (camelText === 'regularHours') {
    return 'Regular Hours (mins)';
  }
  if (camelText === 'afterHours') {
    return 'After Hours (mins)';
  }
  if (camelText === 'totalAfterHours') {
    return 'Total After Hours (mins)';
  }
  if (camelText === 'totalPurchasedTime') {
    return 'Total Purchase Time (mins)';
  }
  if (camelText === 'totalRegularHours') {
    return 'Total Regular Hours Used (mins)';
  }
  if (camelText === 'totalRemainingTime') {
    return 'Total Regular Hours Remaining (mins)';
  }
  if (camelText === 'testDate') {
    return 'Test Date';
  }
  const seperated = camelText.replace(/([A-Z])/g, ' $1');
  const titleCased = seperated.charAt(0).toUpperCase() + seperated.slice(1);
  return titleCased;
};

export const formatPhone = (unformattedPhone: string) => {
  let phone = unformattedPhone;
  if (phone) {
    const x = phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    if (!x) return '-';
    // eslint-disable-next-line prefer-template
    phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    return phone;
  }
  return 'N/A';
};

export const unformatPhone = (formattedPhone: string) => {
  if (!formattedPhone) {
    return formattedPhone;
  }

  return formattedPhone.replace(/[^\d]/g, '');
};

/**
 * Check if every values of an object is empty or null
 *
 * @param {any} obj
 * @returns {boolean}
 */
export const checkIfObjHasAllEmptyOrNullValues = (obj: any) =>
  Object.values(obj).every((x) => x === null || x === '');

export const sliceText = (text: string, length: number): string =>
  text?.length > length ? `${text.slice(0, length)}...` : text;

/**
 * Get full name
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} middleName
 */
export const getFullName = (
  firstName?: string,
  lastName?: string,
  middleName?: string
): string => {
  const fName = firstName || '';
  const mName = middleName || '';
  const lName = lastName || '';

  const fullName = `${fName}${mName ? ` ${mName} ` : ' '}${lName}`;

  return fullName.trim();
};

/**
 * Get total number of pages for pagination
 *
 * @param {number} totalCount
 * @param {number} pageLimit
 * @returns {number} :: total number of pages
 */
export const getTotalPagesCount = (totalCount: number, pageLimit: number) =>
  Math.ceil(totalCount / pageLimit);

export const getAgeRange = (minAge: number, maxAge: number) => {
  if (minAge && maxAge) return `${minAge} to ${maxAge}`;
  if (!minAge && maxAge) return `0 to ${maxAge}`;
  if (minAge && !maxAge) return `${minAge} and up`;
  return 'N/A';
};
export const getQuantityRange = (minQty: number, maxQty: number) => {
  if (minQty && maxQty) return `${minQty} to ${maxQty}`;
  if (!minQty && maxQty) return `0 to ${maxQty}`;
  if (minQty && !maxQty) return `${minQty} and up`;
  return '0';
};

export const convertStringToNumber = (keys: string[], payload: any) =>
  keys.reduce((accumulator: any, currentValue: any) => {
    accumulator[currentValue] = +payload[currentValue];
    return accumulator;
  }, {});

export const formatPrice = (price: string) =>
  price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/**
 * Unformat date to digit only string
 * Useful for setting default value in form
 *
 * Input: 01/01/1995
 * Output: 01011995
 *
 * @param date
 * @returns
 */
export const unformatDate = (date: string) => {
  if (!date) return '';
  return date.replaceAll('/', '');
};

/**
 * Format date
 * Date in payload should be transformed in 'MM/DD/YYYY' format
 *
 * Input: 01011995
 * Output: 01/01/1995
 *
 * @param {string} date
 * @returns
 */
export const formatDate = (date: string) => {
  if (!date) return '';
  return `${date.substring(0, 2)}/${date.substring(2, 4)}/${date.substring(
    4,
    date.length
  )}`;
};

export const capitalizeFirstLetterOfEachWord = (string: string) => {
  if (!string) return string;
  return string.toLowerCase().split(' ').map(capitalizeFirstLetter).join(' ');
};

export const formatEncodedParam = (param: string) =>
  param?.replace(/ /g, '+') ?? '';

/**
 * It takes an array of objects, and returns the total of a property of each object
 * @param  - `totalBy` is the key of the object that you want to total up.
 * @returns total
 */
export const getTotalFromObjectArray = ({
  totalBy,
  format,
  array,
}: {
  totalBy: string;
  format: 'number' | 'currency';
  array: any[];
}) => {
  const total = array.reduce((prev, curr) => prev + curr[totalBy], 0);

  return format === 'currency'
    ? formatCurrency(total, true, 0, 0) ?? 'N/A'
    : total;
};

export const splitDate = (date: string, index: number, noSplit = false) => {
  if (noSplit) {
    return new Date(date)?.toISOString();
  }
  return moment(date)?.format()?.split('T')[index];
};

export const checkIfValuesInObjectIsEmpty = (objectName: any) =>
  Object.values(objectName).every((x) => x === null || x === '');

export const convertMilesToMetre = (miles: number) => miles * 1609.34;

export const convertBytesToMB = (bytes: number) =>
  `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

// Check  Permission
export const checkPermission = (accessType: AccessType = AccessType.READ) =>
  // const currentPath = window.location.pathname;
  // const rootState: RootState = store.getState();
  // const { activeMenu } = rootState.auth;
  // if (!activeMenu) return false;
  // if (activeMenu.children?.length) {
  //   const activeChildMenu = activeMenu.children.find(
  //     (e) => e.routePath === currentPath
  //   );
  //   return activeChildMenu?.accessType === accessType;
  // }
  // return activeMenu.accessType === accessType;
  // TODO
  true;
// Check  Menu Access
export const checkMenu = (path: string) =>
  // const rootState: RootState = store.getState();
  // const { menus } = rootState.auth;

  // if (!menus) return false;
  // const menu = menus.some((e) => e.routePath === path);
  // return menu;
  true;
