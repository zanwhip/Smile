import React, { useState } from 'react';
import '../css/Newfeed.css';
import bannerNewfeed from '../Assets/image/bannerNewfeed.png';
import elip from '../Assets/image/avatarCircle.png';
import nf1 from '../Assets/image/newfeed1.png';
import avatar from '../Assets/image/avatar.png';
import calendar from '../Assets/image/calendar.png';
import clock from '../Assets/image/clock.png';
import groupIcon from '../Assets/image/GroupIcon.png';
import ellipse1 from '../Assets/image/ellipse1.png';
import ellipse2 from '../Assets/image/ellipse2.png';
import ellipse3 from '../Assets/image/ellipse3.png';
import image1 from '../Assets/image/image1.png';
import image2 from '../Assets/image/image2.png';
import image3 from '../Assets/image/image3.png';
import num1 from '../Assets/image/num1.png';
import num2 from '../Assets/image/num2.png';
import num3 from '../Assets/image/num3.png';
import num from '../Assets/image/num.png';
import arrow from '../Assets/image/arrow.png';
import maxim from '../Assets/image/maxim.png';
import Footer from '../components/Footer';

const Newfeedpage = () => {
  return (
    <>
      <div>
        <img
          src={bannerNewfeed}
          alt='banner'
          className='banner'
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ margin: 100 }}>
        <div className='News' style={{ marginBottom: 50 }}>
          BẢN TIN
        </div>
        <div className='ContainerBoth' style={{ display: 'flex' }}>
          <div className='newfeed' style={{ marginRight: 20 }}>
            <div style={{ marginBottom: 70 }}>
              <div className='table-container'>
                <div className='column'>
                  <div>
                    <img className='image_1' src={elip} alt='Logo' />
                  </div>
                </div>
                <div className='column'>
                  <div className='text-box'></div>
                  <div className='buttons'>
                    <button className='button'> Ảnh video</button>
                    <button className='button'>Cảm xúc</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='Container'>
              <table className='custom-table'>
                <tbody>
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                img
                                className='image'
                                src={nf1}
                                alt='Newfeed1'
                                style={{ width: '100%', height: '100%' }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                                textAlign: 'left',
                              }}
                            >
                              Ford Việt Nam hỗ trợ gần 500 triệu đồng ủng hộ
                              người dân miền Trung tái ổn định cuộc sống sau
                              thiên tai
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                              }}
                            >
                              <div
                                style={{ marginRight: 100, display: 'flex' }}
                              >
                                <img
                                  src={avatar}
                                  className='avatar'
                                  style={{ marginRight: 10, height: 25 }}
                                />
                                <div style={{ marginTop: 3 }}>Nguyen Van A</div>
                              </div>

                              <div
                                style={{ marginRight: 100, display: 'flex' }}
                              >
                                <img
                                  src={calendar}
                                  className='avatar'
                                  style={{ marginRight: 10, height: 25 }}
                                />
                                <div style={{ marginTop: 3 }}>12 Sep 2021</div>
                              </div>

                              <div
                                style={{ marginRight: 100, display: 'flex' }}
                              >
                                <img
                                  src={clock}
                                  className='avatar'
                                  style={{ marginRight: 10, height: 25 }}
                                />
                                <div style={{ marginTop: 3 }}>10 Min Read</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: 'justify' }}>
                              Ngày 4/11/2020, hưởng ứng lời kêu gọi của Chính
                              phủ và Ủy ban Trung ương Mặt trận tổ quốc Việt Nam
                              (MTTQ), Ford Việt Nam đã chung tay cùng CLB Bán
                              tải Việt Nam (PVC), Trung tâm Sống và Học tập vì
                              Môi trường và Cộng đồng (Live & Learn Vietnam),
                              thông qua nhóm từ thiện Chân Trần hỗ trợ hơn 640
                              gói nhu yếu phẩm cho các hộ dân và đồ dùng học tập
                              cho 815 trẻ nhỏ ở hai xã Avao huyện Dakrong và
                              Hướng Việt huyện Hướng Hóa, tỉnh Quảng Trị. Cụ
                              thể, Ford Việt Nam sẽ trao tặng khoảng 640 suất đồ
                              dùng thiết yếu cho các gia đình tại xã Avao huyện
                              Dakrong và Hướng Việt, huyện Hướng Hóa. Hai xã này
                              bị cô lập suốt cả tháng 10 và vừa thoát ngập đầu
                              tuần vừa rồi, hiện bùn đất vẫn ngập ngang gối và
                              chỉ có một con đường có thể tiếp cận xã vòng qua
                              Quảng Bình
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                className='ContainerIcon'
                                style={{
                                  display: 'flex',
                                  height: 40,
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                }}
                              >
                                <img
                                  src={groupIcon}
                                  style={{ height: 30, marginLeft: 20 }}
                                />
                                <div
                                  style={{ display: 'flex', marginRight: 10 }}
                                >
                                  <img src={ellipse1} style={{ height: 30 }} />
                                  <img src={ellipse2} style={{ height: 30 }} />
                                  <img src={ellipse3} style={{ height: 30 }} />
                                  <div style={{ marginTop: 3 }}>
                                    Nguyễn Văn Hùng, Phạm Văn Nam và 30 người
                                    khác
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='Container' style={{ marginTop: 70 }}>
              <table className='custom-table'>
                <tbody>
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                img
                                className='image'
                                src={nf1}
                                alt='Newfeed1'
                                style={{ width: '100%', height: '100%' }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                                textAlign: 'left',
                              }}
                            >
                              Ford Việt Nam hỗ trợ gần 500 triệu đồng ủng hộ
                              người dân miền Trung tái ổn định cuộc sống sau
                              thiên tai
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                              }}
                            >
                              <div
                                style={{ marginRight: 100, display: 'flex' }}
                              >
                                <img
                                  src={avatar}
                                  className='avatar'
                                  style={{ marginRight: 10, height: 25 }}
                                />
                                <div style={{ marginTop: 3 }}>Nguyen Van A</div>
                              </div>

                              <div
                                style={{ marginRight: 100, display: 'flex' }}
                              >
                                <img
                                  src={calendar}
                                  className='avatar'
                                  style={{ marginRight: 10, height: 25 }}
                                />
                                <div style={{ marginTop: 3 }}>12 Sep 2021</div>
                              </div>

                              <div
                                style={{ marginRight: 100, display: 'flex' }}
                              >
                                <img
                                  src={clock}
                                  className='avatar'
                                  style={{ marginRight: 10, height: 25 }}
                                />
                                <div style={{ marginTop: 3 }}>10 Min Read</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: 'justify' }}>
                              Ngày 4/11/2020, hưởng ứng lời kêu gọi của Chính
                              phủ và Ủy ban Trung ương Mặt trận tổ quốc Việt Nam
                              (MTTQ), Ford Việt Nam đã chung tay cùng CLB Bán
                              tải Việt Nam (PVC), Trung tâm Sống và Học tập vì
                              Môi trường và Cộng đồng (Live & Learn Vietnam),
                              thông qua nhóm từ thiện Chân Trần hỗ trợ hơn 640
                              gói nhu yếu phẩm cho các hộ dân và đồ dùng học tập
                              cho 815 trẻ nhỏ ở hai xã Avao huyện Dakrong và
                              Hướng Việt huyện Hướng Hóa, tỉnh Quảng Trị. Cụ
                              thể, Ford Việt Nam sẽ trao tặng khoảng 640 suất đồ
                              dùng thiết yếu cho các gia đình tại xã Avao huyện
                              Dakrong và Hướng Việt, huyện Hướng Hóa. Hai xã này
                              bị cô lập suốt cả tháng 10 và vừa thoát ngập đầu
                              tuần vừa rồi, hiện bùn đất vẫn ngập ngang gối và
                              chỉ có một con đường có thể tiếp cận xã vòng qua
                              Quảng Bình
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                className='ContainerIcon'
                                style={{
                                  display: 'flex',
                                  height: 40,
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                }}
                              >
                                <img
                                  src={groupIcon}
                                  style={{ height: 30, marginLeft: 20 }}
                                />
                                <div
                                  style={{ display: 'flex', marginRight: 10 }}
                                >
                                  <img src={ellipse1} style={{ height: 30 }} />
                                  <img src={ellipse2} style={{ height: 30 }} />
                                  <img src={ellipse3} style={{ height: 30 }} />
                                  <div style={{ marginTop: 3 }}>
                                    Nguyễn Văn Hùng, Phạm Văn Nam và 30 người
                                    khác
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              style={{
                marginTop: 30,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={num1}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              <img
                src={num2}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              <img
                src={num3}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              <img
                src={num}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              <img
                src={arrow}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
            </div>
          </div>
          <div className='LatestNews'>
            <div className='Category'>
              <div style={{ marginLeft: 15, marginRight: 15 }}>
                <div className='font_category'>Phân Loại</div>
                <div
                  style={{
                    width: 50,
                    border: '1px #219D80 solid',
                    marginTop: 1,
                  }}
                />
                <div
                  style={{
                    width: 200,
                    border: '1px #E3E3E3 solid',
                    marginTop: 30,
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}
                >
                  <div>Giáo Dục</div>
                  <div>(10)</div>
                </div>

                <div
                  style={{
                    width: 200,
                    border: '1px #E3E3E3 solid',
                    marginTop: 10,
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}
                >
                  <div>Kinh Tế</div>
                  <div>(6)</div>
                </div>

                <div
                  style={{
                    width: 200,
                    border: '1px #E3E3E3 solid',
                    marginTop: 10,
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}
                >
                  <div>Lương Thực</div>
                  <div>(3)</div>
                </div>

                <div
                  style={{
                    width: 200,
                    border: '1px #E3E3E3 solid',
                    marginTop: 10,
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}
                >
                  <div>Nông Nghiệp</div>
                  <div>(8)</div>
                </div>

                <div
                  style={{
                    width: 200,
                    border: '1px #E3E3E3 solid',
                    marginTop: 10,
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}
                >
                  <div>Pháp Luật - Đời Sống</div>
                  <div>(1)</div>
                </div>
              </div>
            </div>

            <div className='Category' style={{ marginTop: 50, height: 330 }}>
              <div style={{ marginLeft: 15, marginRight: 15 }}>
                <div className='font_category'>Bài Viết Gần Đây</div>
                <div
                  style={{
                    width: 50,
                    border: '1px #219D80 solid',
                    marginTop: 1,
                  }}
                />
                <div style={{ marginTop: 20, display: 'flex' }}>
                  <img src={image1} style={{ width: 90, height: 70 }} />
                  <div style={{ marginLeft: 7 }}>
                    <div className='Title'>
                      Xóa Mù Chữ Cho Các Em Nhỏ Vùng Cao
                    </div>
                    <div className='detail'>Giáo Dục</div>
                  </div>
                </div>

                <div style={{ marginTop: 20, display: 'flex' }}>
                  <img src={image2} style={{ width: 90, height: 70 }} />
                  <div style={{ marginLeft: 7 }}>
                    <div className='Title'>Vì sức khoẻ người dân miền cao</div>
                    <div className='detail'>Y Tế</div>
                  </div>
                </div>

                <div style={{ marginTop: 20, display: 'flex' }}>
                  <img src={image3} style={{ width: 90, height: 70 }} />
                  <div style={{ marginLeft: 7 }}>
                    <div className='Title'>Quyên góp lương thực</div>
                    <div className='detail'>Thức Ăn</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='Category' style={{ marginTop: 50, height: 150 }}>
              <div style={{ marginLeft: 15, marginRight: 15 }}>
                <div className='font_category'>Từ Khóa Phổ Biến</div>
                <div
                  style={{
                    width: 50,
                    border: '1px #219D80 solid',
                    marginTop: 1,
                    marginBottom: 20,
                  }}
                />

                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      width: 50,
                      height: 20,
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 6,
                      paddingBottom: 6,
                      background: '#219D80',
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 10,
                      display: 'inline-flex',
                      marginRight: 10,
                    }}
                  >
                    <div
                      style={{
                        color: 'white',
                        fontSize: 14,
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        textTransform: 'capitalize',
                        lineHeight: 20,
                        wordWrap: 'break-word',
                      }}
                    >
                      Thức ăn
                    </div>
                  </div>

                  <div
                    style={{
                      width: 50,
                      height: 20,
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 6,
                      paddingBottom: 6,
                      background: '#219D80',
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 10,
                      display: 'inline-flex',
                    }}
                  >
                    <div
                      style={{
                        color: 'white',
                        fontSize: 14,
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        textTransform: 'capitalize',
                        lineHeight: 20,
                        wordWrap: 'break-word',
                      }}
                    >
                      Y Tế
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='Maxim'>
        <table className='custom-tableMaxim'>
          <tbody>
            <tr>
              <td rowspan='2'>
                <img className='imageMaxim' src={maxim} alt='IconDown' />
              </td>

              <td>
                <p
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Playfair Display',
                    fontSize: '30px',
                  }}
                >
                  {' '}
                  “ Khi bạn hỗ trợ một người khác, bạn không chỉ đang thay đổi
                  cuộc sống của họ, mà còn đang tạo ra một chuỗi tương lai tích
                  cực. Từ thiện có tác động lan truyền, và những hành động nhỏ
                  bé có thể mang lại những kết quả lớn lao trong tương lai. “
                </p>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Newfeedpage;
