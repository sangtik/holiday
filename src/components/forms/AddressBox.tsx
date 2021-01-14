import React, { useEffect, useState } from 'react';
import './AddressBox.css';
import { FaSearchLocation } from 'react-icons/fa';
import AddressModal from './AddressModal';

export interface AddressBoxProps {
  addressNumber: string,
  addressName: string,
  addressDetail: string,
  name: string,
  name2: string,
  name3: string,
  onChange: any,
}

const AddressBox: React.FC<AddressBoxProps> = ({
addressNumber,
addressName,
addressDetail,
name,
name2,
name3,
onChange,
}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState({
    addressNumber: addressNumber,
    addressName: addressName,
    addressDetail: addressDetail,
  });

  useEffect(() => {
    if (address.addressNumber !== addressNumber
      || address.addressName !== addressName
      || address.addressDetail !== addressDetail)
      setAddress({
        addressNumber: addressNumber,
        addressName: addressName,
        addressDetail: addressDetail,
      })
  })

  const updateAddress = (value: { zoneCode: string, fullAddress: string }) => {
    addressNumber = value.zoneCode;
    addressName = value.fullAddress;
    addressDetail = '';
    handleCloseAddressModal();
  }

  const handleOpenAddressModal = () => {
    setModalVisible(true);
  }
  const handleCloseAddressModal = () => {
    setModalVisible(false);
  }

  return (
    <div className="address-container">
      <div>
        <input
          name={name}
          type="text"
          placeholder="우편번호"
          size={6}
          maxLength={8}
          value={addressNumber}
          onChange={(e) => onChange(e)}
        />
        <button onClick={handleOpenAddressModal}>
          <FaSearchLocation />
        </button>

        {modalVisible && (
          <div>
            <div className="Modal-overlay" onClick={handleCloseAddressModal}/>
            <div className="Modal">
              <AddressModal
                onChange={updateAddress}
                onClose={handleCloseAddressModal} />
            </div>
          </div>
        )}
      </div>
      <div className="address-bottom">
        <input
          name={name2}
          type="text"
          placeholder="주소"
          maxLength={30}
          value={addressName}
          onChange={(e) => onChange(e)}
        />
        <input
          name={name3}
          type="text"
          placeholder="상세주소"
          maxLength={30}
          value={address.addressDetail}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
}

export default AddressBox;
