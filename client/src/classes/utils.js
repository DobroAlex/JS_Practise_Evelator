module.exports = {
  isBetween: function (a, b, c) { // checks if a<=c<=b
    return (a <= c) && (c <= b)
  },
  ascendingOrderComparator: function (a, b) {
    return a - b
  },
  descendingOrderComparator: function (a, b) {
    return b - a
  },
  partialSort: function (arr, sortFunction, start = 0, end = arr.length) { // https://stackoverflow.com/questions/7426563/in-javascript-how-do-you-sort-a-subset-of-an-array
    let savedArr = arr.slice(0, start)
    let newArr = arr.slice(start, end)
    newArr.sort(sortFunction)
    const retVal = savedArr.concat(newArr)
    return retVal
  }
}
