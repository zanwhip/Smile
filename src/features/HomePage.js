import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../Assets/image/bannertrangchu.png';
import hinhtron from '../Assets/image/hinhtron.jpg'
import ProjectItem from '../components/ProjectItem';
import '../css/pages/Project.css';



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

      <div>
        <p className="title">Các Dự Án Trợ Giúp</p>
        <div className="containerProgram">          
          <div className="program">
            {SupportProjectList?.map((item, index) => {
              return (
                <div className="item">
                  <ProjectItem
                    field={item.field}
                    title={limitText(item.title, 30)}
                    content={limitText(item.content, 50)}
                    percentContributed={item.percentContributed}
                    moneyContributed={item.moneyContributed}
                    aimContribute={item.aimContribute}
                  />
                </div>
              );
            })}
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

      <div>
        <p>AAAAAAAAAAAAAAAAAAAAAAA</p>
        <p>aaaaaaaaaaaaaaaaa</p>
        
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
