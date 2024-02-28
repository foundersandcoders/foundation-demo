const mug = {
  empty: true,
  _capacity: 508,
  color: 'white',

  get capacity() {
    return this._capacity;
  },

  set capacity(number) {
    if (typeof number === 'number') {
      this._capacity = number;
    } else {
      console.log('Use a number');
    }
  }
};

mug.capacity = 'bird'

console.log(mug.capacity);
