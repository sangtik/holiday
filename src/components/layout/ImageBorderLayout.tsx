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
      <div className="border-top">
        <div className="border-top-left" />
        <div className="border-top-center" />
        <div className="border-top-right" />
      </div>

      <div className="border-middle">
        <div className="border-middle-left" />
        <div className="border-middle-center">
          {children}
        </div>
        <div className={"border-middle-right"} />
      </div>

      <div className="border-bottom">
        <div className="border-bottom-left" />
        <div className="border-bottom-center" />
        <div className="border-bottom-right" />
      </div>
    </div>
  );
};

export default ImageBorderLayout;
