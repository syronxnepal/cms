export function sortObjectArray(array: any[], sortBy: string, isDesc = false) {
  if (!array) return [];
  const newArray = array.sort((a: any, b: any) => {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] == null || a[sortBy] === '' || a[sortBy] < b[sortBy]) {
      return -1;
    }
    return -1;
  });
  if (isDesc) newArray.reverse();
  return newArray;
}

export function sortObjectArrayByNumberProp(
  array: any[],
  sortBy: string,
  isDesc = false
) {
  const newArray = array.sort((a: any, b: any) => {
    if (+a[sortBy] > +b[sortBy]) {
      return 1;
    }
    if (+a[sortBy] < +b[sortBy]) {
      return -1;
    }
    return -1;
  });
  if (isDesc) newArray.reverse();
  return newArray;
}
