// eslint-disable-next-line import/prefer-default-export
export const sendBlurAndChangeEvents = (name, value, onChangeCb, onBlurCb) => {
  const changeEvent = {
    persist: () => { /**/ },
    target: {
      type: 'change',
      id: name,
      name,
      value,
    },
  };
  const blurEvent = {
    persist: () => { /**/ },
    target: {
      type: 'blur',
      id: name,
      name,
      value,
    },
  };
  onChangeCb(changeEvent);
  onBlurCb(blurEvent);
};
