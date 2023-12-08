import React, { FC } from 'react';
import './Reminder.css';
import ReminderProps from "../../model/reminder";

const Reminder: FC<ReminderProps> = (props) => {

    return (
        <>
            {props.title} | {props.updateDate}
            <button onClick={() => props.handleRemove(props)}>delete</button>
        </>
    );
};

export default Reminder;
