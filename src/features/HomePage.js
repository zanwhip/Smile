import React from 'react';
import Header from '../components/Header';
import banner from '../Assets/image/bannertrangchu.png';

const bannerStyle = {
  position: 'relative',
  textAlign: 'center',
};

const textContainerStyle = {
  position: 'absolute',
  top: 300,
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
const textStyle3 = {
  color: 'white',
  fontSize: '20px',
  fontWeight: 500,
};
const buttonStyle1 = {
  marginTop: '20px',
  height: 40,
  width: 150,
  margin: 30,
  borderRadius: 20,
  border: 0,
  backgroundColor: '#219D80',
};
const buttonStyle2 = {
  marginTop: '20px',
  height: 40,
  width: 150,
  margin: 30,
  borderRadius: 20,
  border: 0,
  backgroundColor: '#7BA9B7',
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
  marginLeft: 180,
  textAlign: 'center',
  width: 840,
  marginTop: 30,
  paddingLeft: 15,
  paddingRight: 15,
  backgroundColor: '#EAEDF5',
};

const donateTextStyle = {
  width : "75%" , 
  fontSize: '16px',
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
  height: '10px',
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
  width: '150px',
  marginLeft: 70,
  border: 0,
  backgroundColor: '#219D80',
  color: "#FFFFFF",
};

const additionalInfoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '16px',
 width : '75%'
};

function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div style={bannerStyle}>
        <Header />
        <img src={banner} alt="banner" className="banner" style={{ width: "100%" }}></img>
        <div style={textContainerStyle}>
          <p style={textStyle1}>MANG HY VỌNG ĐẾN NHỮNG MẢNH ĐỜI KHÓ KHĂN</p>
          <p style={textStyle2}>Tay trong tay, cùng chia sẻ yêu thương</p>
          <p style={textStyle3}>Bằng việc nâng cao chất lượng cuộc sống của người khác
            chúng ta cũng đang nâng cao chất lượng cuộc sống của chúng ta</p>
          <button style={buttonStyle1}>Quyên góp</button>
          <button style={buttonStyle2}>Mua bán</button>
        </div>
      </div>

      <div style={videoContainerStyle}>
        {/* Nhúng video từ YouTube */}
        <iframe
          width="840"
          height="427"
          src="https://www.youtube.com/embed/543jwFfCZvg?list=PLp6D8X7L5wgbTLG-OR0q8hJws4wD18e7o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div style={contentContainerStyle}>
        <div style={donateTextStyle}>
          <p>Quyên góp</p>
          <p>60%</p>
        </div>

        <div style={ratingContainerStyle}>
          <div style={ratingBarStyle}>
            <div style={ratingProgressStyle}></div>
          </div>
          <button style={donateButtonStyle}>Đóng góp ngay</button>
        </div>
        <div style={additionalInfoStyle}>
          <p>Đã góp được: 6,000,000₫</p>
          <p>Mục tiêu: 10,000,000₫</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
