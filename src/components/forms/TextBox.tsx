import React from 'react';
import './TextBox.css';

const TextBox: React.FC = () => {
  return (
    <div className="box">
      <input
        type="address_number"
        placeholder="이름"
        required name="address_number"
        size={10}
        maxLength={10}
      />
    </div>
  );
}

export default TextBox;
