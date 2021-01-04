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
      <div className="title-box">{title}</div>
      <div className="contents-box">{children}</div>
    </div>
  );
}

export default LabelBox;
