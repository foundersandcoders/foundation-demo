const pourIn = (liquidAmount, targetMug) => {
  if (!targetMug.empty) return;

  targetMug.empty = false;
  targetMug.capacity -= liquidAmount;

  console.log(
    '\u001b[0;35m',
    `${liquidAmount}ml poured into the mug. The mug can take ${targetMug.capacity}ml more.`
  );
};

export default pourIn;
