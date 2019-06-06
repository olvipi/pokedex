export default function compare(arr1, arr2) {
  /**
   * @return {boolean}
   */
  function CompareForSome(item) {
    return item > -1;
  }
  const filtered = arr1.map(item => arr2.indexOf(item));
  //якщо на точне співпадіння ставим every
  return filtered.some(CompareForSome)
};
