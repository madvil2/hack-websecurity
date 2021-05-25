const callFuncOnce = (fn: (props: any) => any, fn1: (props: any) => any) => {
  let firstTime = true;
  return (...args: any) => {
    if (firstTime) {
      firstTime = false;
      fn.apply(null, args);
    } else {
      fn1.apply(null, args);
    }
  };
};

export default callFuncOnce;
