// A variation of determining leap years, assuming only integers are used and years can be negative and positive.

// Write a function which will return the days in the year and the year entered in a string. For example:

// Input: year = 2000 ==> returns "2000 has 366 days"

function yearDays(year) {
  if (year % 4 !== 0) {
    return year + ' has 365 days';
  } else if (year % 100 !== 0) {
    return year + ' has 366 days';
  } else if (year % 400 !== 0) {
    return year + ' has 365 days';
  } else {
    return year + ' has 366 days';
  }
}
