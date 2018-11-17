import { generateMessage, generateLocationMessage } from '../utils/message';

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = `deb`;
    let latitude = 15;
    let longitude =  19;
    let url = 'https://www.google.com/maps?q=15,19'; 
    let message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt === 'number').toBe(true);
    expect(message).toHaveProperty("from");
    expect(message).toHaveProperty("url");


  });
});