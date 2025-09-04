// Mimics ProvidePlugin configuration for jQuery
global.$ = global.jQuery = window.jQuery = require('jquery');

// Foundation requires existing script tag to load properly
document.getElementsByTagName('head')[0].appendChild(document.createElement('script'));

// jQuery thinks all elements are not visible under jsdom
// See https://github.com/jsdom/jsdom/issues/1048
window.Element.prototype.getClientRects = function () {
    var node = this;
    while (node) {
        if (node === document) {
            break;
        }
        // don't know why but style is sometimes undefined
        if (!node.style || node.style.display === 'none' || node.style.visibility === 'hidden') {
            return [];
        }
        node = node.parentNode;
    }
    // Return mock dimensions to avoid infinite recursion with jQuery width/height
    return [{ width: 100, height: 100 }];
};