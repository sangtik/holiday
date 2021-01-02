import React from 'react';
import './ImageBorderLayout.css';

export interface ImageBorderLayoutProps {
  children?: any;
}

const ImageBorderLayout: React.FC<ImageBorderLayoutProps> = ({
    children
}) => {
  return (
    <div className="layout">
      <div className="border_top">
        <div className="border_top_left" />
        <div className="border_top_center" />
        <div className="border_top_right" />
      </div>

      <div className="border_middle">
        <div className="border_middle_left" />
        <div className="border_middle_center">
          {children}
        </div>
        <div className={"border_middle_right"} />
      </div>

      <div className="border_bottom">
        <div className="border_bottom_left" />
        <div className="border_bottom_center" />
        <div className="border_bottom_right" />
      </div>
    </div>
  );
};

export default ImageBorderLayout;
