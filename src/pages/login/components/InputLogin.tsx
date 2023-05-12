interface IInputLoginProps {
    type?: string;
    label: string;
    value: string;
    onChange: (newValue: string) => void;
    onPressEnter: () => void;
}

export const InputLogin: React.FC<IInputLoginProps> = ({ label, value, onChange, onPressEnter, type }) => {
    return (
        <label>
            <span>{label}</span>
            <input
                type={type}
                value={value}
                onChange={e => onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? onPressEnter && onPressEnter() : undefined}
            />
        </label>
    )
}