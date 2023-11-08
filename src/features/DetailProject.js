import React, { useState } from 'react';
import banner from '../Assets/image/detailprojectbanner.png';
import heart from '../Assets/image/heart.png';
import heartRed from '../Assets/image/heart_red.png';
import time from '../Assets/image/time.png';
import address from '../Assets/image/address.png';
import comment from '../Assets/image/comment.png';
import share from '../Assets/image/share.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
const bannerStyle = {
  position: 'relative',
  textAlign: 'center',
};

const textContainerStyle = {
  position: 'absolute',
  top: 150,
  left: '50%',
  width: 900,
  transform: 'translate(-50%, -50%)',
};

const textStyle1 = {
  color: 'white',
  fontSize: '12px',
  fontWeight: 400,
};
const textStyle2 = {
  color: 'white',
  fontSize: '50px',
  fontWeight: 600,
};

const formcontainer = {
  backgroundColor: 'white',
  width: '7  0%',
  height: 300,
  marginLeft: '10%',
  marginTop: 100,
};

const formandbox = {
  width: '90%',
  height: 350,
  display: 'flex', // Sử dụng Flexbox
  flexDirection: 'row', // Hiển thị dạng hàng ngang
};

const form = {
  width: '60%',
  height: '100%',
};

const box = {
  marginLeft: 10,
};
const videoContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px', // Áp dụng bo góc 20px
  overflow: 'hidden', // Đảm bảo video không vượt ra khỏi khung bo
};

const contentContainerStyle = {
  position: 'absolute',
  textAlign: 'center',
  width: 580,

  paddingLeft: 15,
  paddingRight: 15,
  backgroundColor: '#EAEDF5',
};

const donateTextStyle = {
  width: '75%',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
};

const ratingContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const ratingBarStyle = {
  width: '80%', // Điều chỉnh độ đánh giá theo nhu cầu
  height: '8px',
  backgroundColor: 'lightgray',
  position: 'relative',
};

const ratingProgressStyle = {
  width: '60%', // Điều chỉnh mức độ đánh giá
  height: '100%',
  backgroundColor: 'green',
};

const donateButtonStyle = {
  height: '40px',
  width: '100px',
  marginLeft: 20,
  border: 0,
  backgroundColor: '#219D80',
  color: '#FFFFFF',
};

const additionalInfoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '12px',
  width: '75%',
};

function DetailProject() {
  const [heartCount, setHeartCount] = useState(0);

  return (
    <div>
      <div style={bannerStyle}>
        <Header />
        <img
          src={banner}
          alt="banner"
          className="banner"
          style={{ width: '100%' }}
        ></img>

        <div style={textContainerStyle}>
          <p style={textStyle2}>Chi tiết dự án </p>
        </div>
      </div>

      <div style={formcontainer}>
        <label style={{ color: 'black', fontSize: '34px', fontWeight: 500 }}>
          DỰ ÁN PHÁT TRIỂN LÀNG PÀ-ONG
        </label>
        <img
          src={share}
          alt="share"
          className="share"
          style={{ width: 30, height: 30, marginLeft: 20 }}
        ></img>
        <br />

        <img
          src={time}
          alt="heart"
          className="heart"
          style={{ width: 30, height: 30, marginRight: 20 }}
        ></img>
        <label
          style={{
            fontStyle: 'italic',
            color: 'black',
            fontSize: '16px',
            fontWeight: 500,
            paddingTop: '10px',
          }}
        >
          Thời gian thực hiện: 01/11/2023 ~ 01/11/2025 (2 năm){' '}
        </label>
        <br />

        <img
          src={address}
          alt="heart"
          className="heart"
          style={{ width: 30, height: 30, marginRight: 20 }}
        ></img>
        <label
          style={{
            fontStyle: 'italic',
            color: 'black',
            fontSize: '16px',
            fontWeight: 500,
            paddingTop: '10px',
          }}
        >
          Địa điểm thực hiện: cụm dân cư Pà-Căng mới{' '}
        </label>
        <p></p>

        <div style={formandbox}>
          <div style={form}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={videoContainerStyle}>
                {/* Nhúng video từ YouTube */}
                <iframe
                  width="900"
                  height="380"
                  src="https://www.youtube.com/embed/jKwQ8ork7Bw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div style={contentContainerStyle}>
              <div style={donateTextStyle}>
                <label
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: 'Montserrat',
                  }}
                >
                  Quyên góp
                </label>
                <label
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: 'Montserrat',
                  }}
                >
                  60%
                </label>
              </div>

              <div style={ratingContainerStyle}>
                <div style={ratingBarStyle}>
                  <div style={ratingProgressStyle}></div>
                </div>
                <button style={donateButtonStyle}>Đóng góp ngay</button>
              </div>
              <div style={additionalInfoStyle}>
                <label
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: 'Montserrat',
                  }}
                >
                  Đã góp được: 6,000,000₫
                </label>
                <div>
                  <label
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      fontFamily: 'Montserrat',
                    }}
                  >
                    10,000,000₫
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div style={box}>
            <label style={{ lineHeight: 2.2 }}>
              Mỗi hộ có diện tích vườn trên 500m2. Có điện nước đầy đủ. Hơn nữa
              bà con có tập quán trồng trọt và chăn nuôi. Dự án nhằm xây dựng mô
              hình trồng trọt và chăn nuôi quy mô nhỏ trong cụm dân cư. Dự án sẽ
              đồng hành cùng bà con trong quá trình xây dựng, phát triển mô
              hình. Qua đó, chia sẻ kiến thức khoa họa và kỹ năng làm vườn, giúp
              bà con hiểu sâu sắc về làm kinh tế vườn và tự xây dựng được mô
              hình kinh tế vườn cho gia đình của mình. Kết quả là vườn nhà được
              sử dụng hiệu quả, mức sống được nâng cao. Hơn nữa, góp phần làm
              môi trường xanh sạch đẹp.
            </label>

            <div style={{ display: 'flex' }}>
              <button
                style={{
                  width: '170px',
                  height: '35px',
                  backgroundColor: 'white',
                  border: 0,
                  margin: 10,
                  fontWeight: 700,
                  color: 'black',
                }}
              >
                <p
                  style={{
                    fontFamily: ' Playfair Display',
                    fontSize: 18,
                    textDecoration: 'underline',
                  }}
                >
                  Danh sách tài trợ
                </p>
              </button>
              <button
                style={{
                  width: '100px',
                  height: '35px',
                  backgroundColor: 'white',
                  border: 0,
                  margin: 10,
                  fontWeight: 700,
                  color: 'black',
                  marginLeft: 40,
                }}
              >
                <p
                  style={{
                    fontFamily: ' Playfair Display',
                    fontSize: 18,
                    textDecoration: 'underline',
                  }}
                >
                  Kinh phí
                </p>
              </button>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={heartCount > 0 ? heartRed : heart}
                  alt="heart"
                  className="heart"
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    let count = heartCount;
                    setHeartCount(++count);
                  }}
                />
                <span style={{ fontSize: '19px' }}>{heartCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 300 }}>
        <Footer />
      </div>
    </div>
  );
}

export default DetailProject;
