import React, { ReactDOM } from 'react';
import DaumPostcode from 'react-daum-postcode';

type AddressModalProps = {
  onChange: any;
  onClose: any;
}

const AddressModal = ({
  onChange,
  onClose,

}: AddressModalProps) => {

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let zonecode = data.zonecode;
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
    console.log(zonecode);
    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  return (
    <div className="AddressModal">
      <DaumPostcode
        onComplete={handleComplete}
      />
    </div>
  );
}
export default AddressModal;
