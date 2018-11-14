import generateMessage from '../utils/message';

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    //store res in a variable
    let from = 'Jen';
    let text = 'Some message';
    let message = generateMessage(from, text);
    
    expect(typeof message.createdAt === 'number').toBe(true);
    expect(message).toHaveProperty('from');
    expect(message).toHaveProperty('text');
  });
});