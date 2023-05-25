import React, { useState } from 'react';
import './ActivityLog.css';
const ActivityLog = () => {
  const [activities, setActivities] = useState([]);
  const [date, setDate] = useState('');
  const [stepCount, setStepCount] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleStepCountChange = (event) => {
    setStepCount(event.target.value);
  };

  const handleAddActivity = (event) => {
    event.preventDefault();
    const newActivity = { date, stepCount };
    setActivities([...activities, newActivity]);
    setDate('');
    setStepCount('');
  };

  return (
    <div className="ActivityLog">
      <h2>Activity Log</h2>
      <form onSubmit={handleAddActivity}>
        <label>
          Date:
          <input type="text" value={date} onChange={handleDateChange} />
        </label>
        <label>
          Step Count:
          <input type="number" value={stepCount} onChange={handleStepCountChange} />
        </label>
        <button type="submit">Add Activity</button>
      </form>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            Date: {activity.date}, Step Count: {activity.stepCount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
