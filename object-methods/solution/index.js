import pourIn from './helpers/fill.js';

const mug = {
  empty: true,
  _capacity: 500,
  color: 'white',
  fillUp: function (liquidAmount) {
    // then abstract it here
    if (!this.empty) return;

    this.empty = false;
    this.capacity -= liquidAmount;

    console.log(
      '\u001b[0;35m',
      `${liquidAmount}ml poured into the mug. The mug can take ${this.capacity}ml more.`
    );
  },

  pourOut() {
    // extra if you have time and want to
    if (this.empty) {
      console.log('\u001b[0;35m', 'The mug is already empty');
      return;
    }
    console.log(
      '\u001b[0;35m',
      `${500 - this.capacity}ml poured careley osslnto the floor. The mug is now empty.`
    );
    this.empty = true;
    this.capacity = 500;
  },
  set capacity(number) {
    this.capacity = number;
  },
  get capacity() {
    return this.capacity;
  },
};

// pourIn(250, mug); // do this first

mug.pourOut();
