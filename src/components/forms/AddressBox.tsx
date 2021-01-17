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

  console.log('construct');
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState({
    addressNumber: addressNumber,
    addressName: addressName,
    addressDetail: addressDetail,
  });
  console.log(address);
  //
  // useEffect(() => {
  //   if (address.addressNumber !== addressNumber
  //     || address.addressName !== addressName
  //     || address.addressDetail !== addressDetail)
  //     setAddress({
  //       addressNumber: addressNumber,
  //       addressName: addressName,
  //       addressDetail: addressDetail,
  //     })
  // })


  const handleAddressChange = (e:any) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    })

    console.log(address);
    onChange(address);
  }

  const onUpdateAddress = (value: { zoneCode: string, fullAddress: string }) => {

    console.log('updateAddress');
    setAddress({
      addressNumber: value.zoneCode,
      addressName: value.fullAddress,
      addressDetail: '',
    })
    onChange(address);

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
          maxLength={6}
          value={address.addressNumber}
          onChange={(e) => handleAddressChange(e)}
        />
        <button onClick={handleOpenAddressModal}>
          <FaSearchLocation />
        </button>

        {modalVisible && (
          <div>
            <div className="Modal-overlay" onClick={handleCloseAddressModal}/>
            <div className="Modal">
              <AddressModal
                onChange={onUpdateAddress}
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
          value={address.addressName}
          onChange={(e) => handleAddressChange(e)}
        />
        <input
          name={name3}
          type="text"
          placeholder="상세주소"
          maxLength={30}
          value={address.addressDetail}
          onChange={(e) => handleAddressChange(e)}
        />
      </div>
    </div>
  );
}

export default AddressBox;
