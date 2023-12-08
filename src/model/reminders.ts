import ReminderProps from "./reminder";

export default interface RemindersProps {
    reminders: Array<ReminderProps>
    updateReminders: (reminders: Array<ReminderProps>) => void
}