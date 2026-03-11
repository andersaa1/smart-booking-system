import './style.css';

type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function CustomButton({ label, onClick, disabled = false }: Props) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
