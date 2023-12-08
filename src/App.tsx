import React, {useCallback, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Reminders from "./components/reminders/Reminders";
import ReminderProps from "./model/reminder";
import axios from "axios";

function App() {
  const [remindersData, setRemindersData] = useState<Array<ReminderProps>>(new Array<ReminderProps>())
  const fetchReminders = () => {
    axios.get<Array<ReminderProps>>("http://localhost:8080/v1.0/reminders")
        .then(response => {
          setRemindersData(response.data);
        }).catch((err) => {
      console.log(err)
    })
  }

  const updateReminders = useCallback((reminders: Array<ReminderProps>) => {
    setRemindersData(reminders);
  }, []);

  useEffect(() => fetchReminders(), []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Reminders reminders={remindersData} updateReminders={updateReminders}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
