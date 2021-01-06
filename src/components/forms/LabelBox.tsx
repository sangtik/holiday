import React from 'react';
import './LabelBox.css';

export interface LabelBoxProps {
  children?: any;
  title: string;
}

const LabelBox: React.FC<LabelBoxProps> = ({
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
