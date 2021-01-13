import React from 'react';
import './RadioBox.css';
import present1 from '../../resources/images/present1.png'
import present2 from '../../resources/images/present2.png'
import present3 from '../../resources/images/present3.png'


export interface RadioBoxProps {
  name: string;
  onChange: (value: any) => any;
}

const RadioBox: React.FC<RadioBoxProps> = ({
  onChange,
  name,
}) => {
  return (
    <div className="radio-container">
      <label className="radio-container">
      <input
        className="radio-hidden"
        type='radio'
        name={name}
        value='1'
        onChange={(e) => onChange(e)}
      />
      <img
        src={present1}
        className="radio-image"
        alt=''
      />
      </label>

      <label className="radio-container">
        <input
          className="radio-hidden"
          type='radio'
          name={name}
          value='2'
          onChange={(e) => onChange(e)}
        />
        <img
          src={present2}
          className="radio-image"
          alt=''
        />
      </label>

      <label className="radio-container">
        <input
          className="radio-hidden"
          type='radio'
          name={name}
          value='3'
          onChange={(e) => onChange(e)}
        />
        <img
          src={present3}
          className="radio-image"
          alt=''
        />
      </label>
    </div>
  );
}

export default RadioBox;
