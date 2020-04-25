/**
 * Convert something like 2020-04-20 10:59:16 to 20.04.2020
 * @param {string} rawDate
 * @returns {string}
 */

Vue.filter('date', (rawDate) => {
  if (!rawDate) return '';
  const newDate = new Date(rawDate);

  const year = newDate.getFullYear();
  const month = `${newDate.getMonth() + 1}`.padStart(2, 0);
  const day = `${newDate.getDate()}`.padStart(2, 0);
  const stringDate = [day, month, year].join('.');

  return stringDate;
});