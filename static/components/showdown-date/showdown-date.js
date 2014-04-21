/**
 * Showdown Date Extension
 * http://github.com/dbtek/showdown-date
 * 2014, Ismail Demirbilek
 * License: MIT
 */
(function() {
  var a = function(a) {
    return [{
      type: "lang",
      regex: '\\B(\\\\)?@year\\b',
      replace: function(a, b, c) {
        return b === "\\" ? a :  new Date().getFullYear();
      }
    }, {
      type: "lang",
      regex: '\\B(\\\\)?@date\\b',
      replace: function(a, b, c) {
        return b === "\\" ? a :  new Date().toLocaleDateString();
      }
    }, {
      type: "lang",
      regex: '\\B(\\\\)?@dateTime\\b',
      replace: function(a, b, c) {
        return b === "\\" ? a :  new Date().toLocaleString();
      }
    }, {
      type: "lang",
      regex: '\\B(\\\\)?@time\\b',
      replace: function(a, b, c) {
        return b === "\\" ? a :  new Date().toLocaleTimeString();
      }
    }]
  };
  typeof window != "undefined" && window.Showdown && window.Showdown.extensions && (window.Showdown.extensions.date = a), typeof module != "undefined" && (module.exports = a)
})();