import { useCallback, useEffect, useState } from "react";
import {
  MONTH_OPTIONS,
  YEAR_OPTIONS,
  DATE_OPTIONS,
  doubleDigit,
} from "../../../lib/date";
import { classNames } from "../../../lib/helpers";
import s from "./DatePicker.module.css";

type DateInputEvent = string;
interface DatePickerProps {
  onChange: (event?: DateInputEvent) => any;
  label: string;
  defaultValue?: string;
  className?: string;
}

export default function DatePicker({
  onChange,
  defaultValue,
  className,
  ...props
}: DatePickerProps) {
  const [year, setYear] = useState(String(YEAR_OPTIONS[0]));
  const [month, setMonth] = useState(MONTH_OPTIONS[0]);
  const [date, setDate] = useState(String(DATE_OPTIONS[MONTH_OPTIONS[0]][0]));

  useEffect(() => {
    if (onChange)
      onChange(
        `${year}-${doubleDigit(MONTH_OPTIONS.indexOf(month))}-${doubleDigit(
          date
        )}`
      );
  }, [onChange, date, month, year]);

  useEffect(() => {
    if (defaultValue) {
      // Assuming the format is always passed as YYYY-MM-DD, probably stupid, don't do this
      const [year, month, date] = defaultValue.split("-");
      setYear(year);
      setMonth(month);
      setDate(date);
    }
  }, [defaultValue]);

  return (
    <div className={classNames(s["date-picker"], className)} {...props}>
      <select
        className="select"
        onChange={(event) => setYear(event.target.value)}
      >
        {YEAR_OPTIONS.map((year) => (
          <option key={year}>{year}</option>
        ))}
      </select>
      <select
        className="select"
        onChange={(event) => setMonth(event.target.value)}
      >
        {MONTH_OPTIONS.map((monthOption) => (
          <option key={monthOption}>{monthOption}</option>
        ))}
      </select>
      <select
        className="select"
        onChange={(event) => setDate(event.target.value)}
      >
        {DATE_OPTIONS[month].map((dateOption) => (
          <option key={month + dateOption}>{dateOption}</option>
        ))}
      </select>
    </div>
  );
}
