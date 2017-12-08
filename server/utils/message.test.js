var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the corret message obejct', () => {
    var from = 'Antony', text = 'This is a test message';
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');
  });
});
