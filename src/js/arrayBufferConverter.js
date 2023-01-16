class ArrayBufferConverter {
  static load(buffer) {
    const bufferView = new Uint16Array(buffer);
    return bufferView;
  }

  static toString(bufferView) {
    const array = [];
    bufferView.forEach((item) => array.push(String.fromCharCode(item)));
    return array.join('');
  }
}

export default ArrayBufferConverter;
