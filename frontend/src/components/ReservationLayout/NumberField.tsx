type Props = {
    partySize: number;
    setPartySize: (partySize: number) => void;
}

export default function NumberField({ partySize, setPartySize }: Props) {
    return (
        <div className='input-container'>
                <label className='label'>Party Size</label>
                <input 
                    className='number-field' 
                    type="number"
                    min={1}
                    max={12}
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    onKeyDown={(e) => e.preventDefault()} // prevent manual input, only allow using the arrows
                />
        </div>
    );
}