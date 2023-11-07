import React from 'react';
import banner from '../Assets/image/detailprojectbanner.png';
import heart from '../Assets/image/heart.png';
import comment from '../Assets/image/comment.png';
import share from '../Assets/image/share.png';
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
  width: '50%',
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
  width: 400,
  marginTop: 30,
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
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div style={bannerStyle}>
        <img
          src={banner}
          alt='banner'
          className='banner'
          style={{ width: '100%' }}
        ></img>
        <div style={textContainerStyle}>
          <p style={textStyle2}>Chi tiết dư án </p>
        </div>
      </div>

      <div style={formcontainer}>
        <label style={{ color: 'black', fontSize: '40px', fontWeight: 500 }}>
          DỰ ÁN PHÁT TRIỂN LÀNG PÀ-ONG
        </label>
        <img
          src={share}
          alt='share'
          className='share'
          style={{ width: 30, height: 30, marginLeft: 20 }}
        ></img>
        <p></p>

        <label
          style={{
            color: 'black',
            fontSize: '12px',
            fontWeight: 500,
            paddingTop: '10px',
          }}
        >
          Từ: 11-11-2021{' '}
        </label>
        <button
          style={{
            width: '150px',
            height: '40px',
            backgroundColor: '#219D80',
            borderRadius: 5,
            border: 0,
            margin: 10,
            fontWeight: 700,
            color: 'white',
            marginLeft: 520,
          }}
        >
          {' '}
          Đăng kí tham gia{' '}
        </button>

        <div style={formandbox}>
          <div style={form}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={videoContainerStyle}>
                {/* Nhúng video từ YouTube */}
                <iframe
                  width='900'
                  height='380'
                  src='https://www.youtube.com/embed/543jwFfCZvg?list=PLp6D8X7L5wgbTLG-OR0q8hJws4wD18e7o'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div style={box}>
            <p></p>
            <label>
              Dự án phát triển Làng Pà-Ong là dự án được ấp ủ trong một thời
              gian rất lâu. Khi thực hiện gặp rất nhiều khó khăn và thử thách.
              Nhưng với mong ước đem lại cuộc sống tốt hơn cho toàn dân ở làng
              Pà-Ong chính là sứ mệnh cực kì to lơn. Chính vì thế chung tôi đã
              cố gắng hết sức mang lại những cuộc đời tốt hơn cho người dân ở
              đâu
            </label>

            <div>
              <button
                style={{
                  width: '120px',
                  height: '35px',
                  backgroundColor: '#219D80',
                  borderRadius: 15,
                  border: 0,
                  margin: 10,
                  fontWeight: 700,
                  color: 'white',
                }}
              >
                Bài giới thiệu
              </button>
              <button
                style={{
                  width: '120px',
                  height: '35px',
                  backgroundColor: '#219D80',
                  borderRadius: 15,
                  border: 0,
                  margin: 10,
                  fontWeight: 700,
                  color: 'white',
                  marginLeft: 40,
                }}
              >
                Bảng kế hoạch
              </button>
            </div>
            <div>
              <img
                src={heart}
                alt='heart'
                className='heart'
                style={{ width: 30, height: 30, marginRight: 20 }}
              ></img>
              <img
                src={comment}
                alt='comment'
                className='comment'
                style={{ width: 30, height: 30, marginRight: 20 }}
              ></img>
              <img
                src={share}
                alt='share'
                className='share'
                style={{ width: 30, height: 30, marginRight: 20 }}
              ></img>
            </div>

            <div style={contentContainerStyle}>
              <div style={donateTextStyle}>
                <label>Quyên góp</label>
                <label>60%</label>
              </div>

              <div style={ratingContainerStyle}>
                <div style={ratingBarStyle}>
                  <div style={ratingProgressStyle}></div>
                </div>
                <button style={donateButtonStyle}>Đóng góp ngay</button>
              </div>
              <div style={additionalInfoStyle}>
                <label>Đã góp được: 6,000,000₫</label>
                <label>Mục tiêu: 10,000,000₫</label>
              </div>
            </div>
          </div>
        </div>
        <button
          style={{
            marginLeft: 600,
            marginTop: 20,
            width: 430,
            height: 50,
            marginBottom: 50,
            backgroundColor: '#34AED4',
            border: 0,
            borderRadius: 20,
            fontFamily: 'Montserrat',
            fontSize: 20,
          }}
        >
          Trở thành nhà tài trợ hoặc quyên góp
        </button>
      </div>
    </div>
  );
}

export default DetailProject;
