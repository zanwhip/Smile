import React from 'react';
import banner from '../Assets/image/bannertrangchu.png';
import '../css/pages/Member_detail.css';
import { Box } from '@mui/material';
import member2 from '../Assets/image/member2.png';
import QR from '../Assets/image/QR.png';

const DetailMemberPage = () => {
  return (
    <div>
      <div>
        <img
          src={banner}
          alt='banner'
          className='banner'
          style={{ width: '100%' }}
        ></img>
      </div>
      <div className='container'>
        <Box className='Box'>
          <div className='containerDetail'>
            <div className='containerIntro'>
              <img src={member2} alt='member2' className='avtMember' />
              <div className='introNoAvt'>
                <div className='intro'>
                  <span className='name'>Phạm Văn Nam</span>
                  <span className='role'>Tình nguyện viên</span>
                  <span>
                    Trường Đại Học Công nghệ Thông tin và Truyền Thông Việt Hàn
                  </span>
                </div>
                <img src={QR} alt='QR' className='avtMember' />
              </div>
            </div>
            <div className='containerContent'>
              <div>
                <div>
                  <span>Các dự án tham dự</span>
                  <Box className='BoxProject'>
                    <Box className='boxNameProject'>
                      <span className='nameProject'>hi</span>
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default DetailMemberPage;
