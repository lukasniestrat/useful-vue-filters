/**
 * Convert something like E-Mail Adress to e-mail-adress
 * @param {string} name
 * @returns {string}
 */

Vue.filter('className', (name) => name.toLowerCase().replace(' ', '-'));