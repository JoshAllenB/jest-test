function caesarCipher(str, shift) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const isUpperCase = char === char.toUpperCase();
    const alphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.indexOf(char);
    const shiftedIndex = (index + shift) % 26;
    const shiftedChar = alphabet.charAt(shiftedIndex >= 0 ? shiftedIndex : 26 + shiftedIndex);
    return isUpperCase ? shiftedChar : shiftedChar.toLowerCase();
  });
}

module.exports = caesarCipher;
