import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import maxim from '../Assets/image/maxim.png'
import tron1 from '../Assets/image/tron1.png'
import tron2 from '../Assets/image/tron2.png'
import tron3 from '../Assets/image/tron3.png'
import tron4 from '../Assets/image/tron4.png'
import h1 from '../Assets/image/h1.png'
import h2 from '../Assets/image/h2.png'
import h3 from '../Assets/image/h3.png'
import anh1 from '../Assets/image/anh1.png'
import banner from '../Assets/image/bannertrangchu.png';
import hinhtron from '../Assets/image/hinhtron.jpg'
import ProjectItem from '../components/ProjectItem';
import '../css/pages/Project.css';
import '../css/Newfeed.css'



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
  marginTop: 30,
  borderRadius: '20px', // Áp dụng bo góc 20px
  overflow: 'hidden', // Đảm bảo video không vượt ra khỏi khung bo
};

const contentContainerStyle = {
  position: 'relative',
  marginLeft: 323,
  textAlign: 'center',
  width: 840,
  marginTop: 30,
  marginBottom: 30,
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

const SupportProjectList = [
  {
    field: 'Y Tế ',
    title: 'Quyên góp cho người nghèo để hỗ trợ điều trị bệnh tật ',
    content:
      'Hiện nay có một số người dân trong làng vì không có điều kiện ...',
    percentContributed: '60%',
    moneyContributed: '12,000,000₫',
    aimContribute: '10,000,000₫',
  },
  {
    field: 'Nhà ở  ',
    title: 'Xây dựng Mái ấm',
    content:
      'Chương trình xây dựng nhà cho người có hoàn cảnh khó khăn không chỉ giúp họ....',
    percentContributed: '85%',
    moneyContributed: '8,500,000₫',
    aimContribute: '20.000.000₫',
  },
  {
    field: 'Giáo dục',
    title: 'Hỗ trợ giáo dục',
    content:
      'để giúp mọi người vượt qua các rào cản xã hội và tiến lên trong cuộc sống.',
    percentContributed: '90%',
    moneyContributed: '9.000.000₫ ',
    aimContribute: '10.000.000đ',
  },
  {
    field: 'Thực Phẩm ',
    title: 'Quyên góp thức ăn',
    content:
      'hàng ngàn trẻ em đang đối mặt với nghèo đói và thiếu thốn thức ăn. Mặc dù đã...',
    percentContributed: '75%',
    moneyContributed: '1,500,000₫',
    aimContribute: '20,000,000₫',
  },
];

const limitText = (text, char) => {
  let allText = text;
  const textLength = allText?.length;
  const startText = allText?.slice(0, char);
  textLength > char ? (allText = `${startText} ...`) : (allText = startText);
  return allText;
};

function About() {
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
   

      <div>
      <div style={{ margin : 20, }}>
        <p style={{ fontFamily :'Montserrat', fontSize : '18px', fontStyle :'normal' , fontWeight :'600' }}>Về</p>
        <label  style={{ fontSize : 39, fontFamily : 'Playfair Display', fontStyle : 'normal', fontWeight: '700'}}>Chúng tôi </label>

        <div style={{ width :'100%', display:'flex', flexDirection : 'row' ,marginTop : '20px' }}>
            <div style={{ width : '300px', height:'400px', backgroundColor : "#219D80" , marginRight : 20, marginLeft : '100px', boxShadow: "0px 10px 25px rgba(100, 42, 52, 0.17)"}}>
            <div>
  <div>
  <img src={h1} alt="tron1" className="h1" style={{ width: "30%", marginTop : '30px', marginLeft : '20px' }}></img>
  <div style={{ margin : 20,  }}>
      
        <p  style={{ fontSize : 30, fontFamily : 'Playfair Display', fontStyle : 'normal', fontWeight: '700', color :'white'}}>Giáo dục</p>
        <label style={{ fontFamily :'Montserrat', fontSize : '14px', fontStyle :'normal' , fontWeight :'600',color :'white' }}>Chúng tôi mong muốn tìm kiếm những bạn tình nguyện
viên nhiệt tình, năng động, có trách nhiệm sẵn sàng cống
hiến sức mình nhằm đem lại những giá trị thiết thực cho
xã hội.</label>
      </div>

  </div>
</div>
            </div>
            <div style={{ width : '300px', height:'450px', backgroundColor : "#EAEDF5" , marginRight : 20, boxShadow: "0px 10px 25px rgba(100, 42, 52, 0.17)"}}>
            <div>
  <img src={h2} alt="tron1" className="h1" style={{ width: "30%", marginTop : '30px', marginLeft : '20px' }}></img>
  <div style={{ margin : 20,  }}>
      
        <p  style={{ fontSize : 30, fontFamily : 'Playfair Display', fontStyle : 'normal', fontWeight: '700', color :'black'}}>Hỗ trợ Kinh tế</p>
        <label style={{ fontFamily :'Montserrat', fontSize : '14px', fontStyle :'normal' , fontWeight :'600',color :'black' }}>Chúng ta còn khá nhiều người thu nhập thấp, sống ở 
vùng xa xôi, không có bảo hiểm y tế. Khi bị bệnh không 
có tiền chạy chữa, thế là trốn viện về nhà, chữa thuốc 
Nam lấy có, và chịu đựng đau đớn.</label>
      </div>

  </div>
            </div>
            <div style={{ width : '300px', height:'500px', backgroundColor : "#EAEDF5" , marginRight : 20, boxShadow: "0px 10px 25px rgba(100, 42, 52, 0.17)"}}>
            <div>
  <img src={h3} alt="tron1" className="h1" style={{ width: "30%", marginTop : '30px', marginLeft : '20px' }}></img>
  <div style={{ margin : 20,  }}>
      
        <p  style={{ fontSize : 30, fontFamily : 'Playfair Display', fontStyle : 'normal', fontWeight: '700', color :'black'}}>Trợ giúp y tế</p>
        <label style={{ fontFamily :'Montserrat', fontSize : '14px', fontStyle :'normal' , fontWeight :'600',color :'black' }}>Nhiều người nhập cư sống tiết kiệm, ăn sáng trễ một
tí, buổi trưa nhiều khi nhịn ăn để chờ đến buổi chiều 
là có thể tiết kiệm một số tiền kha khá gởi về quê 
cho người thân…</label>
      </div>

  </div></div>  
        </div>
      </div>
        <div>
          <p className="seeMore">Xem thêm...</p>
        </div>


        <div style={{ display : 'flex', flexDirection : 'row' , height : '500px', }}>
            <div style={{ width : '50%', height : '100%', paddingLeft : 150 }}>
              <div style={{ width : '500px', height : '500px', backgroundColor : '#EAEDF5', borderRadius : 20, border: '2px solid #219D80' , }}>
                
              </div>
            </div>
           
            <div style={{ width : '50%', height : '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', height: '500px' }}>
  <div style={{ width: '50%', height: '100%',  position: 'relative', paddingTop : '20px', }}>
    <div style={{ width: '300px', height: '300px', backgroundColor: '#219D80', borderRadius: '150px', borderWidth: '10px', borderColor: '#219D80' }}>
      {/* Hình vuông màu xanh */}
      <img src={hinhtron} alt="hinhtron" className="hinhtron" style={{ width: '95%', height: '95%', backgroundColor: '#219D80', borderRadius: '150px', borderWidth: '10px', borderColor: '#219D80', margin : '8px' }}></img>
    </div>
    <div style={{ position: 'absolute', bottom: 0, left: 0 ,width: '280px', height: '280px', backgroundColor: 'white', borderRadius: '20px', marginLeft :150, border: '15px solid #1779C0', borderColor : '#1779C0' }}>
      {/* Hình vuông màu đen */}
    </div>
  </div>
 
</div>
</div>
</div>

{/* Khung thứ hai  */}

      
      <div style={{ display : 'flex', flexDirection : 'row' , height : '500px', marginTop : '100px' , paddingLeft : '160px' }}>
                       
            <div style={{ width : '50%', height : '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', height: '500px' }}>
  <div style={{ width: '50%', height: '100%',  position: 'relative', paddingTop : '20px', }}>
    <div style={{ width: '300px', height: '300px', backgroundColor: '#219D80', borderRadius: '150px', borderWidth: '10px', borderColor: '#219D80' }}>
      {/* Hình vuông màu xanh */}
      <img src={hinhtron} alt="hinhtron" className="hinhtron" style={{ width: '95%', height: '95%', backgroundColor: '#219D80', borderRadius: '150px', borderWidth: '10px', borderColor: '#219D80', margin : '8px' }}></img>
    </div>
    <div style={{ position: 'absolute', bottom: 0, left: 0 ,width: '280px', height: '280px', backgroundColor: 'white', borderRadius: '160px', marginLeft :150, border: '15px solid #1779C0', borderColor : '#1779C0' }}>
      {/* Hình vuông màu đen */}
    </div>
  </div>
  <div style={{ width : '50%', height : '100%', marginLeft : '240px' }}>
              <div style={{ width : '500px', height : '500px', backgroundColor : '#EAEDF5', borderRadius : 20, border: '2px solid #219D80' , }}>
                
              </div>
            </div>
 
</div>
</div>
</div>

      <div style={{ margin : 20,  }}>
        <label style={{ fontFamily :'Montserrat', fontSize : '18px', fontStyle :'normal' , fontWeight :'600' }}>Our Fun Facts</label>
        <p  style={{ fontSize : 39, fontFamily : 'Playfair Display', fontStyle : 'normal', fontWeight: '700'}}>Chúng tôi tin rằng có thể thực hiện sứ mệnh của tổ chức</p>
      </div>
      <div style={{ marginBottom :'100px'  }}>
        <div style={{ width :'100%', display :'flex', flexDirection :'row', }}>
          <div style={{ width :'250px', height :'250px' , backgroundColor :'#EAEDF5', borderRadius : 150, marginLeft : 100,marginRight : 100,  }}>
          <img src={tron1} alt="tron1" className="tron1" style={{ width: "100%" }}></img>
          </div>
          <div style={{ width :'250px', height :'250px' , backgroundColor :'#EAEDF5', borderRadius : 150, marginLeft : 100,marginRight : 100,  }}>
          <img src={tron2} alt="tron2" className="tron2" style={{ width: "100%" }}></img>
          </div>
        </div>
        <div style={{ width :'100%', display :'flex', flexDirection :'row', marginLeft : 300 }}>
          <div style={{ width :'250px', height :'250px' , backgroundColor :'#EAEDF5', borderRadius : 150, marginLeft : 100,marginRight : 100,  }}>
          <img src={tron3} alt="tron3" className="tron3" style={{ width: "100%" }}></img>
          </div>
          <div style={{ width :'250px', height :'250px' , backgroundColor :'#EAEDF5', borderRadius : 150, marginLeft : 100,marginRight : 100,  }}>
          <img src={tron4} alt="tron4" className="tron4" style={{ width: "100%" }}></img>
          </div>
        </div>
      </div>

      <div>
        
      <div style={{ marginLeft : 20,  }}>
        <p  style={{ fontSize : 39, fontFamily : 'Playfair Display', fontStyle : 'normal', fontWeight: '700'}}>Thư Viện ảnh </p>
      </div>
  <div style={{ width :'100%', display :'flex', flexDirection :'row', paddingRight : '100px' }}>
  <div style={{ width :'320px', height :'250px' ,   marginLeft : 100,marginRight : 10,  }}>
          <img src={anh1} alt="anh1" className="anh1" style={{ width: "100%" }}></img>
          </div>
          <div style={{ width :'320px', height :'250px' ,marginRight : 10,  }}>
          <img src={anh1} alt="anh1" className="anh1" style={{ width: "100%" }}></img>
          </div>
          <div style={{ width :'320px', height :'250px' ,marginRight : 10,  }}>
          <img src={anh1} alt="anh1" className="anh1" style={{ width: "100%" }}></img>
          </div>
  
  </div>
</div>
<div>
  
  <div style={{ width :'100%', display :'flex', flexDirection :'row', paddingRight : '200px' }}>
  <div style={{ width :'240px', height :'250px' ,   marginLeft : 100,marginRight : 10,  }}>
          <img src={anh1} alt="anh1" className="anh1" style={{ width: "100%" }}></img>
          </div>
          <div style={{ width :'240px', height :'250px' ,marginRight : 10,  }}>
          <img src={anh1} alt="anh1" className="anh1" style={{ width: "100%" }}></img>
          </div>
          <div style={{ width :'240px', height :'250px' ,marginRight : 10,  }}>
          <img src={anh1} alt="anh1" className="anh1" style={{ width: "100%" }}></img>
          </div>
          <div style={{ width :'240px', height :'250px' ,marginRight : 10,  }}>
          <img src={anh1} alt="anh1" className="anh1" style={{ width: "100%" }}></img>
          </div>
  
  </div>
</div>

      <div className='Maxim'>
        <table className="custom-tableMaxim">
  <tbody>
    <tr>
      <td rowspan="2">
        <img className="imageMaxim" src={maxim} alt="IconDown" />
      </td>
      
      <td >
       
        <p style={{textAlign : 'center',fontFamily:'Playfair Display', fontSize : '30px'}}> “ Khi bạn hỗ trợ một người khác, bạn không chỉ đang thay đổi cuộc sống của họ, 
        mà còn đang tạo ra một chuỗi tương lai tích cực. Từ thiện có tác động lan truyền, và những hành động nhỏ bé có thể mang lại những kết quả lớn lao trong tương lai. “</p></td>
        
    </tr>
    <tr>
     
   
    </tr>
  </tbody>
</table>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
