import React from 'react';
import './LandingPage.css';
import ImageBorderLayout from '../components/layout/ImageBorderLayout'

const LandingPage: React.FC = () => {
  return (
      <div className="container">
          <ImageBorderLayout>

            {/* Contents */}
            <div className="contents_header">
              {/*<img src={Acc} alt="" />*/}
              <h1>명절선물</h1>
              <h5>새해에는 행운과 평안이 가득하기를 기원합니다.</h5>
              {/*<h1>명절선물</h1>*/}
              {/*<h5>새해에는 행운과 평안이 가득하기를 기원합니다.</h5>*/}
            </div>
            <div className="contents_body">
              <div className="contents_body_first">
                <div>
                  <label> 받으시는분 </label>
                  <input type="text" placeholder="이름" required name="name" />
                </div>
                <div>
                  <label> 연락처 </label>
                  <input type="email" placeholder="연락처" required name="email" />
                </div>
                <div>
                  <label> 주소 </label>
                  <input type="address_number" placeholder="우편번호" required name="address_number" />
                  <input type="address_name" placeholder="주소" required name="address_name" />
                  <input type="address_detail" placeholder="상세주소" required name="address_detail" />
                  <button>주소찾기</button>
                </div>
              </div>
              <div className="contents_body_second">
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
            <div className="contents_footer">
              <button>선택완료</button>
            </div>

          </ImageBorderLayout>
      </div>
  );
}

export default LandingPage;
