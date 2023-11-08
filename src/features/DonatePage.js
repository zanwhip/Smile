import React from 'react';
import '../css/pages/Donate.css';
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
const DonatePage = () => {
  return (
    <div class="main-block">
      <div style={bannerStyle}>
        <Header />
        <img
          src={banner}
          alt="banner"
          className="banner"
          style={{ width: '100%' }}
        ></img>
        <div style={textContainerStyle}>
          <p style={textStyle1}>MANG HY VỌNG ĐẾN NHỮNG MẢNH ĐỜI KHÓ KHĂN</p>
          <p style={textStyle2}>Tay trong tay, cùng chia sẻ yêu thương</p>
          <p style={textStyle3}>
            Bằng việc nâng cao chất lượng cuộc sống của người khác chúng ta cũng
            đang nâng cao chất lượng cuộc sống của chúng ta
          </p>
          <button style={buttonStyle1}>Quyên góp</button>
          <button style={buttonStyle2}>Mua bán</button>
        </div>
      </div>
      <form action="/">
        <h1>Contact Us</h1>
        <div class="info">
          <input
            class="fname"
            type="text"
            name="name"
            placeholder="Full name"
          />
          <input type="text" name="name" placeholder="Email" />
          <input type="text" name="name" placeholder="Phone number" />
          <input type="text" name="name" placeholder="Website" />
        </div>
        <p>Message</p>
        <div>
          <textarea rows="4"></textarea>
        </div>
        <button type="submit" href="/">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonatePage;
