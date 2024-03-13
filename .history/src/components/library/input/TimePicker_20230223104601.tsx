//Solution one

/*
import React, { useState } from 'react';
//import { useState } from "react";

//Create function => DatePicker

function TimePicker(){

const [date, setDate] = useState();

console.log("Date", date);

//Create onChange in the input.
return(
<div>
    <h1>Selected Date : {date} </h1>
    <input type="date" onChange={e=setDate(e.target.value)}/>
</div>
);
}


export default DatePicker;
*/

//Solution 2
/*
import { useEffect, useState } from "react";

function DatePicker(){
    const[newDate, setNewDate] =useState('')
    useEffect(()=>{
      let todayDate = new Date("Feb 7 2023"),
      month = ""+(todayDate=getMonth()+1),
      day = ""+(todayDate=getDate(),
      year = ""+(todayDate=getFullYear();
      if(day.length<2){
        day = '0' +day
      }
      if(month.length<2){
        month = '0' +month
      }
      console.log(day,month,year)
      setNewDate([day,month,year].join('-'))
    },[])

return(
    <div>
        <h1>{newDate}</h1>
    </div>
)

}

/*
//Solution 3
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
*/


//Solution 4
import React from "react";
import "./TimePicker.module.css"


export interface TimePickerProps {
  hours: number;
  setHours: (hours: number) => void
  minutes: number;
  setMinutes: (minutes: number) => void
}

export default function TimePicker({ hours, setHours, minutes, setMinutes}) {
  //object destructuring
  //props



  const genereateHoursOptions = () => {
    const result: number[] = [];

    for (let i = 0; i < 25; i++) {
      result.push(i);
    }

    return result;
  };

    const genereateMinutesOptions = () => {
      const result: number[] = [];
  
      for (let i = 0; i < 61; i++) {
        result.push(i);
      }
  
      return result;
    };

  return (
    <div id= "selectstyle">
      <select name="hours" id="hours" value={hours}>
        {genereateHoursOptions().map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
      <select name="minutes" id="minutes" value={minutes}>
        {genereateMinutesOptions().map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}



