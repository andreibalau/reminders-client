import React, {FC, useCallback, useState} from 'react';
import './Reminders.css';
import RemindersProps from "../../model/reminders";
import Reminder from "../reminder/Reminder";
import axios from "axios";
import ReminderProps from "../../model/reminder";

const Reminders: FC<RemindersProps> = (props) => {

    const [inputReminder, setInputReminder] = useState('');

    const handleAdd = () => {
        axios.post<ReminderProps>("http://localhost:8080/v1.0/reminders", {title: inputReminder})
            .then(response => {
                if (response.status === 201) {
                    props.reminders.push(response.data);
                    setInputReminder('')
                }
            }).catch((err) => {
            console.log(err)
        })
    }

    const handleRemove = useCallback((reminder: ReminderProps) => {
            axios.delete(`http://localhost:8080/v1.0/reminders/${reminder.id}`)
                .then(response => {
                    if (response.status === 200) {
                        props.updateReminders(props.reminders.filter(value => value.id!==reminder.id));
                    }
                }).catch((err) => {
                console.log(err)
            })
        }, [props]);

    const handleInput = (e: any) => {
        setInputReminder(e.target.value)
    }

    const ReminderList = props.reminders.map(reminder => {
        return (
                <li key={reminder.id}>
                    <Reminder
                        id={reminder.id}
                        title={reminder.title}
                        createDate={reminder.createDate}
                        updateDate={reminder.updateDate}
                        handleRemove={handleRemove}
                    />
                </li>
            );
        });

    return (
        <div>
            <h1>
                Reminders:
            </h1>
            <input type="text" placeholder="Add reminder" value={inputReminder} onChange={handleInput}/>
            <button onClick={handleAdd}>Submit</button>
            <ul style={{textAlign: "left"}}>
                {ReminderList}
            </ul>
        </div>
    );
}

export default Reminders;