import React from 'react';
import banner from '../Assets/image/bannertrangchu.png';
import '../css/pages/Member_detail.css';
import { Box } from '@mui/material';
import member2 from '../Assets/image/member2.png';
import QR from '../Assets/image/QR.png';

const DetailMemberPage = () => {
  const listProgram = [
    {
      name: 'Tủ sách: " Bồ Câu Trắng "',
      contribute: '2.000.000 đ',
    },
    {
      name: 'Xe đạp cho em',
      contribute: '2.000.000 đ',
    },
    {
      name: 'Quyên góp cho em',
      contribute: '20.000.000 đ',
    },
  ];
  const infor = [
    {
      field: 'Họ và tên',
      content: 'Phạm Văn Nam',
      organization: 'Trường ĐH Công nghệ thông tin và truyền thông Việt Hàn',
    },
    {
      field: 'Đơn vị',
      content: 'Trường ĐH Công nghệ thông tin và truyền thông Việt Hàn',
    },
    {
      field: 'Ngày sinh',
      content: '04/01/2003',
    },
    {
      field: 'SĐT',
      content: '0327051047',
    },
    {
      field: 'Email',
      content: 'nampv.21it@vku.udn.vn',
    },
    {
      field: 'Địa chỉ',
      content: '470 Trần Đại Nghĩa',
    },
    {
      field: 'Trình độ',
      content: '12/12',
    },
    {
      field: 'Vai trò',
      content: 'Tình nguyện viên',
    },
  ];
  return (
    <div>
      <div>
        
        <img
          src={banner}
          alt="banner"
          className="banner"
          style={{ width: '100%', height :'50%' }}
        ></img>
      </div>
      <div className="container">
        <Box className="Box">
          <div className="containerDetail">
            <div className="containerIntro">
              <img src={member2} alt="member2" className="avtMember" />
              <div className="introNoAvt">
                <div className="intro">
                  <span className="name">Phạm Văn Nam</span>
                  <span className="role">Tình nguyện viên</span>
                  <span>
                    Trường Đại Học Công nghệ Thông tin và Truyền Thông Việt Hàn
                  </span>
                </div>
                <img src={QR} alt="QR" className="avtMember" />
              </div>
            </div>
            <div className="containerContent">
              <div className="containerProject">
                <div>
                  <span className="projectJoin">Các dự án tham dự</span>
                  <Box className="BoxProject">
                    {listProgram.map((item, index) => {
                      return (
                        <Box className="boxNameProject">
                          <span className="nameProject">{item.name}</span>
                        </Box>
                      );
                    })}
                  </Box>
                </div>
                <div className="containerContribute">
                  <span className="projectJoin">Đã quyên góp</span>
                  {listProgram.map((item, index) => {
                    return (
                      <Box className="BoxContribute">
                        <span className="contribute">
                          Dự án {item.name} : {item.contribute}
                        </span>
                      </Box>
                    );
                  })}
                </div>
              </div>
              <div className="containerInformation">
                <span className="projectJoin">Thông tin</span>
                <Box className="BoxInforContainer">
                  {infor.map((item, index) => {
                    return (
                      <div className="line">
                        <div className="lineContainer">
                          <span className="inforField">{item.field}</span>
                          <Box className="BoxInfor">
                            <p className="inforText">{item.content}</p>
                          </Box>
                        </div>
                      </div>
                    );
                  })}
                </Box>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default DetailMemberPage;