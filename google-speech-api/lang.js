var Lang = function () {};

var languages = [];
var directionCodes = {};
var directions = {};


// English language

languages.push('en-US');

var en_n = ["north", "forward", "up"];
var en_ne = ["north east"];
var en_e = ["east", "right"];
var en_se = ["south east"];
var en_s = ["south", "back", "backward", "reverse", "down"];
var en_sw = ["south west"];
var en_w = ["west", "left"];
var en_nw = ["north west"];

// spoken direction to code
// index is the code
directionCodes['en-US'] = [en_n, en_ne, en_e, en_se, en_s, en_sw, en_w, en_nw];
// flat array for Google Cloud Speech API to increase accuracy of speech recognition
directions['en-US'] = [].concat.apply([], directionCodes['en-US']);

// Hindi language

languages.push('hi-IN');

var hi_n = ["उत्तर", "आगे", "ऊपर"];
var hi_ne = ["उत्तर पूर्व"];
var hi_e = ["पूर्व", "दाहिने"];
var hi_se = ["दक्षिण पूर्व"];
var hi_s = ["दक्षिण", "वापस", "उल्टा", "नीचे"];
var hi_sw = ["दक्षिण पश्चिम"];
var hi_w = ["पश्चिम", "बाएं"];
var hi_nw = ["उत्तर पश्चिम"];

// spoken direction to code
// index is the code
directionCodes['hi-IN'] = [hi_n, hi_ne, hi_e, hi_se, hi_s, hi_sw, hi_w, hi_nw];
// flat array for Google Cloud Speech API to increase accuracy of speech recognition
directions['hi-IN'] = [].concat.apply([], directionCodes['hi-IN']);

Lang.prototype.getLanguages = function () {
  return languages;
}

Lang.prototype.getDirectionCodes = function (languageCode) {
  return directionCodes[languageCode];
}

Lang.prototype.getDirections = function (languageCode) {
  return directions[languageCode];
}

Lang.prototype.directionToCode = function (languageCode, direction) {
  var directionCodes = Lang.prototype.getDirectionCodes(languageCode);
  for (var i = 0; i < directionCodes.length; i++) {
    for (var j = 0; j < directionCodes[i].length; j++) {
      if (direction.includes(directionCodes[i][j])) {
        return i;
      }
    }
  }
  return -1;
}

module.exports = Lang;
