import React from 'react';
import './LabelBox.css';

export interface AddressBoxProps {
  children?: any;
  title: string;
}

const LabelBox: React.FC<AddressBoxProps> = ({
  title,
  children
}) => {
  return (
    <div className="label-container">
      <div><label>{title}</label></div>
      <div>{children}</div>
    </div>
  );
}

export default LabelBox;
