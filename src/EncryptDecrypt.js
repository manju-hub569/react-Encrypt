var key = 'real secret keys should be long and random';
var encryptor = require('simple-encryptor')(key);

function Enc(text) {
  return encryptor.encrypt(text);
}

function Dec(text) {
  return encryptor.decrypt(text);
}

export { Enc, Dec };
