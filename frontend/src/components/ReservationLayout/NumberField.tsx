type Props = {
  label: string;
  partySize: number;
  maxNum: number;
  setPartySize: (partySize: number) => void;
};

export default function NumberField({ label, partySize, maxNum, setPartySize }: Props) {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input
        className="number-field"
        type="number"
        min={1}
        max={maxNum}
        value={partySize}
        onChange={(e) => setPartySize(Number(e.target.value))}
        onKeyDown={(e) => e.preventDefault()} // prevent manual input, only allow using the arrows
      />
    </div>
  );
}
