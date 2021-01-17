import React, { useState } from 'react';
import './TextBox.css';

export interface TextBoxProps {
  value?: string;
  placeholder?: any;
  name?:string;
  isTelnum?:boolean,
  maxLength?:number,
  onChange: (value: any) => any;
}

const TextBox: React.FC<TextBoxProps> = ({
value,
placeholder,
onChange,
isTelnum,
maxLength,
name,
}) => {
  const result = (value: string) => {
    const v = value.replace(/-/ig, '');

    switch (v.length) {
      case 7:
        return `${v.substr(0, 3)}-${v.substr(3, 4)}`;

      case 8:
        return `${v.substr(0, 4)}-${v.substr(4, 4)}`;

      case 9:
        return `${v.substr(0, 2)}-${v.substr(2, 3)}-${v.substr(5, 4)}`;

      case 10:
        if (v.startsWith('02')) {
          return `${v.substr(0, 2)}-${v.substr(2, 4)}-${v.substr(6, 4)}`;
        }
        return `${v.substr(0, 3)}-${v.substr(3, 3)}-${v.substr(6, 4)}`;

      case 11:
        return `${v.substr(0, 3)}-${v.substr(3, 4)}-${v.substr(7, 4)}`;

      case 12:
        return `${v.substr(0, 4)}-${v.substr(4, 4)}-${v.substr(8, 5)}`;

      default:
        return v;
    }
  }

  return (
    <div className="text-container">
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={isTelnum ? result(value || '') : value || ''}
        maxLength={isTelnum ? 12 : (maxLength || 10)}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

export default TextBox;
