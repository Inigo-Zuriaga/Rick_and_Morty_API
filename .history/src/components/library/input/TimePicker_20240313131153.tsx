import React from "react";

export interface TimePickerProps {
  hours: number;
  setHours: (hours: number) => void;
  minutes: number;
  setMinutes: (minutes: number) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ hours, setHours, minutes, setMinutes }) => {
  const generateHoursOptions = () => {
    const result: number[] = [];

    for (let i = 0; i < 25; i++) {
      result.push(i);
    }

    return result;
  };

  const generateMinutesOptions = () => {
    const result: number[] = [];

    for (let i = 0; i < 61; i++) {
      result.push(i);
    }

    return result;
  };

  return (
    <div id="selectstyle">
      <select name="hours" id="hours" value={hours} onChange={(e) => setHours(parseInt(e.target.value))}>
        {generateHoursOptions().map((option) => {
          return <option key={option} value={option}>{option}</option>;
        })}
      </select>
      <select name="minutes" id="minutes" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))}>
        {generateMinutesOptions().map((option) => {
          return <option key={option} value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default TimePicker;
