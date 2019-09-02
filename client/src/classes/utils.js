export function isBetween (a, b, c) { // checks if a<=c<=b
  return (a <= c) && (c <= b)
}
export function ascendingOrderComparator (a, b) {
  return a - b
}
export function descendingOrderComparator (a, b) {
  return b - a
}
export function partialSort (arr, sortFunction, start = 0, end = arr.length) { // https://stackoverflow.com/questions/7426563/in-javascript-how-do-you-sort-a-subset-of-an-array
  let savedArr = arr.slice(0, start)
  let newArr = arr.slice(start, end)
  newArr.sort(sortFunction)
  const retVal = savedArr.concat(newArr)
  return retVal
}
