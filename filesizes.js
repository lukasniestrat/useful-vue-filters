/**
 * Convert kilobyte to megabyte
 * @param {number} value
 * @returns {number}
 */

Vue.filter('toMB', (value) => Math.round(value / 1024 / 1024));
