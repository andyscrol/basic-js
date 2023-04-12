const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
      this.direct = direct; // Set the machine to direct or reverse
      this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Define the alphabet used for encryption/decryption
  }

  encrypt(message, key) {
      if (!message || !key) throw new Error('Incorrect arguments!'); // Check for missing arguments
      message = message.toUpperCase();
      key = key.toUpperCase();
      let result = ''; // Initialize result string
      let keyIndex = 0; // Initialize key index
      for (let i = 0; i < message.length; i++) { // Loop through each character in the message
          if (this.alphabet.includes(message[i])) { // Check if character is in the alphabet
              let shift = this.alphabet.indexOf(key[keyIndex]); // Get shift value from key
              let index = (this.alphabet.indexOf(message[i]) + shift) % this.alphabet.length; // Calculate new index of character after shift
              result += this.alphabet[index]; // Add shifted character to result string
              keyIndex = (keyIndex + 1) % key.length; // Increment key index and wrap around if necessary
          } else {
              result += message[i]; // If character is not in alphabet, add it unchanged to result string
          }
      }
      return this.direct ? result : result.split('').reverse().join(''); // If machine is reverse, reverse result string before returning it
  }

  decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) throw new Error('Incorrect arguments!'); // Check for missing arguments
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      let result = ''; // Initialize result string
      let keyIndex = 0; // Initialize key index
      for (let i = 0; i < encryptedMessage.length; i++) { // Loop through each character in the encrypted message
          if (this.alphabet.includes(encryptedMessage[i])) { // Check if character is in the alphabet
              let shift = this.alphabet.indexOf(key[keyIndex]); // Get shift value from key
              let index = (this.alphabet.indexOf(encryptedMessage[i]) - shift + this.alphabet.length) % this.alphabet.length; // Calculate new index of character after inverse shift
              result += this.alphabet[index]; // Add shifted character to result string
              keyIndex = (keyIndex + 1) % key.length; // Increment key index and wrap around if necessary
          } else {
              result += encryptedMessage[i]; // If character is not in alphabet, add it unchanged to result string
          }
      }
      return this.direct ? result : result.split('').reverse().join(''); // If machine is reverse, reverse result string before returning it
  }
}

module.exports = {
  VigenereCipheringMachine
};
