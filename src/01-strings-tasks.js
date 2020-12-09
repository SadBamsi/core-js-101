function concatenateStrings(value1, value2) {
  return String(value1) + String(value2);
}
function getStringLength(value) {
  return Number(value.length);
}
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
function extractNameFromTemplate(value) {
  return value.substring(7, value.length - 1);
}
function getFirstChar(value) {
  return value.charAt(0);
}
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}
function repeatString(value, count) {
  return value.repeat(count);
}
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}
function unbracketTag(str) {
  const reg = /[<>]/gm;
  return str.replace(reg, '');
}
function convertToUpperCase(str) {
  return str.toUpperCase();
}
function extractEmails(str) {
  return str.split(';');
}
function getRectangleString(width, height) {
  let res = '';
  const el = '─';
  const figureWidth = width - 2;
  for (let i = 0; i < height; i += 1) {
    let row;
    if (i === 0) {
      row = `┌${el.repeat(figureWidth)}┐\n`;
    } else if (i === height - 1) {
      row = `└${el.repeat(figureWidth)}┘\n`;
    } else {
      row = `│${' '.repeat(figureWidth)}│\n`;
    }
    res += row;
  }
  return res;
}
function encodeToRot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return str.split('')
    .map((el) => {
      let letter;
      const reg = /[a-zA-Z]/gm;
      if (reg.test(el)) {
        if (el === el.toUpperCase()) {
          letter = alphabet.indexOf(el) + 13 >= 26
            ? alphabet[(alphabet.indexOf(el) + 13) - 26] : alphabet[alphabet.indexOf(el) + 13];
        } else {
          letter = alphabet.indexOf(el.toUpperCase()) + 13 >= 26
            ? alphabet[(alphabet.indexOf(el.toUpperCase()) + 13) - 26].toLowerCase()
            : alphabet[alphabet.indexOf(el.toUpperCase()) + 13].toLowerCase();
        }
      } else {
        letter = el;
      }

      return letter;
    })
    .join('');
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
function getCardId(value) {
  const deck = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];
  return deck.indexOf(String(value));
}
module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
