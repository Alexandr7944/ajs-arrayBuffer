import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

test('test method ArrayBufferConverter.load', () => {
  const buffer = getBuffer('Hello, world');
  const bufferView = ArrayBufferConverter.load(buffer);
  expect(bufferView.length).toBe(12);
});

test('test method ArrayBufferConverter.toString', () => {
  const buffer = getBuffer('Hello, world');
  const bufferView = ArrayBufferConverter.load(buffer);
  const string = ArrayBufferConverter.toString(bufferView);
  expect(string).toBe('Hello, world');
});
