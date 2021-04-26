export const unwind = (arr, r = []) => {
  arr.forEach(({ children, ...rest }) => {
    r.push(rest);
    if (children) unwind(children, r);
  });
  return r;
};
