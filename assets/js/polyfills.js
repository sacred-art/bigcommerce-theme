import 'core-js/stable';
import 'regenerator-runtime/runtime';
import objectFitImages from 'object-fit-images';

require('formdata-polyfill');

document.addEventListener('DOMContentLoaded', () => {
    objectFitImages();
});
