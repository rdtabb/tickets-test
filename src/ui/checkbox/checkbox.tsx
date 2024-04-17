import css from './checkbox.module.css'

interface CheckboxProps {
    label: string
    id: string
    checked: boolean
    onChange: () => void
    className?: string
}

export const Checkbox = ({ checked, onChange, label, id, className }: CheckboxProps) => (
    <label className={css.checkboxContainer}>
        <input
            type="checkbox"
            id={id}
            className={`${css.checkbox} ${className}`}
            checked={checked}
            onChange={onChange}
        ></input>
        <label className={css.label} htmlFor="twoTransfers">
            {label}
        </label>
    </label>
)
