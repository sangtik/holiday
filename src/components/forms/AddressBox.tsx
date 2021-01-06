import React, { useState } from 'react';
import './AddressBox.css';
import { FaSearchLocation } from 'react-icons/fa';
import AddressModal from './AddressModal';

const AddressBox: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenAddressModal = () => {
    setModalVisible(true);
  }
  const handleCloseAddressModal = () => {
    setModalVisible(false);
  }
  return (
    <div className="address-container">
      <div className="address-top">
        <input
          className="address_number"
          type="text"
          placeholder="우편번호"
          required name=""
          size={6}
          maxLength={8}
        />
        <button onClick={handleOpenAddressModal}>
          <FaSearchLocation />
        </button>

        {modalVisible && (
          <div>
            <div className="Modal-overlay" onClick={handleCloseAddressModal}/>
            <div className="Modal">
              <AddressModal onClose={handleCloseAddressModal} />
            </div>
          </div>
        )}
      </div>
      <div className="address-bottom">
        <input
          className="address_name"
          type="text"
          placeholder="주소"
          required name=""
          maxLength={30}
        />
        <input
          className="address_detail"
          type="text"
          placeholder="상세주소"
          required name=""
          maxLength={30}
        />
      </div>
    </div>
  );
}

export default AddressBox;
