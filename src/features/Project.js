import React from 'react';
import ProjectItem from '../components/ProjectItem';
import arrowRight from '../Assets/image/icon-arrowRight.svg';
import arrowLeft from '../Assets/image/icon-arrowLeft.svg';
import '../css/pages/Project.css';

const Project = () => {
  const programUpcommingList = [
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

  const programOnGoingList = [
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

  const programImplementedList = [
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

  return (
    <div className="container">
      <div>
        <p className="title">Các chương trình sắp tới</p>
        <div className="containerProgram">
          <img
            src={arrowLeft}
            alt="arrowLeft"
            className="iconArrow"
            style={{ marginRight: '60px' }}
          />
          <div className="program">
            {programUpcommingList?.map((item, index) => {
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
          <img
            src={arrowRight}
            alt="arrowRight"
            className="iconArrow"
            style={{ marginLeft: '60px' }}
          />
        </div>
        <div>
          <p className="seeMore">Xem thêm...</p>
        </div>
      </div>
      <div>
        <p className="title">Các chương trình đang thực hiện</p>
        <div className="containerProgram">
          <img
            src={arrowLeft}
            alt="arrowLeft"
            className="iconArrow"
            style={{ marginRight: '60px' }}
          />
          <div className="program">
            {programOnGoingList?.map((item, index) => {
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
          <img
            src={arrowRight}
            alt="arrowRight"
            className="iconArrow"
            style={{ marginLeft: '60px' }}
          />
        </div>
        <div>
          <p className="seeMore">Xem thêm...</p>
        </div>
      </div>
      <div>
        <p className="title">Các chương trình đã thực hiện</p>
        <div className="containerProgram">
          <img
            src={arrowLeft}
            alt="arrowLeft"
            className="iconArrow"
            style={{ marginRight: '60px' }}
          />
          <div className="program">
            {programImplementedList?.map((item, index) => {
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
          <img
            src={arrowRight}
            alt="arrowRight"
            className="iconArrow"
            style={{ marginLeft: '60px' }}
          />
        </div>
        <div>
          <p className="seeMore">Xem thêm...</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
