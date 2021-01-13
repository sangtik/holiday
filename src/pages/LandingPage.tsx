import React, { useState } from 'react';
import './LandingPage.css';
import ImageBorderLayout from '../components/layout/ImageBorderLayout'
import AddressBox from '../components/forms/AddressBox';
import TextBox from '../components/forms/TextBox';
import LabelBox from '../components/forms/LabelBox';
import axios from 'axios';
import RadioBox from '../components/forms/RadioBox';
import presentLabel from '../resources/images/presentLabel.png';

const LandingPage: React.FC = () => {
  // axios({d
  //   url: 'https://test/api/cafe/list/today',
  //   method: 'get',
  //   data: {
  //     foo: 'diary'
  //   }
  // });

  const [data, setData] = useState({
    name: '', // 이름
    mobile: '', // 고객 휴대폰 번호
    addressNumber: '', // 우편번호
    addressName: '', // 주소
    addressDetail: '', // 상세주소
    selectedPresent: '1', // 선물 선택 번호
  })

  const onUpdate = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    console.log(data);
    axios({
      url: 'http://211.223.105.162:62000/add/data',
      method: 'GET',
      data: {
        name: data.name,
        phoneNumber: data.mobile,
        address: data.addressNumber,
        address2: data.addressName,
        presentName: data.selectedPresent
      }
    });
  }

  return(
    <div className="container">
      <ImageBorderLayout>

        {/* Contents */}
        <div className="contents-header">
          {/*<img src={Acc} alt="" />*/}
          <h1>명절선물</h1>
          <h5>새해에는 행운과 평안이 가득하기를 기원합니다.</h5>
        </div>
        <div className="contents-body">
          <div className="contents-body_first">
            <LabelBox title="받으시는분">
              <TextBox
                name='name'
                value={data.name}
                onChange={onUpdate}
                placeholder='받으시는분'
              />
            </LabelBox>

            <LabelBox title='연  락  처'>
              <TextBox
                name='mobile'
                value={data.mobile}
                onChange={onUpdate}
                placeholder='연락처'
              />
            </LabelBox>

            <LabelBox title="주      소">
              <AddressBox
                name='addressNumber'
                name2='addressName'
                name3='addressDetail'
                addressNumber={data.addressNumber}
                addressName={data.addressName}
                addressDetail={data.addressDetail}
                onChange={onUpdate}
              />
            </LabelBox>

          </div>
          <div className="contents-body_second">
            <div>
              {/*<label> 받으실 선물 PICK </label>*/}
              <img
                src={presentLabel}
                alt=''
                className='present-label'/>
            </div>
            <div>
              <RadioBox
                name='selectedPresent'
                onChange={onUpdate}
              />
            </div>
          </div>
        </div>
        <div className="contents-footer">
          <button onClick={onSubmit}>입력완료</button>
        </div>
      </ImageBorderLayout>
    </div>
  );
}

export default LandingPage;



// const onSubmit = () => {
//   axios({
//     url: 'https://reqres.in/api/login',
//     method: 'POST',
//     data: {
//       "email": "eve.holt@reqres.in",
//       "password": "cityslicka"
//       // name: data.name,
//       // phoneNumber: data.mobile,
//       // address: data.addressNumber,
//       // address2: data.addressName,
//       // address3: data.addressDetail,
//       // presentName: data.selectedPresent
//     }
//   });
// }