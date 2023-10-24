import React from 'react';
import Header from '../components/Header';
import banner from '../Assets/image/contactbanner.png';

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
  width : '7  0%',
  height : 300, 
  marginLeft : '20%',
  marginTop : 100
};

const formandbox = {
  
  width: '80%',
  height: 350,
  display: 'flex', // Sử dụng Flexbox
  flexDirection: 'row', // Hiển thị dạng hàng ngang
};

const form = {
  

  width : '70%',
 height : '100%',
 };
 
 const box = {
  
  width : '40%',
  
 };

function Contact() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div style={bannerStyle}>
        <Header />
        <img src={banner} alt="banner" className="banner" style={{ width: "100%" }}></img>
        <div style={textContainerStyle}>
        <p style={textStyle2}>Liên hệ với chúng tôi </p>
          <p style={textStyle1}>Trang chủ/Liên hệ với chúng tôi</p>
          
        
        </div>
      </div>

      <div style={formcontainer}>
      <p style={{   color: 'black',  fontSize: '12px',  fontWeight: 500, paddingTop : '10px' }}>Get in touch</p>
      {/* <line style={{ width : '50px', fontWeight : '15px' }}/> */}
      <p style={{   color: 'black',  fontSize: '40px',  fontWeight: 500, }}>Hãy gửi tin nhắn</p>
       
      <div style={formandbox}>
        <div style={form}> 
        <div style={{ display : 'flex', flexDirection : 'row' }}>
          <div>
          <p style={{fontSize : '14px', marginLeft : 10,  }}>Họ và tên</p>
          <input
          type="text"   
          style={{ height : '40px', width : '90%', borderRadius : 10,  marginLeft : 10, marginRight : 10, paddingLeft : 10, backgroundColor: '#EAEDF5',borderColor : '#D9D7D7',borderWidth : 1 }}     
          placeholder='Họ và tên'
        />
          </div>
          <div>
          <p style={{fontSize : '14px', marginLeft : 10,  }}>Đơn vị</p>
          <input
          type="text"
          style={{ height : '40px', width : '100%', borderRadius : 10,   marginLeft : 10, marginRight : 10,paddingLeft : 10, backgroundColor: '#EAEDF5',borderColor : '#D9D7D7',borderWidth : 1 }}   
          placeholder='Đơn vị'
        />
          </div>
         
        </div>
        <div style={{ display : 'flex', flexDirection : 'row' }}>
          <div>
          <p style={{fontSize : '14px', marginLeft : 10,  }}>Số điện thoại</p>
          <input
          type="text"   
          style={{ height : '40px', width : '90%', borderRadius : 10,  marginLeft : 10, marginRight : 10, paddingLeft : 10, backgroundColor: '#EAEDF5', borderColor : '#D9D7D7',borderWidth : 1 }}     
          placeholder='Số điện thoại'
        />
          </div>
          <div>
          <p style={{fontSize : '14px', marginLeft : 10,  }}>Email</p>
          <input
          type="text"
          style={{ height : '40px', width : '100%', borderRadius : 10,borderColor : '#D9D7D7', marginLeft : 10, marginRight : 10,paddingLeft : 10 , backgroundColor: '#EAEDF5', borderWidth : 1}}   
          placeholder='Email'
        />
          </div>
         
         
        </div>
        <div>
          <p style={{fontSize : '14px', marginLeft : 10,  }}>Tin nhắn</p>
          <textarea
  rows = {2}    // Specifies the number of visible text lines
  cols = {150}    // Specifies the width of the textarea in characters
  style={{ width : "390px", height : '100px', marginLeft : 10, borderRadius : 10, paddingLeft : 10,backgroundColor: '#EAEDF5', borderColor : '#D9D7D7', borderWidth : 1, paddingTop : 10 }}
  placeholder = "Nhập tin nhắn bạn muốn nhắn gửi"   // Specifies a short hint that describes the expected value of the textarea
  wrap = "soft"   // Specifies how the text in the textarea should be wrapped

  name = "tinnhan"   // Specifies the name of the textarea, which can be used when submitting a form
  
/>
          </div>
          <div>
            <button style={{ width : '70px',height: '30px', marginLeft : 10, backgroundColor : '#219D80', border: 0,   }}>Gửi</button>
          </div>
        </div >
        <div style={box}>
          <div style={{ width : '100%', height : '300px' , backgroundColor : '#EAEDF5', marginTop : 20 , borderRadius : "10px", padding : 10 }}>
           <p style={{ fontSize : '25px', fontWeight : 700,  }}>Liên lạc </p>
           <p style={{ fontSize : '15px', fontWeight : 300,  }}>Nếu có bất kì thắc mắc gì hãy cứ gửi tin nhắn hoặc gọi 
điện cho chúng tôi, đội ngũ làm việc hoạt động 24/7 sẽ
hỗ trợ tận tình.  </p>
          <p style={{ fontSize : '15px', fontWeight : 500,  }}>Địa chỉ : Thôn Pà-Ong, Xã Cà Dy, huyện Nam
Giang, tỉnh Quảng Nam</p>
          <p style={{ fontSize : '15px', fontWeight : 500,  }} >điện thoại  : +84123456789 </p>
          <p style={{ fontSize : '15px', fontWeight : 500,  }} >Email : givelifecharity@gmail.com</p>

          </div>

        </div>

      </div>

      </div>

    </div>
  );
}

export default Contact;
