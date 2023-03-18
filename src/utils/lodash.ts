import _ from 'lodash';

/**
 * Merges two or more objects starting with the left-most to
 * the right-most to create a parent mapping object.
 * More on: https://lodash.com/docs/4.17.15#merge
 *
 * @param {any} obj :: Destination object
 * @param {any} sources :: Source objects
 * @returns
 */
export const merge = (obj: any, sources?: any) => _.merge(obj, sources);

export const debounce = (func: (...args: any) => any, wait: number) =>
  _.debounce(func, wait);

export const isNaN = (value: any) => _.isNaN(value);

export const cloneDeep = (object: any) => _.cloneDeep(object);

export const omit = (object: any, key: string[]) => _.omit(object, key);

export const isEmpty = (obj: any) => _.isEmpty(obj);

export const isEqual = (obj1: any, obj2: any) => _.isEqual(obj1, obj2);

export const startCase = (string: any) => _.startCase(string);

export const orderBy = (obj: any, sortBy: string, sortOrder: 'asc' | 'desc') =>
  _.orderBy(obj, sortBy, sortOrder);
// Example for unWindArray:
// [{
//   groups: [{ name: 'test 1' }, { name: 'test 2' }],
//   id: 1
// }]
// becomes
// [{
//   id: 1,
//   group: {
//       name: 'test 1'
//   }
// }, {
//   id: 1,
//   group: {
//       name: 'test 2'
//   }
// }]
export const unWindArray = (array: any, field: string) => {
  if (_.isArray(array)) {
    return _.flatten(
      array.map((input) => {
        if (_.isArray(input[field])) {
          return input[field].map((i: any) => {
            const output = { ...input };
            output[field] = i;

            return output;
          });
        }
        return input;
      })
    );
  }
  return array;
};
