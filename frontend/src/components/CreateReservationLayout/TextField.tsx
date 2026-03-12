type Props = {
  label: string;
  name: string;
  setName: (name: string) => void;
};

export default function TextField({ label, name, setName }: Props) {
  return (
    <div className="input-container-name">
      <label className="label">{label}</label>
      <input
        className="text-field"
        type="text"
        value={name}
        onChange={(e) => setName(String(e.target.value))}
      />
    </div>
  );
}
