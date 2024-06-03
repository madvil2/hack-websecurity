const callOnce = (fn: (props: any) => any) => {
  let firstTime = true;
  return (...args: any) => {
    if (firstTime) {
      firstTime = false;
      fn.apply(null, args);
    }
  };
};

export default callOnce;
