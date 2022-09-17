import  { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode'

export default function SearchPostcode() {
  const open = useDaumPostcodePopup();
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setIsComplete(true);
    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return {
    isComplete,
    address,
    handleClick,
  }
};