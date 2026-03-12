import './ThankYouLayout.css';
import CustomButton from '../CustomButton';

type Props = {
  onHome: () => void;
};

export default function ManualPickerLayout({ onHome }: Props) {
  return (
    <div>
      <div className="title-thanks">
        <h1>Thank You for Dining With Seaside Grill & Chill!</h1>
      </div>

      <div className="button-cluster">
        <div className="button-top">
          <CustomButton label="Home" onClick={onHome} />
        </div>
      </div>
    </div>
  );
}
