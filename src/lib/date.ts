export const MONTH_OPTIONS = [...Array(12).keys()].map((key) =>
  new Date(0, key).toLocaleString("en", { month: "long" })
);
export const YEAR_OPTIONS = [...Array(100).keys()].map(
  (key) => new Date().getFullYear() - key
);
export const DATE_OPTIONS = [...MONTH_OPTIONS.keys()]
  .map((index) => new Date(0, index + 1, 0).getDate())
  .reduce((all: { [key: string]: number[] }, current, index) => {
    all[MONTH_OPTIONS[index]] = [...new Array(current).keys()].map(
      (i) => i + 1
    );
    return all;
  }, {});

export const doubleDigit = (value: string | number) => {
  let toDoubleize = typeof value == "number" ? value.toString() : value;
  return toDoubleize.length > 1 ? toDoubleize : `0${toDoubleize}`;
};
