export const classNames = (
  ...args: Array<string | object | null | undefined>
) => {
  return args
    .map((arg) => {
      if (typeof arg == "string") return arg;
      if (typeof arg == "object" && arg) {
        const entries = Object.entries(arg);
        return entries.reduce((total, [key, value]) => {
          if (value) total += key;
          return total;
        }, "");
      }
      return arg;
    })
    .filter(Boolean)
    .join(" ");
};
