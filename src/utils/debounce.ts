function debounce(callback: (prop: any) => any, wait: number) {
  let timeout: any;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(null, args), wait);
  };
}
export default debounce;
