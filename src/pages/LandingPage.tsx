import React from 'react';
import './LandingPage.css';
import ImageBorderLayout from '../components/layout/ImageBorderLayout'
import AddressBox from '../components/forms/AddressBox';
import TextBox from '../components/forms/TextBox';
import LabelBox from '../components/forms/LabelBox';
import axios from 'axios';

const LandingPage: React.FC = () => {
  // axios({
  //   url: 'https://test/api/cafe/list/today',
  //   method: 'get',
  //   data: {
  //     foo: 'diary'
  //   }
  // });
  return (
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
                  <TextBox placeholder="받으시는분" />
                </LabelBox>

                <LabelBox title="연  락  처">
                  <TextBox placeholder="연락처" />
                </LabelBox>

                <LabelBox title="주      소">
                  <AddressBox />
                </LabelBox>
              </div>
              <div className="contents-body_second">
                <div>
                  <label> 받으실 선물 PICK </label>
                </div>
                <div>
                  <input type='radio' />
                  <input type='radio' />
                  <input type='radio' />
                </div>
                <div>

                </div>
              </div>
            </div>
            <div className="contents-footer">
              <button>입력완료</button>
            </div>

          </ImageBorderLayout>
      </div>
  );
}

export default LandingPage;
