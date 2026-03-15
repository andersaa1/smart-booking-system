import type { Preference } from '../../types/types';

type Props = {
  preferences: Preference[] | null;
  setPreferences: (preferences: Preference[] | null) => void;
};

const PREFERENCE_OPTIONS: Preference[] = [
  'WINDOW',
  'BATHROOM',
  'PRIVATE',
  'QUIET',
  'OUTDOOR',
  'SHOW',
  'STAGE',
  'STAGE_FAR',
  'BAR',
  'SHADE',
  'FREE_MUSIC',
  'RELAX_MUSIC',
  'FAST_MUSIC',
  'NO_MUSIC',
  'CHARGER',
  'GAMES',
  'CANDLE',
  'FAMILY',
];

const LABELS: Record<Preference, string> = {
  WINDOW: 'Window Seat',
  BATHROOM: 'Close to Bathroom',
  PRIVATE: 'Private Area',
  QUIET: 'Quiet Atmosphere',
  OUTDOOR: 'Outside',
  SHOW: 'Live Performers',
  STAGE: 'Close to Stage',
  STAGE_FAR: 'Further from Stage',
  BAR: 'Close to Bar',
  SHADE: 'Shaded Area',
  FREE_MUSIC: 'Own Music',
  RELAX_MUSIC: 'Relaxing Music',
  FAST_MUSIC: 'Energetic Music',
  NO_MUSIC: 'No Music',
  CHARGER: 'Charging Availability',
  GAMES: 'Board Games Included',
  CANDLE: 'Candle Lit',
  FAMILY: 'Family Friendly',
};

export default function PreferencePicker({ preferences, setPreferences }: Props) {
  const selectedPreferences = preferences ?? [];
  const preferenceList = PREFERENCE_OPTIONS.filter(
    (option) => !selectedPreferences.includes(option),
  );

  const addPreference = (preference: Preference) => {
    setPreferences([...selectedPreferences, preference]);
  };
  const removePreference = (preference: Preference) => {
    const updated = selectedPreferences.filter((p) => p !== preference);
    setPreferences(updated.length > 0 ? updated : null); // if no preferences left, set to null
  };

  return (
    <div className="input-container">
      <label className="label">Preferences</label>

      <div className="preference-container">
        <div className="preference-picker selected-list">
          {selectedPreferences.map((preference) => (
            <button
              key={preference}
              type="button"
              className="preference-tag selected"
              onClick={() => removePreference(preference)}
            >
              {LABELS[preference]}
              <span className="icon"> x</span>
            </button>
          ))}
        </div>

        <div className="preference-picker available-list">
          {preferenceList.map((preference) => (
            <button
              key={preference}
              type="button"
              className="preference-tag available"
              onClick={() => addPreference(preference)}
            >
              {LABELS[preference]}
              <span className="icon"> +</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
