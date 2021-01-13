import React from 'react';
import './TextBox.css';

export interface TextBoxProps {
  value?: string;
  placeholder?: any;
  name?:string;
  onChange: (value: any) => any;
}

const TextBox: React.FC<TextBoxProps> = ({
value,
placeholder,
onChange,
name,
}) => {

  return (
    <div className="text-container">
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value || ''}
        size={10}
        maxLength={10}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

export default TextBox;
