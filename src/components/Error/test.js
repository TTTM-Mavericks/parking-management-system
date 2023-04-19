import React, { useEffect, useState } from "react";
import { DatePicker, TimePicker, Button } from "antd";
import { toast } from "react-toastify";

const { RangePicker } = TimePicker;

function TestDate() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setStartDate(startDate)
    console.log(startDate)
  }, [startDate])

  useEffect(() => {
    setEndDate(endDate)
    console.log(endDate)
  }, [endDate])

  useEffect(() => {
    setStartTime(startTime)
    console.log(startTime)
  }, [startTime])

  useEffect(() => {
    setEndTime(endTime)
    console.log(endTime)
  }, [endTime])

  useEffect(() => {
    // Check if the StartDate is after the EndDate
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      console.log('Start date cannot be after end date.');
      toast.error('Start date cannot be after end date.')
      setDisabled(true);
    } else {
      setError('');
      setDisabled(false);
    }
  }, [startDate, endDate]);


  useEffect(() => {
    // Check if the StartDate and EndDate are the same date
    if (startDate && endDate && startDate === endDate) {
      // Check if the StartTime is after the EndTime
      if (startTime > endTime) {
        console.log('Start time cannot be after end time.');
        toast.error('Start time cannot be after end time.')
        setDisabled(true);
      } else {
        setError('');
        setDisabled(false);
      }
    } else {
      setError('');
      setDisabled(false);
    }
  }, [startDate, endDate, startTime, endTime]);

  useEffect(() => {
    // Check if the StartTime and EndTime are the same time
    if (startTime && endTime && startTime === endTime) {
      console.log('Start time and end time cannot be the same.');
      toast.error('Start time and end time cannot be the same in one day.')
      setDisabled(true);
    } else {
      setError('');
      setDisabled(false);
    }
  }, [startTime, endTime]);

  return (
    <div>
      <div className="class-input">
        <label>Start date *</label>
        <br />
        <div>
          <input type="date" min={new Date().toISOString().split('T')[0]} style={{ width: '100%', position: 'relative' }} onChange={(e) => setStartDate(e.target.value)} />
        </div>
      </div>
      <div className="class-input">
        <label>Start time *</label>
        <br />
        <select className="form-select" autoComplete="" onChange={(e) => setStartTime(e.target.value)}>
          <option>00:00</option>
          <option>01:00</option>
          <option>02:00</option>
          <option>03:00</option>
          <option>04:00</option>
          <option>05:00</option>
          <option>06:00</option>
          <option>07:00</option>
          <option>08:00</option>
          <option>09:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
          <option>16:00</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
          <option>23:00</option>
        </select>
      </div>
      <div className="class-input">
        <label>End date *</label>
        <br />
        <div>
          <input type={'date'} min={new Date().toISOString().split('T')[0]} style={{ width: '100%', position: 'relative' }} onChange={(e) => setEndDate(e.target.value)}  ></input>

        </div>
      </div>
      <div className="class-input">
        <label>End time *</label>
        <br />
        <select class="form-select" autoComplete="off" onChange={(e) => setEndTime(e.target.value)}>
          <option>00:00</option>
          <option>01:00</option>
          <option>02:00</option>
          <option>03:00</option>
          <option>04:00</option>
          <option>05:00</option>
          <option>06:00</option>
          <option>07:00</option>
          <option>08:00</option>
          <option>09:00</option>
          <option>11:00</option>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
          <option>16:00</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
          <option>23:00</option>
        </select>
      </div>
    </div>
  );
}

export default TestDate;



