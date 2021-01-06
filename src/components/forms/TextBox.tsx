import React from 'react';
import './TextBox.css';

export interface TextBoxProps {
  placeholder?: any;
}

const TextBox: React.FC<TextBoxProps> = ({
  placeholder,
}) => {
  return (
    <div className="text-container">
      <input
        type="text"
        placeholder={placeholder}
        required name=""
        size={10}
        maxLength={10}
      />
    </div>
  );
}

export default TextBox;
