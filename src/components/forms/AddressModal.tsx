import React, { ReactDOM } from 'react';
import DaumPostcode from 'react-daum-postcode';

type AddressModalProps = {
  onClose: any;
}

const AddressModal = ({onClose}: AddressModalProps) => {

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  return (
    <div className="AddressModal">
      <div className="content">
        <DaumPostcode onComplete={handleComplete} />
      </div>
    </div>
  );
}
export default AddressModal;
