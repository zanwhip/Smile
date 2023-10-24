import React from 'react';
import banner from '../Assets/image/bannertrangchu.png';
import founder from '../Assets/image/founder.png';
import dornor1 from '../Assets/image/donor1.png';
import dornor2 from '../Assets/image/donor2.png';
import dornor3 from '../Assets/image/donor3.png';
import dornor4 from '../Assets/image/donor4.png';
import member1 from '../Assets/image/member1.png';
import member2 from '../Assets/image/member2.png';
import member3 from '../Assets/image/member3.png';
import member4 from '../Assets/image/member4.png';
import member5 from '../Assets/image/member5.png';
import member6 from '../Assets/image/member6.png';
import '../css/pages/Member.css';
const MemberPage = () => {
  const founderList = [
    {
      imgAvt: founder,
      alt: 'founder',
      name: 'TS. Đinh Thị Đông Phương',
      infor: 'Công ty TNHH từ thiện Smile Eye Charity',
    },
  ];
  const dornorList = [
    {
      imgAvt: dornor1,
      alt: 'dornor1',
      name: 'Phạm Thanh Hưng',
      infor: 'Trường Đại học và Công nghệ Thông tin và Truyền thông Việt - Hàn',
    },
    {
      imgAvt: dornor2,
      alt: 'dornor2',
      name: 'Lê Hùng Anh',
      infor: 'Trường Đại học và Công nghệ Thông tin và Truyền thông Việt - Hàn',
    },
    {
      imgAvt: dornor3,
      alt: 'dornor3',
      name: 'Bùi Quang Minh',
      infor: 'Trường Đại học và Công nghệ Thông tin và Truyền thông Việt - Hàn',
    },
    {
      imgAvt: dornor4,
      alt: 'dornor4',
      name: 'Phạm Nhật Vượng',
      infor: 'Chủ Tịch Hội Đồng Quản Trị Tập Đoàn Vingroup ',
    },
  ];

  const memberList = [
    {
      imgAvt: member1,
      alt: 'member1',
      name: 'Bùi Thị Phương Hà',
      infor: 'Trường Đại học và Công nghệ Thông tin và Truyền thông Việt - Hàn',
    },
    {
      imgAvt: member2,
      alt: 'member2',
      name: 'Phạm Văn Nam',
      infor: 'Trường Đại học và Công nghệ Thông tin và Truyền thông Việt - Hàn',
    },
    {
      imgAvt: member3,
      alt: 'member3',
      name: 'Lê Văn Hải',
      infor: 'Trường Đại học và Công nghệ Thông tin và Truyền thông Việt - Hàn',
    },
    {
      imgAvt: member4,
      alt: 'member4',
      name: 'Lê Khánh Đạt',
      infor: 'Trường Đại học và Công nghệ Thông tin và Truyền thông Việt - Hàn',
    },
    {
      imgAvt: member5,
      alt: 'member4',
      name: 'Nguyễn Văn Hùng',
      infor: 'Trường Đại học và Công nghệ Thông tin và Truyền thông Việt - Hàn',
    },
    {
      imgAvt: member6,
      alt: 'member4',
      name: 'Trương Thị Hương Giang',
      infor: 'Trường Đại học và Công nghệ Thông tin và Truyền thông Việt - Hàn',
    },
  ];

  return (
    <div>
      <img
        src={banner}
        alt='banner'
        className='banner'
        style={{ width: '100%' }}
      />
      <div className='container'>
        <div>
          <h1 className='title'>Nhà sáng lập</h1>
          <div className='containerAllInfor'>
            {founderList.map((item, index) => {
              return (
                <div className='containerInforFounder'>
                  <img
                    src={item.imgAvt}
                    alt={item.alt}
                    className='imgFounder'
                  />
                  <div className='textInfor'>
                    <p className='nameFounder'>{item.name}</p>
                    <p className='inforFounder'>{item.infor}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <h1 className='title'>Nhà tài trợ</h1>
          <div className='containerAllInfor'>
            {dornorList.map((item, index) => {
              return (
                <div className='containerInfor'>
                  <img src={item.imgAvt} alt={item.alt} className='imgAvatar' />
                  <div className='textInfor'>
                    <p className='name'>{item.name}</p>
                    <p className='infor'>{item.infor}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <h1 className='title'>Nhà tài trợ</h1>
          <div className='containerAllInfor'>
            {memberList.map((item, index) => {
              return (
                <div className='containerInfor'>
                  <img src={item.imgAvt} alt={item.alt} className='imgAvatar' />
                  <div className='textInfor'>
                    <p className='name'>{item.name}</p>
                    <p className='infor'>{item.infor}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
