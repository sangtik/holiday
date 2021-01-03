import React from 'react';
import './AddressBox.css';

const AddressBox: React.FC = () => {
  return (
    <div className="address-container">
      <div className="address-top">
        <input
          className="address_number"
          type="address_number"
          placeholder="우편번호"
          required name="address_number"
          size={10}
          maxLength={6}
        />
        <button>
          주소찾기
        </button>
      </div>
      <div className="address-bottom">
        <input
          className="address_name"
          type="address_name"
          placeholder="주소"
          required name="address_name"
          size={20}
          maxLength={30}
        />
        <input
          className="address_detail"
          type="address_detail"
          placeholder="상세주소"
          required name="address_detail"
          size={20}
          maxLength={30}
        />
      </div>
    </div>
  );
}

export default AddressBox;
