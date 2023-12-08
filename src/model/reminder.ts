
export default interface ReminderProps {
    id: string
    title: string
    createDate: Date
    updateDate: Date
    handleRemove: (reminder: ReminderProps) => void
}