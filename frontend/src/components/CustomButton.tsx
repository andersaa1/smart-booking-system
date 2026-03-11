import './style.css';

type Props = {
  label: string;
  onClick?: () => void;
};

export default function CustomButton({ label, onClick }: Props) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}
